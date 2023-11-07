import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const Home = () => {
  const items = [
    {
      src: '/images/home-slider-1.png',
      caption: `January 7th , 2023
      Lyman High School
      (Auditorium)
      Longwood, FL`,
      key: 1,
    },
    {
      src: '/images/home-slider-2.png',
      caption: `January 7th , 2023
      Lyman High School
      (Auditorium)
      Longwood, FL`,
      key: 2,
    },
    {
      src: '/images/home-slider-3.png',
      caption: `January 7th , 2023
      Lyman High School
      (Auditorium)
      Longwood, FL`,
      key: 3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='img-fluid w-100' />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className='home'>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ride='carousel'
        interval={3000}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default Home;
