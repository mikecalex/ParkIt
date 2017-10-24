class Api::V1::ReviewsController < ApplicationController
  def index
    render json: { reviews: Review.all }
  end
end
