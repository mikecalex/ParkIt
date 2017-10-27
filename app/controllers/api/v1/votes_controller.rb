class Api::V1::VotesController < ApplicationController
  def index
    render json: Vote.all
  end

  def create
    vote = Vote.new(
      user_id: params[:user_id],
      review_id: params[:review_id],
      vote_value: params[:vote_value]
    )

    if vote.save
      render json: { vote: vote }
    else
      render json: { error: park.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
