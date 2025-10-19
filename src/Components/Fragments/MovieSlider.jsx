import { useSlider } from "../../Hooks/useSlider";
import MovieCard from "./MovieCard";


const MovieSlider = (props) => {
  const { title, movies, enableHover, onCardClick } = props;
  const { sliderref, move } = useSlider();
  return (
    <section className="mx-8 md:mx-14 mt-7 relative md:py-4">
      <div className=" mb-3 md:mb-3">
        <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      </div>
      <div className="absolute bottom-50 left-0 z-10 max-md:hidden">
        <img
          src="/src/assets/movieslider/leftbutton.png"
          alt=""
          onClick={() => move("kiri")}
        />
      </div>
      <div
        className="flex flex-nowrap overflow-x-scroll gap-4 md:py-4"
        ref={sliderref}
      >
        {movies.map((movie) => {
          return <MovieCard Movie={movie} key={movie.id} enableHover={enableHover} onClick={() => onCardClick(movie)} />;
        })}
      </div>
      <div className="absolute bottom-50 right-0 z-10 max-md:hidden">
        <img
          src="/src/assets/movieslider/rightbutton.png"
          alt=""
          onClick={() => move("kanan")}
        />
      </div>
    </section>
  );
};
export default MovieSlider;