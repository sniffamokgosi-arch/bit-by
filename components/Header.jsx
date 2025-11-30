import Link from 'next/link'
export default function Header(){
  return (
    <header>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0'}}>
        <Link href="/">
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <img src="/images/logo.png" alt="logo" style={{height:56}}/>
            <div>
              <div style={{fontWeight:700,color:'#E8C252'}}>TRACKS</div>
              <div style={{fontSize:12,color:'#fff',opacity:0.85}}>Adventure Safaris & Lodges</div>
            </div>
          </div>
        </Link>
        <nav style={{display:'flex',gap:18,alignItems:'center'}}>
          <Link href="/">Home</Link>
          <Link href="/destinations/okavango">Okavango</Link>
          <Link href="/destinations/chobe">Chobe</Link>
          <Link href="/destinations/kalahari">Kalahari</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </header>
  )
}
