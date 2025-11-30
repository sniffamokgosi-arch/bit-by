'use client'
import {useState} from 'react'
export default function BookingForm({destination,basePrice}){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [phone,setPhone]=useState(''); const [people,setPeople]=useState(2); const [agree,setAgree]=useState(false); const [msg,setMsg]=useState('');
  async function submit(e){ e.preventDefault(); if(!agree){ setMsg('You must accept terms'); return; } const payload={destination,name,email,phone,people,basePrice}; const res=await fetch('/api/book',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)}); if(res.ok){ setMsg('Booking received — we will contact you.'); setName(''); setEmail(''); setPhone(''); setPeople(2); setAgree(false);} else { setMsg('Error saving booking'); } }
  return (
    <form onSubmit={submit}>
      <label>Name<input value={name} onChange={e=>setName(e.target.value)} required/></label>
      <label>Email<input type='email' value={email} onChange={e=>setEmail(e.target.value)} required/></label>
      <label>Phone<input value={phone} onChange={e=>setPhone(e.target.value)} required/></label>
      <label>People<select value={people} onChange={e=>setPeople(e.target.value)}><option>1</option><option>2</option><option>3</option><option>4</option></select></label>
      <label style={{display:'flex',gap:8,alignItems:'center'}}><input type='checkbox' checked={agree} onChange={e=>setAgree(e.target.checked)}/> I agree to the <a href='/terms' target='_blank'>terms & conditions</a></label>
      <div style={{marginTop:10}}><button className="btn" type="submit">Request Booking — 25% deposit</button></div>
      {msg && <p style={{color:'#5D4037'}}>{msg}</p>}
    </form>
  )
}
