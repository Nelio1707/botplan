"use client";

import { CarrosselProps } from "./interface-props";
import imageByIndex from "./imageByIndex";
import Image from "next/image";
import "./style.css";
import useEmblaCarousel from "embla-carousel-react";

export default function Carrossel(props: CarrosselProps) {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <Image
              className="embla__slide__img !w-64 !h-auto rounded mx-1"
              src={imageByIndex(index)}
              alt="Your alt text"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
