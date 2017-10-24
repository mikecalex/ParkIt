class Api::V1::ParksController < ApplicationController
  def index
    render json: { parks: Park.all }
  end

  def show
    park = Park.find(params[:id])
    render json: { park: park, reviews: park.reviews }
<<<<<<< HEAD
    # render json: { reviews: Review.all }
=======
>>>>>>> 165d99e13407850504e882de8fdf5a5d40e2e703
  end
end
