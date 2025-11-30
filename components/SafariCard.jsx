import Link from 'next/link'
export default function SafariCard({slug,title,desc,img}){
  return (
    <Link href={'/destinations/'+slug}>
      <div className="card">
        <img src={img} alt={title}/>
        <div className="card-body">
          <h3>{title}</h3>
          <p style={{color:'#666'}}>{desc}</p>
        </div>
      </div>
    </Link>
  )
}
