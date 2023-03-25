import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { SlideCard } from "../SlideCard/SlideCard";
import "./Slider.css";

const Arrow = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 9 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.294846 13.7073C0.685371 14.0978 1.31854 14.0978 1.70906 13.7073L7.70906 7.70731C8.09958 7.31678 8.09958 6.68362 7.70906 6.29309L1.70906 0.293093C1.31854 -0.0974322 0.685371 -0.0974322 0.294846 0.293093C-0.095678 0.683616 -0.095678 1.31678 0.294846 1.70731L5.58774 7.0002L0.294846 12.2931C-0.095678 12.6836 -0.095678 13.3168 0.294846 13.7073Z"
      />
    </svg>
  );
};

export const Slider = ({ slides = [] }) => {
  return (
    <>
      <Swiper
        slidesPerView={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          clickable: true,
        }}
        modules={[Navigation]}
      >
        {slides.map((slide) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <SlideCard
              name={slide.name}
              title={slide.title}
              img={slide.img}
              desc={slide.desc}
              pos={slide.pos}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="controller">
        <div className="swiper-button swiper-button-prev">
          <Arrow className="swiper-icon swiper-icon--left" />
        </div>
        <div className="swiper-button swiper-button-next">
          <Arrow className="swiper-icon swiper-icon" />
        </div>
      </div>
    </>
  );
};
