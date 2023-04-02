import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import { SlideCard } from '../SlideCard/SlideCard';
import 'swiper/swiper.min.css';
import './Slider.css';
import { useRef } from 'react';

function Arrow({ className }) {
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
}

Arrow.propTypes = {
  className: PropTypes.string,
};

export function Slider({ slides }) {
  const swiperRef = useRef(null);

  const swiperParams = {
    slidesPerView: 'auto',
    spaceBetween: 48,
    initialSlide: 0,
    loopedSlides: 3,
    loop: true,
    rewind: true,
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
    modules: [Navigation],
    on: {
      init: () => {
        swiperRef.current.swiper.slideNext();
      },
    },
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     centeredSlides: true,
    //   },
    //   1024: {
    //     slidesPerView: 2,
    //     spaceBetween: 24,
    //   },
    //   1366: {
    //     slidesPerView: 3,
    //     spaceBetween: 48,
    //   },
    // },
  };
  return (
    <>
      <Swiper {...swiperParams} ref={swiperRef}>
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
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
        <button
          className="swiper-button swiper-button-prev-custom"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <Arrow className="swiper-icon swiper-icon--left" />
        </button>
        <button
          className="swiper-button swiper-button-next-custom"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <Arrow className="swiper-icon swiper-icon" />
        </button>
      </div>
    </>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      pos: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
};

Slider.defaultProps = {
  slides: [],
};
