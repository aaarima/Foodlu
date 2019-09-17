class Api::SeriesController < ApplicationController
  before_action :required_logged_in

  def index
    @series = Series.all
    render :index
  end
end
