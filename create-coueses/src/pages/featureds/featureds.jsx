import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";
const Featureds = () => {
    const [data, setData] = useState([])
    const getData = async()=>{
        const data= await axios.get("http://localhost:8080/featureds")
        setData(await data.data)
    }
    useEffect(() => {
      getData()
    }, [])
    
  return (
    <div >
        <h1 style={{color:"blue", marginLeft:"40%"}}>Our featured courses</h1>

   

<Swiper
//  slidesPerView={3}
//  spaceBetween={30}
//  pagination={{
//    clickable: true,
//  }}
//  modules={[Pagination]}
//  className="mySwiper"
slidesPerView={3}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
loop={true}
spaceBetween={35}
navigation={true}
modules={[Autoplay, Navigation]}
className="mySwiper"
      >
       {
        data.map((el,i)=>{
return(
    <SwiperSlide>
    <Link to={`/${el._id}`} >
    <div style={{padding:"8%"}} key={el._id}>
        <div><img src={el.imgurl}/></div>
        <div>
<p>User Experince</p>
<a href="#" >Fundamental of UX for Application design</a>
<p>
"The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people. "
</p>
<div className="icons">
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-solid fa-star star"></i>
                        <i className="fa-regular fa-star-half star"></i>
                        <p className="txt">
                          <span style={{color:"orangered"}}>(4.5)</span> based on 120
                        </p>
                        <span>135$</span>
                      </div>
        </div>
        <button className='downSlide'>Find Our More</button>
    </div>
    </Link>
</SwiperSlide>
)
        })
       }
       
        




      </Swiper>

     
    </div>
  )
}

export default Featureds