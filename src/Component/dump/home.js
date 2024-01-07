//












// col-12: Specifies full width on extra-small screens.
// col-sm-6: Specifies half width on small screens and larger.
// col-md-4: Specifies one-third width on medium screens and larger.
// col-lg-3: Specifies one-fourth width on large screens and larg
// className="m-2 col-12 col-sm-6 col-md-4 col-lg-3"
import React from 'react'
//import axios from 'axios';
import im from '../../images/backgr.jpg'
// import '../index.css';
import './../../index.css'
import { Button } from '../Home/HomeStyle';
const home = () => {

  return (
    <>
  <div className='card card-responsive object-fit-cover  bg-light' style={{width: "18rem;",height:"1000px;"}}>
  <div className="card-body">
  <img className="card-img img-responsive" src={im} alt="CardImage" style={{ width:"500px",height: "auto;",float:"right",objectPosition:"right"}} />
  <div className="card-img-overlay img-responsive" style={{textAlign:"left",marginTop: "180px",marginLeft:"50px", width: "100%",height: "auto",maxWidth:"100%",}}>
    <h1 className="card-title fw-light" style={{fontSize:"2.5vw"}}><b className='fw-light'>Smart Products</b></h1>
    <p className="card-text fw-light" style={{fontSize:"4vw"}}>
      Winter offer <br/> 2024 collection
      </p>
      <Button className='btn   btn-round ' >SHOP NOW</Button>
      </div>
  </div>
      </div>

    </>
  )
}

export default home
