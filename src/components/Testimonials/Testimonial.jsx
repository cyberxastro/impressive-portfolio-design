import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial = () => {

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Colleagues always gets</span>
                <span>Exceptionnal Work</span>
                <span>from me </span>
                {/* <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div> */}
                {/* <div className="blur t-blur2" style={{ background: "skyblue" }}></div> */}
            </div>
            <Swiper>


            </Swiper>
        </div>
    )
}
// 1.38.30
export default Testimonial