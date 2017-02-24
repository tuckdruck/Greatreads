class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless @current_user
    session = Session.find_by(session_token: session[:session_token])
    return unless session
    session.user
    # @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in_user!(user)
    session = Session.create!(user_id: user.id)
    session[:session_token] = session.session_token
  end

  def log_out_user!
    session = Session.find_by(session_token: session[:session_token])
    session.destroy
    session[:session_token] = nil
  end
end
