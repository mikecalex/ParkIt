class ParksController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    # @parks = Park.all
  end

  # def show
    # @park = Park.find(params[:id])
  # end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

end
