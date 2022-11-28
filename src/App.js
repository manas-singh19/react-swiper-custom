import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <Swiper
        className="swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        // navigation
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            if (parseInt(index) == parseInt(0)) {
              return (
                '<div class="dotbold ' + className + '">' + 
                 (`<span class="dotIdnex">.0${index + 1}</span><p class="dotDivider"></p><p class="dottext"> AirPods Cub Edition</p>`) 
                + "</div>"
              );
            } 
            if (parseInt(index) == parseInt(1)) {
              return (
                '<div class="dotbold ' + className + '">' + 
                 (`<span class="dotIdnex">.0${index + 1}</span><p class="dotDivider"></p><p class="dottext">Magsafe Wolf Edition</p>`) 
                + "</div>"
              );
            }
            if (parseInt(index) == parseInt(2)) {
              return (
                '<div class="dotbold ' + className + '">' + 
                 (`<span class="dotIdnex">.0${index + 1}</span><p class="dotDivider"></p><p class="dottext">Heavy Duty Lioness Edition</p>`) 
                + "</div>"
              );
            }  
          },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onRealIndexChange={(element) =>
          setActiveIndex(parseInt(element.activeIndex) + parseInt(1))
        }
        //scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => alert(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="swiperSlider">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperSlider">Slide 2</SwiperSlide>
        <SwiperSlide className="swiperSlider">Slide 3</SwiperSlide> 

        <div className="navigation">
          <div className="navigationPrev navigation-item" ref={prevRef}>
            <p>
              <IoIosArrowBack />
            </p>
          </div>
          <div className="navigation-item navigation-counter">
            {activeIndex}
          </div>
          <div className="navigationNext navigation-item" ref={nextRef}>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
        </div>

        <div className="swiper-pagination"> </div>
        
      </Swiper>
    </>
  );
}

export default App;
