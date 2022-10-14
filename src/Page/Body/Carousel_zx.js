import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './Carousel_zx.css';
const items = [
  {
    src: './images/3.jpg',
    objectfit:'cover',
    // objectpos:'0% 0%',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://img5.goodfon.com/wallpaper/nbig/e/e3/devushka-portret-litso-vzgliad-kai-boet-kai-bottcher-ochki-o.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
    objectfit:'cover',
    objectpos:'0% 30%',
  },
  {
    src: 'https://img5.goodfon.com/wallpaper/nbig/b/47/girl-glasses-blue.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
    objectfit:'cover',
    objectpos:'0% 30%',
  },
];

function Example(args) {
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
        <img src={item.src} alt={item.altText} style={{objectFit:`${item.objectfit}`, objectPosition:`${item.objectpos}`}}/>
        <div className='anh'>
            <div className='img-anh'>
                  <img src= "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/main-home-rev-img-19.png"/>
                  <div className='btn-book'>
                  BOOK NOW
                  </div>
                    <span className='btn-hover'></span>
            </div>
        </div>
        
            <div className='anh__h1'>
                <h1>VISION YOU DESERVE</h1>
                <p>Offering you the best service possible</p>
                <button className='btn__viewmore'>VIEW MORE</button>
            </div>
        
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (

    


    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}

    


    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;