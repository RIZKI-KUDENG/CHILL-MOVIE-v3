import { useRef } from "react";

//fungsi untuk tombolslider
export const useSlider = () => {
    const sliderref = useRef(null);
    const move = (arah)=> {
        if (sliderref.current) {
            const { scrollLeft, clientWidth } = sliderref.current;
            const scrollTo =
              arah === "kiri" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            sliderref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
          }
    }
    return {sliderref, move}
}