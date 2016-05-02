class ArticlesController < BaseController
  skip_before_filter :authenticate_user!
  load_resource find_by: :id
  before_action :get_articles, except: [:create, :update, :destroy]

  def index
  end

  def new
  end

  def create
    current_user.articles << @article

    respond_to do |format|
      format.js { update_menu }
    end
  end

  def show
  end

  def edit
  end

  def update
    @article.update_attributes(params[:article])

    respond_to do |format|
      format.js { update_menu }
    end
  end

  def destroy
    @article.destroy

    respond_to do |format|
      format.js { update_menu }
    end
  end

  private

  def update_menu
    get_articles
    render :change_menu, layout: false
  end

  def get_articles
    @articles = current_user.articles.select(:id, :title).order(:title)
  end
end