import React, { useState } from 'react'
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap'

const CarouselEml = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const items = [
    {
      src: 'img/bgrande_1.png',
      class1: 'text-img-1',
      text1: 'Comunicación, ciencia',
      class2: 'text-2-img-1',
      text2: 'y creatividad para el',
      class3: 'text-3-img-1',
      text3: 'cuidado de la vida',
    },
    {
      src: 'img/bgrande_2.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      class1: 'text-img-2',
      text1: 'Nuestro territorio',
      class2: 'text-2-img-2',
      text2: 'es healthcare',
      class3: 'text-3-img-2',
      text3: 'Nuestro territorio',
      class4: 'text-4-img-2',
      text4: 'es el mundo',
    },
    {
      src: 'img/bgrande_3.jpg',
      altText: 'Slide 3',
      class1: 'text-img-3',
      text1: 'Más de',
      subText: ' 20 años',
      class2: 'text-2-img-3',
      text2: 'de experiencia en',
      class3: 'text-3-img-3',
      text3: 'comunicación estratégica',
      class4: 'text-4-img-3',
      text4: 'para el cuidado de la vida',
    },
  ]

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        slide
      >
        <img src={item.src} alt={item.altText} />
        <div className={`top-text-${index + 1}`}>
          <h2 className={item.class1}>
            {item.text1}{' '}
            {item.subText && <span className="subText">{item.subText}</span>}
          </h2>
          <h2 className={item.class2}>{item.text2}</h2>
          <h2 className={item.class3}>{item.text3}</h2>
          {item.text4 && <h2 className={item.class4}>{item.text4}</h2>}
        </div>
      </CarouselItem>
    )
  })

  return (
    <React.Fragment>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x="10"
            y="3"
            fill="rgba(255,255,255,.1)"
          />
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x="10"
            y="0"
            fill="rgba(255,255,255,.2)"
          />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>
    </React.Fragment>
  )
}

export default CarouselEml
