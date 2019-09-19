class Api::EpisodesController < ApplicationController
  before_action :required_logged_in

  def index
    if params[:series_id]
      @episodes = Series.find(params[:series_id]).episodes
      render :index_series
    else
      @episodes = Episode.all
      render :index
    end
  end
end
