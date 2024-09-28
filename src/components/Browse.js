import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContent from "./MainContent";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header /> <MainContent />
    </div>
  );
};

export default Browse;
