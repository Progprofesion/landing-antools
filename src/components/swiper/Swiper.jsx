import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './swiper.scss';


// import required modules
import { Pagination, Navigation } from "swiper";

import man from '../../assets/img/man.png';
import comma from '../../assets/img/comma.svg';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper"
            >
                <SwiperSlide><div className="swiper__wrapp">
                    <img className="swiper__img" src={man} alt="man" />
                    <div className="swiper__wrappName">
                        <p className="swiper__wrappName-name fz-26-500">Ronald Richards</p>
                        <p className="swiper__wrappName-post fz-16-400">Product Manager</p>
                    </div>
                    <p className="swiper__descr ">
                        Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
                        <img src={comma} alt="''" className="swiper__comma" />
                    </p>
                </div></SwiperSlide>
                <SwiperSlide><div className="swiper__wrapp">
                    <img className="swiper__img" src={man} alt="man" />
                    <div className="swiper__wrappName">
                        <p className="swiper__wrappName-name fz-26-500">Ronald Richards</p>
                        <p className="swiper__wrappName-post fz-16-400">Product Manager</p>
                    </div>
                    <p className="swiper__descr">
                        <img src={comma} alt="" className="swiper__comma" />
                        Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
                </div></SwiperSlide>
                <SwiperSlide><div className="swiper__wrapp">
                    <img className="swiper__img" src={man} alt="man" />
                    <div className="swiper__wrappName">
                        <p className="swiper__wrappName-name fz-26-500">Ronald Richards</p>
                        <p className="swiper__wrappName-post fz-16-400">Product Manager</p>
                    </div>
                    <p className="swiper__descr">
                        <img src={comma} alt="" className="swiper__comma" />
                        Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
                </div></SwiperSlide>
            </Swiper>
        </>
    );
}
