import BookingForm from '../../../components/BookingForm'
import { notFound } from 'next/navigation'

const DATA = {
  okavango: {
    title: 'Okavango Delta Explorer',
    subtitle: 'Mokoro trips, birding and relaxed game drives',
    hero: '/images/PHOTO-2025-11-15-14-35-27.jpg',
    description: `<p>Explore the world-famous Okavango Delta on comfortable game drives and traditional mokoro trips. This mid-range safari balances wildlife viewing with comfortable lodging – perfect for travelers who want adventure without roughing it out.</p><ul><li>Mokoro and boat safaris</li><li>Sunrise & sunset game drives</li><li>Expert local guides</li></ul>`,
    gallery: ['/images/PHOTO-2025-11-15-14-35-27.jpg','/images/PHOTO-2025-11-15-14-31-58.jpg'],
    price: 1200
  },
  chobe: {
    title: 'Chobe National Park Adventure',
    subtitle: 'River cruises and large elephant herds',
    hero: '/images/PHOTO-2025-11-15-14-31-27.jpg',
    description: `<p>Chobe is famous for its large elephant populations and excellent river safaris. Enjoy boat cruises along the Chobe River, excellent photographic opportunities and comfortable lodge stays.</p><ul><li>Boat cruises</li><li>Night drives</li><li>Birdwatching</li></ul>`,
    gallery: ['/images/PHOTO-2025-11-15-14-31-27.jpg','/images/PHOTO-2025-11-15-14-31-58.jpg'],
    price: 950
  },
  kalahari: {
    title: 'Kalahari Desert Expedition',
    subtitle: 'Red dunes, cultural visits and unique wildlife',
    hero: '/images/PHOTO-2025-11-15-14-59-55 2.jpg',
    description: `<p>The Kalahari invites travelers to experience dramatic desert landscapes, San cultural visits and species adapted to arid environments. Comfortable camps and expert guides make this an accessible desert adventure.</p><ul><li>Cultural village visits</li><li>Sand dune walks</li><li>Species spotting (meerkats, gemsbok)</li></ul>`,
    gallery: ['/images/PHOTO-2025-11-15-14-59-55 2.jpg','/images/PHOTO-2025-11-15-14-31-58.jpg'],
    price: 800
  }
}

export default function Page({params}) {
  const slug = params?.slug ?? 'okavango'
  const doc = DATA[slug]
  if(!doc) return notFound()
  return (
    <>
      <section style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.15)),url(${doc.hero})`,backgroundSize:'cover',padding:'80px 20px',color:'white',textAlign:'center'}}>
        <div className="container">
          <h1 style={{fontSize:40}}>{doc.title}</h1>
          <p style={{opacity:0.95}}>{doc.subtitle}</p>
        </div>
      </section>

      <section className="container" style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:24,paddingTop:24}}>
        <article>
          <div dangerouslySetInnerHTML={{__html:doc.description}} />
          <h4>Gallery</h4>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:10}}>
            {doc.gallery.map((g,i)=>(<img key={i} src={g} style={{width:'100%',height:110,objectFit:'cover',borderRadius:6}}/>))}
          </div>
        </article>

        <aside>
          <div className="booking-aside">
            <h3>From: USD {doc.price}</h3>
            <p>Deposit: 25% required to secure booking</p>
            <BookingForm destination={doc.title} basePrice={doc.price}/>
          </div>
        </aside>
      </section>
    </>
  )
}
