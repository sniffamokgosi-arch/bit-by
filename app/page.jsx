import Hero from '../components/Hero'
import Link from 'next/link'

export default function Page(){
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 style={{fontSize:44,marginBottom:8}}>Discover Botswana with TRACKS</h1>
          <p style={{fontSize:18,opacity:0.95}}>Mid-range adventure safaris — comfortable lodges, expert guides, unforgettable wildlife.</p>
        </div>
      </section>

      <section className="container" style={{paddingTop:30,paddingBottom:30}}>
        <h2 style={{color:'#5D4037'}}>Featured Safaris</h2>
        <div className="cards">
          <Link href="/destinations/okavango">
            <div className="card">
              <img src="/images/PHOTO-2025-11-15-14-35-27.jpg" alt="Okavango"/>
              <div className="card-body">
                <h3>Okavango Delta Explorer</h3>
                <p style={{color:'#666'}}>Mokoro rides, seasonal birdlife and relaxed game drives.</p>
                <div style={{marginTop:12}}><span className="btn">View</span></div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/chobe">
            <div className="card">
              <img src="/images/PHOTO-2025-11-15-14-31-27.jpg" alt="Chobe"/>
              <div className="card-body">
                <h3>Chobe National Park</h3>
                <p style={{color:'#666'}}>River cruises, elephant encounters and classic sunsets.</p>
                <div style={{marginTop:12}}><span className="btn">View</span></div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/kalahari">
            <div className="card">
              <img src="/images/PHOTO-2025-11-15-14-59-55 2.jpg" alt="Kalahari"/>
              <div className="card-body">
                <h3>Kalahari Desert Expedition</h3>
                <p style={{color:'#666'}}>Red dunes, cultural visits and unique desert wildlife.</p>
                <div style={{marginTop:12}}><span className="btn">View</span></div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
