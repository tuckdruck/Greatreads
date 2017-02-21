class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in_user!(@user)
      render "api/users/show"
    else
      render json: "invalid username/password combination", status: 422
    end
  end

  def destroy
    if logged_in?
      log_out_user!
      render json: {}
    else
      render json: "no current user to log out", status: 404
    end

  end
end
