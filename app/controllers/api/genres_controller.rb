class Api::GenresController < ApplicationController
  before_action :required_logged_in

  def index
    @genres = Genre.all
    render :index
  end
end
