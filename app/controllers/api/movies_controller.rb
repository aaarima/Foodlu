class Api::MoviesController < ApplicationController
  before_action :required_logged_in

  # probably on a real site index is not really a good idea, there would probably be too many items.
  def index
    @movies = Movie.all
    render :index
  end

  def show
    @movie = Movie.find(params[:id])
    render :show
    render json: ["Please login"], status: 403
  end
end
