import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./vrSlider.module.css";
import arowLeft from "./../../../assets/svg/slider-arow/left.svg";
import arowRight from "./../../../assets/svg/slider-arow/right.svg";
import { SliderPagination } from "../sliderPagination/sliderPagination";
import useWindowResize from "../../../hooks/useWindowResize.jsx";

const VrSlider = ({ ...props }) => {
  const { width, height } = useWindowResize();
  const [currentNumber, setCurrentNumber] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.vrSliderContainer}>
      <h3 className={styles.title}>Что показываем в планетарии</h3>
      <div className={styles.swiperContainer}>
        <Swiper
          className="mySwiper"
          style={{ position: "relative" }}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          loop={true}
          // pagination={{
          //   type: "fraction",
          // }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={(swiper) => setCurrentNumber(swiper.realIndex + 1)}
          // onSwiper={(swiper) => console.log(swiper)}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            // console.log(swiper.realIndex);
            setCurrentNumber(swiper.snapIndex);
          }}
        >
          {/* className={styles.image} */}
          {props.images.map((image) => (
            <SwiperSlide
              key={image.index}
              style={
                width >= 1366
                  ? {
                      width: "580px !important",
                      height: "315px",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "flex-end",
                    }
                  : {
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }
              }
            >
              <div style={{ zIndex: "3" }}>
                <img
                  style={
                    width >= 1366
                      ? {
                          objectFit: "cover",
                          width: "561px",
                          height: "300px",
                          zIndex: "1",
                        }
                      : {
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          zIndex: "3",
                        }
                  }
                  src={image.url}
                  alt={image.description}
                />
              </div>

              <div className={styles.greenBorder}></div>
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
      <SliderPagination currentNumber={currentNumber} countedAll={6} />
    </div>
  );
};

export default VrSlider;
