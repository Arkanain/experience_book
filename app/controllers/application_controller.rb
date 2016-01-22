class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  # For ActionController::Base
  protect_from_forgery with: :exception
  before_action :get_articles
  before_action :authenticate_user!

  private

  def get_articles
    @articles = Article.all.select(:id, :title)
  end
end