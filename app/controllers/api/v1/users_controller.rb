class Api::V1::UsersController < ApplicationController

  def index
    render json: { users: User.all, current_user: current_user }
  end

  def show
    render json: current_user, serializer: UserShowSerializer
  end

end
