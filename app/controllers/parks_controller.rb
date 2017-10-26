class ParksController < ApplicationController
  before_action :authorize_user, except: [:index, :search]

  def index

  end



  def search
    if params[:search]
      @parks = Park.search(params[:search]).order("created_at DESC")
    else
      @parks = Park.all.order("created_at DESC")
    end
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
