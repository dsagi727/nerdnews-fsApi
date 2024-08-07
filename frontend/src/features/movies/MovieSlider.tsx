import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { sliderMovies } from '../../services/apiMovies';
import ErrorMessage from '../../components/ErrorMessage';
import MovieDetails from './MovieDetails';
import Slider from '../../components/parts/slider/Slider';
import MovieCard from './MovieCard';
import Section from '../../components/Section';
import MovieModel from '../../models/Movie.model';
import LoadingSpinner from '../../components/loaders/LoadingSpinner';
import Modal from '../../components/Modal';

function MovieSlider({ sliderLabel }: { sliderLabel: string }) {
  const [selectedMovie, setSelectedMovie] = useState<MovieModel | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const { data: movies, error, isLoading, isError } = useQuery(['sliderMovies'], sliderMovies);

  const handlePosterClick = (movie: MovieModel) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage message={(error as Error).message} />;

  return (
    <Section type="vertical">
      <h2>{sliderLabel}</h2>

      <Slider moreLabel={'Még több mozifilm...'} morePath={'/movies'}>
        {movies &&
          movies.map((movie: MovieModel) => <MovieCard key={movie._id} movie={movie} onClick={handlePosterClick} />)}
      </Slider>
      <Modal isOpen={modalVisible} setIsOpen={setModalVisible}>
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
      </Modal>
    </Section>
  );
}

export default MovieSlider;
