import Navbar from "../Components/Fragments/Hero/Navbar";
import Hero from "../Components/Fragments/Hero/Hero";
import { useMovies } from "../store/useMovies";
import { useEffect } from "react";
import MovieSlider from "../Components/Fragments/Movies/MovieSlider";
import Footer from "../Components/Fragments/Footer/Index";

const HomePage = () => {
  const { getMovies, movies, isLoading } = useMovies();
  useEffect(() => {
    getMovies();
  }, []);
  const top = movies.filter((movie) => movie.kategori === "Top");
  const New = movies.filter((movie) => movie.kategori === "New");
  const trending = movies.filter((movie) => movie.kategori === "Trending");

  return (
    <>
      <Hero />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieSlider title="Top Movie" movies={top} />
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieSlider title="New Movie" movies={New} />
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieSlider title="Trending Movie" movies={trending} />
      )}
    </>
  );
};

export default HomePage;
