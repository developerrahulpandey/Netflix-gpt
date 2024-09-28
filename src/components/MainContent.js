import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitles.js";
import Teaser from "./Teaser.js";
import SecondaryContainer from "./SecondaryContainer.js";

const MainContent = () => {
  const movies = useSelector((state) => state.movie?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <Teaser movieId={id} />
      <SecondaryContainer />
    </div>
  );
};

export default MainContent;
