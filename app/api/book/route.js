import { NextResponse } from 'next/server'

export async function POST(req){
  try {
    const body = await req.json()
    // Basic validation
    if(!body.name || !body.email || !body.phone) {
      return NextResponse.json({error:'missing fields'}, {status:400})
    }

    // If SANITY_API_TOKEN is present, store booking in Sanity
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    const token = process.env.SANITY_API_TOKEN

    if(token && projectId) {
      const doc = {
        _type: 'booking',
        name: body.name,
        email: body.email,
        phone: body.phone,
        people: Number(body.people || 1),
        destination: body.destination,
        basePrice: body.basePrice || null,
        createdAt: new Date().toISOString()
      }
      await fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`,{
        method:'POST',
        headers:{'Content-Type':'application/json', Authorization:`Bearer ${token}`},
        body: JSON.stringify({mutations:[{create:doc}]})
      })
    } else {
      // Log to console if Sanity not configured
      console.log('Booking received (not saved to Sanity):', body)
    }

    // TODO: integrate email/WhatsApp notifications via provider
    return NextResponse.json({ok:true})
  } catch (err) {
    console.error(err)
    return NextResponse.json({error:'server error'}, {status:500})
  }
}
