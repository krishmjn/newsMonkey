import React from 'react'

const Newscomponent = ({title,description,url,img}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target='_blank' className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Newscomponent