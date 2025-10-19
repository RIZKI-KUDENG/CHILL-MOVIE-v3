import CardSliders from "../../Elements/CardSlider";
import { movieContent } from "../../../Data/MovieContent";
import { useSlider } from "../../../Hooks/useSlider";
const Content = () => {
  const { sliderref, move } = useSlider();
  return (
    <section className="mx-8 md:mx-14 relative">
      <div className="">
        <h1 className="text-xl md:text-4xl font-bold md:py-4">
          Melanjutkan Tonton Film
        </h1>
      </div>
      <div className="absolute bottom-18 left-0 z-10 max-md:hidden">
        <img
          src="/src/assets/movieslider/leftbutton.png"
          alt=""
          onClick={() => move("kiri")}
        />
      </div>
      <div
        className=" flex flex-nowrap mt-3 overflow-x-scroll "
        ref={sliderref}
      >
        <div className="flex gap-4">
          {movieContent.map((item) => (
            <CardSliders
              key={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-18 right-0 z-10 max-md:hidden">
        <img
          src="/src/assets/movieslider/rightbutton.png"
          alt=""
          onClick={() => move("kanan")}
        />
      </div>
    </section>
  );
};
export default Content;
