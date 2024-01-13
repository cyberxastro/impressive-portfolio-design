import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../img/img1.png'
import Ecommerce from '../../img/img2.png'
import Musicapp from '../../img/img3.png'
import Linktree from '../../img/linktree.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    return (
        <div className="portfolio" id='Portfolio'>
            <span style={{ color: darkmode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper slidesPerView={3} grabCursor={true} className='portfolio-slider'>
                <SwiperSlide>
                    <img id='slideimg' src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img id='slideimg' src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img id='slideimg' src={Musicapp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img id='slideimg' src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img id='slideimg' src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img id='slideimg' src={Musicapp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio