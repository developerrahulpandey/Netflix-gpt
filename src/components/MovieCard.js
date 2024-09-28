import { IMAGE_CDN_URL } from "../utils/constanst";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 m-2">
      <img alt="movie card " src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
