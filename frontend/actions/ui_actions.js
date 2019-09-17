
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const TOGGLE_LOGIN_PAGE = "TOGGLE_LOGIN_PAGE";
export const TOGGLE_MOVIE_SHOW = "TOGGLE_MOVIE_SHOW";
export const TOGGLE_SERIES_SHOW = "TOGGLE_SERIES_SHOW";
export const UPDATE_CURRENT_SHOW = "UPDATE_CURRENT_SHOW";
export const UPDATE_CURRENT_VIDEO = "UPDATE_CURRENT_VIDEO";

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const toggleLoginPage = () => ({
  type: TOGGLE_LOGIN_PAGE
});

export const toggleMovieShow = () => ({
  type: TOGGLE_MOVIE_SHOW
});

export const toggleSeriesShow = () => ({
  type: TOGGLE_SERIES_SHOW
});

export const updateCurrentShow = show => ({
  type: UPDATE_CURRENT_SHOW,
  show
});

export const updateCurrentVideo = video => ({
  type: UPDATE_CURRENT_VIDEO,
  video
});