"use client";

import { getData } from "api";
import "./PartnersBlock.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersBlock = () => {
  const [partners, setPartners] = useState([]);
  const sliderRef = useRef(null);
  const dragStartY = useRef(null);
  const baseOffset = useRef(0);
  const currentDelta = useRef(0);

  useEffect(() => {
    getData("partners", setPartners);
  }, []);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const groupedPartners = chunkArray(partners, 5);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    draggable: false,
    swipe: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    customPaging: () => <div className="custom-dot"></div>,
  };

  const handleMouseDown = (e) => {
    sliderRef.current?.slickPause();
    dragStartY.current = e.clientY;
    currentDelta.current = 0;
    const track = document.querySelector(".slick-track");
    if (track) {
      const computed = window.getComputedStyle(track);
      const transform = computed.transform;
      let translateY = 0;
      if (transform && transform !== "none") {
        const match = transform.match(/matrix.*\((.+)\)/);
        if (match) {
          const values = match[1].split(",").map((val) => parseFloat(val.trim()));
          translateY = values[5];
        }
      }
      baseOffset.current = translateY;
    }
  };

  const handleMouseMove = (e) => {
    if (dragStartY.current === null) return;
    const deltaY = e.clientY - dragStartY.current;
    currentDelta.current = deltaY;
    const track = document.querySelector(".slick-track");
    if (track) {
      track.style.transform = `translate3d(0, ${baseOffset.current + deltaY}px, 0)`;
    }
  };

  const handleMouseUp = () => {
    const threshold = 50;
    if (currentDelta.current < -threshold) {
      sliderRef.current?.slickNext();
    } else if (currentDelta.current > threshold) {
      sliderRef.current?.slickPrev();
    } else {
      const track = document.querySelector(".slick-track");
      if (track) {
        track.style.transition = "transform 0.3s ease";
        track.style.transform = `translate3d(0, ${baseOffset.current}px, 0)`;
        setTimeout(() => {
          if (track) track.style.transition = "";
        }, 300);
      }
    }
    dragStartY.current = null;
    currentDelta.current = 0;
    sliderRef.current?.slickPlay();
  };

  const handleMouseLeave = () => {
    if (dragStartY.current !== null) {
      handleMouseUp();
    }
  };

  return (
    <div className="partners">
      <h1 className="partners__title _main-title">Наші партнери</h1>
      <div className="partners__line"></div>
      <div className="partners__wrapper">
        <div
          className="partners__container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="partners__slider-wrapper">
            <Slider ref={sliderRef} {...settings} className="partners__slider">
              {groupedPartners.map((group, index) => (
                <div className="partners__block" key={index}>
                  <div className="partners__row">
                    {group.map((partner) => (
                      <div className="partners__partner" key={partner.id}>
                        <Image
                          src={"http://drive.google.com/uc?export=view&id=" + partner.path}
                          width={130}
                          height={130}
                          alt="img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersBlock;
