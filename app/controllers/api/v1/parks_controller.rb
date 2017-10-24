class Api::V1::ParksController < ApplicationController
  def index
    render json: { parks: Park.all }
  end

  def show
    park = Park.find(params[:id])
    render json: { park: park, reviews: park.reviews }
  end
end
