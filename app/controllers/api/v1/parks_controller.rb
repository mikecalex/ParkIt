class Api::V1::ParksController < ApplicationController
  def index
    render json: { parks: Park.all }
  end

  def show
    render json: { park: Park.find(params[:id]) }
  end
end
