const CardSliders = (props) => {
  const { title, image, rating, id } = props;
  return (
    <div className="max-sm:w-xs max-sm:h-xs w-sm h-sm relative">
      <img src={image} alt={title} key={id} className="rounded-2xl" />
      <h5 className="absolute bottom-2  left-2 text-sm md:text-lg">{title}</h5>
      <p className="absolute bottom-2  right-2 text-sm md:text-lg">
        <span>&#9733;</span>
        {rating}
      </p>
    </div>
  );
};
export default CardSliders;