import { useState } from "react";
const MovieCard = ({ Movie, enableHover = true, onClick  }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverHandler = enableHover ? {
    onMouseEnter: () => setIsHovered(true),
      onMouseLeave:() => setIsHovered(false)
  } : {};
  return (
    <div
      className="flex relative flex-shrink-0"
      {...hoverHandler}
      onClick={onClick}
    >
      <img src={Movie.image} alt={Movie.title} className={`max-sm:w-23 max-sm:h-35 w-2xs h-2xs rounded-xl hover:scale-105 transition-all ${isHovered ? "opacity-0" : "opacity-100"}`} />
      { isHovered && (
        <div className="flex flex-col gap-3 absolute -left-8 top-0 z-99 bg-[#181A1C] w-md h-xl max-md:hidden">
          <div>
            <img src={Movie.image} alt={Movie.title} className="w-md h-80" />
          </div>
          <div>
            <div className="flex gap-3 px-3">
              <button><img src="/src/assets/image/play.png" alt="" className="" /></button>
              <button><img src="/src/assets/image/checked.png" alt="" className="" /></button>
              <button className="ml-auto px-1"><img src="/src/assets/image/dropdown.png" alt="" /></button>
            </div>
          </div>
          <div className="flex py-3 justify-between px-3">
            <p>Drama</p>
            <p>Komedi</p>
            <p>Aksi</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieCard;