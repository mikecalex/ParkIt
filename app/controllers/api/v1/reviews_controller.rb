class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Review.all
  end

  def create
    review = Review.new(new_review_params)
    binding.pry
    if review.save
      render json: { review: review }
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def new_review_params
    params.require(:review).permit(:rating, :body, :park_id, :user_id)
  end
end
