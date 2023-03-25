import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css";

import { SlideCard } from "../SlideCard/SlideCard";
import "./Slider.css";

import photo_1 from "./SliderImg/photo_1.svg";
import photo_2 from "./SliderImg/photo_2.svg";
import photo_3 from "./SliderImg/photo_3.svg";

const slides = [
  {
    id: 1,
    name: "Cory Delmeir",
    title: "The best ones!",
    desc: "I was using a couple of services, but only HireArt really helped… They have great features like intuitive UI, ease of use /UX and great customer service agents like Anna, who helped through the process. I will recommend it to my friends.  Give this service a chance!",
    img: photo_1,
    pos: "Frontend developer",
  },
  {
    id: 2,
    name: "Cory Delmeir",
    title: "Excellent service for both candidates & HRs",
    desc: "I had over 60 open positions in 2022 so I had been dreading the hiring flow, like how I would go through everything and figure out the best ones. Fortunately, I found HireArt and it's honestly saved me so much time. I am a new one in the field, but Jon from support helped me out right away. I'm very happy with this platform and will definitely use it again for my further carrier.",
    img: photo_2,
    pos: "HR at Netflix",
  },
  {
    id: 3,
    name: "Cory Delmeir",
    title: "Works for both!",
    desc: "HireArt is one of the few companies in the industry that has good spaces for both Hr specialists and artistic minds. This service respects users and saves time. Their interface is also very intuitive to use and does an awesome job of simplifying a very complex applying and hiring profile. I'm extremely happy with HireArt. ",
    img: photo_3,
    pos: "Visual Creator",
  },
  {
    id: 4,
    name: "Cory Delmeir",
    title: "Works for both!",
    desc: "HireArt is one of the few companies in the industry that has good spaces for both Hr specialists and artistic minds. This service respects users and saves time. Their interface is also very intuitive to use and does an awesome job of simplifying a very complex applying and hiring profile. I'm extremely happy with HireArt. ",
    img: photo_3,
    pos: "Visual Creator",
  },
];

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

export const Slider = () => {
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
