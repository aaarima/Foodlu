import { combineReducers } from "redux"
import moviesReducer from "./entities/movies_reducer";
import seriesReducer from "./entities/series_reducer";
import genresReducer from "./entities/genres_reducer";
import episodeReducer from "./entities/episodes_reducer";

export default combineReducers({
  movies: moviesReducer,
  series: seriesReducer,
  genres: genresReducer,
  episodes: episodeReducer
})