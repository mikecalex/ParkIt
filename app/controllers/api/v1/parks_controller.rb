class Api::V1::ParksController < ApplicationController
  # serialization_scope :current_user

  def index
    render json: Park.all
  end

  def show
    render json: Park.find(params[:id]), serializer: ParkShowSerializer
  end


  def create
    park = Park.new(
      name: params[:name],
      address: params[:address],
      city: params[:city],
      state: params[:state],
      zip: params[:zip],
      category: params[:category],
      description: params[:description],
      photo_url: params[:photo_url],
      size: params[:size].to_i,
      user_id: current_user.id
    )


    if park.save
      render json: { park: park }
    else
      render json: { error: park.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
