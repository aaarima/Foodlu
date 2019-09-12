class Api::MoviesController < ApplicationController

  # probably on a real site index is not really a good idea, there would probably be too many items.
  def index
    @movies = Movie.all
    render :index
  end

  def show
    @movie = Movie.find(params[:id])
    render :show
  end

  def get_by_genre

  end

end
