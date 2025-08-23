import React from "react";
import "./StackIcons.css";
import { Swiper, SwiperSlide } from "swiper/react";

function StackIcons({ stack }) {
  return (
    <div className="stack-container">
      <Swiper
        slidesPerView={3}
        style={{
          display: "flex",
          paddingInline: "10px",
        }}
      >
        {stack.map((tech, index) => (
          <SwiperSlide key={index}>
            <button className="tech-icon" aria-color={tech.name}>
              <img src={tech.icon} alt="" className="tech-image" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default StackIcons;
