export default function Hero({title,subtitle,image}) {
  const style = {backgroundImage:`linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.15)),url('${image || '/images/PHOTO-2025-11-15-14-31-15.jpg'}')`,backgroundSize:'cover',padding:'80px 20px',color:'white',textAlign:'center'}
  return (
    <section style={style}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <h1 style={{fontSize:40}}>{title}</h1>
        <p style={{opacity:0.95}}>{subtitle}</p>
      </div>
    </section>
  )
}
