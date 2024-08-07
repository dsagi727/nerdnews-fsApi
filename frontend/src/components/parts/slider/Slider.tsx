import { useRef, useState } from 'react';
import SliderButton from './SliderButton';
import CustomNavLink from '../../CustomNavLink';

interface SliderProps {
  children: React.ReactNode;
  moreLabel: string;
  morePath: string;
}

function Slider({ children, moreLabel, morePath }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const percentage = (slider.scrollLeft / maxScrollLeft) * 100;
      setScrollPercentage(percentage);
    }
  };

  return (
    <div className="relative py-4 scroll-smooth">
      <div ref={sliderRef} className="flex overflow-x-scroll scrollbar-hide" onScroll={handleScroll}>
        {children}
      </div>

      <div className="relative h-1.5 my-5 rounded-full bg-border-light dark:bg-border-dark">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-border-dark dark:bg-primary"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
      {scrollPercentage > 0 && <SliderButton direction="left" sliderRef={sliderRef} />}
      {scrollPercentage < 99 && <SliderButton direction="right" sliderRef={sliderRef} />}
      <div className="text-right">
        <CustomNavLink text={moreLabel} path={morePath} />
      </div>
    </div>
  );
}

export default Slider;
