class BaseController < ApplicationController
  before_action :check_user
  before_action :get_articles

  private

  def check_user
    redirect_to new_user_session_path unless current_user
  end

  def get_articles
    @articles = current_user.articles.select(:id, :title).order(:title)
  end
end