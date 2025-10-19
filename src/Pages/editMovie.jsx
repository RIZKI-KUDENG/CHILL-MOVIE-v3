import { useEffect, useState } from "react";
import { useMovies } from "../store/useMovies";
import MovieSlider from "../Components/Fragments/Movies/MovieSlider";
import { useModal } from "../store/useModal";
import Button from "../Components/Elements/Button";
import MovieModal from "../Components/Fragments/Modal/MovieModal";
import AddMovieModal from "../Components/Fragments/Modal/AddMovieModal";

const EditMoviePage = () => {
  const { onOpenModal, activeModal, onClose } = useModal();
  const { getMovies, movies, isLoading } = useMovies();
  useEffect(() => {
    getMovies();
  }, []);
  const top = movies.filter((movie) => movie.kategori === "Top");
  const New = movies.filter((movie) => movie.kategori === "New");
  const trending = movies.filter((movie) => movie.kategori === "Trending");
  const handleCardClick = (movieData) => {
    onOpenModal("editMovie", movieData);
  };
  return (
    <>
      <h1 className="text-2xl md:text-6xl font-bold text-center mb-2">
        Edit Movie
      </h1>
      <Button
        className="md:py-3 rounded-full bg-[#E7E3FC3B] mx-auto w-30 hover:bg-slate-300 hover:bg-opacity-20 transition-colors font-normal flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => onOpenModal("AddMovieModal")}
      >
        Tambah Movie
      </Button>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieSlider
          title="Top Movie"
          movies={top}
          enableHover={false}
          onCardClick={handleCardClick}
        />
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieSlider
          title="New Movie"
          movies={New}
          enableHover={false}
          onCardClick={handleCardClick}
        />
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieSlider
          title="Trending Movie"
          movies={trending}
          enableHover={false}
          onCardClick={handleCardClick}
        />
      )}
      {activeModal.name === "editMovie" && (
        <MovieModal onClose={onClose} movie={activeModal.data} />
      )}
      {activeModal.name === "AddMovieModal" && (
        <AddMovieModal onClose={onClose} />
      )}
    </>
  );
};
export default EditMoviePage;
