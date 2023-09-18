import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./howItWorkSlider.module.css";
import useWindowResize from "../../../hooks/useWindowResize";
import arowLeft from "./../../../assets/svg/slider-arow/left.svg";
import arowRight from "./../../../assets/svg/slider-arow/right.svg";
import { SliderPagination } from "../../atoms/sliderPagination/sliderPagination";

function HowItWorkSlider({ howItWorkListData }) {
  const { width, height } = useWindowResize();
  const [currentNumber, setCurrentNumber] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.howItWorkSliderSwiper}>
      <div className={styles.swiperContainer}>
        <Swiper
          className="mySwiper"
          style={{ position: "relative" }}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={(swiper) => setCurrentNumber(swiper.realIndex + 1)}
          onSwiper={(swiper) => console.log(swiper)}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            console.log(swiper.realIndex);
            setCurrentNumber(swiper.snapIndex);
          }}
        >
          {/* className={styles.image} */}
          {howItWorkListData.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  zIndex: "3",
                  textAlign: "center",
                  padding: "10px 0 0px 0",
                  marginBottom:"20px"
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "195px",
                    height: "130px",
                    position:"relative",
                    zIndex: "2",
                  }}
                  src={item.img}
                  alt={item.title}
                />
                <div className={styles.greenBorder}></div>
                <div className={styles.imgNumber}><p>{item.id}</p></div>
                <div className={styles.sliderDescription}>
                  <h4 className={styles.sliderTile}>{item.title}</h4>
                  <p className={styles.slidertext}>{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="space"
            style={{ height: "48px", position: "relative", zIndex: "2" }}
          >
            <div ref={prevRef} className={styles.swiperButtonPrev}>
              <img className="" src={arowLeft} alt="" />
            </div>
            <div ref={nextRef} className={styles.swiperButtonNext}>
              <img src={arowRight} alt="" />
            </div>
          </div>
        </Swiper>
      </div>
      <SliderPagination className={styles.position} currentNumber={currentNumber} countedAll={4}/>
    </div>
  );
}
 
export default HowItWorkSlider;
