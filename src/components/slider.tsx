"use client";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slide1 from "../assets/electronics.jpg";
import Slide2 from "../assets/jewerly.jpg";
import Slide3 from "../assets/men-clothes.jpg";
import Slide4 from "../assets/women-clothes.jpg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: " center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <BsArrowRightCircleFill className='min-w-9 min-h-9 text-primary-500 hover:text-primary-600 p-0 cursor-pointer border-none outline-none bg-transparent before:content-center' />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: " center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <BsArrowLeftCircleFill className='min-w-9 min-h-9 text-primary-500 hover:text-primary-600 p-0 cursor-pointer border-none outline-none bg-transparent before:content-center' />
    </div>
  );
}

export default function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    arrow: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='w-full h-[70vh]'>
      <SlickSlider className='max-w-screen' {...settings}>
        <div className='max-w-screen h-[70vh]'>
          <Image
            src={Slide1}
            className='size-full object-cover object-top'
            alt='Slider Image'
            loading='lazy'
          />
        </div>
        <div className='max-w-screen h-[70vh]'>
          <Image
            src={Slide2}
            className='size-full object-cover object-top'
            alt='Slider Image'
            loading='lazy'
          />
        </div>
        <div className='max-w-screen h-[70vh]'>
          <Image
            src={Slide3}
            className='size-full object-cover object-top'
            alt='Slider Image'
            loading='lazy'
          />
        </div>
        <div className='max-w-screen h-[70vh]'>
          <Image
            src={Slide4}
            className='size-full object-cover object-top'
            alt='Slider Image'
            loading='lazy'
          />
        </div>
      </SlickSlider>
    </div>
  );
}
