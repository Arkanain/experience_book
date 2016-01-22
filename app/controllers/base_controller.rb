class BaseController < ApplicationController
  before_action :check_user

  def check_user
    redirect_to new_user_session_path unless current_user
  end
end