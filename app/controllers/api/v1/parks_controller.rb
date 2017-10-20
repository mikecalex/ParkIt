class Api::V1::ParksController < ApplicationController
  def index
    render json: { parks: Park.all }
  end
end
