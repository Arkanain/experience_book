class ArticlesController < BaseController
  skip_before_filter :authenticate_user!
  load_resource find_by: :id
  before_action :get_articles, only: [:index, :new, :show, :edit]

  def index
    # This is a stub, used for indexing
  end

  def new
    # This is a stub, used for indexing
  end

  def create
    current_user.articles << @article

    respond_to { |format|
      format.js { update_menu }
    }
  end

  def show
    # This is a stub, used for indexing
  end

  def edit
    # This is a stub, used for indexing
  end

  def update
    @article.update_attributes(params[:article])

    respond_to { |format|
      format.js { update_menu }
    }
  end

  def destroy
    @article.destroy

    respond_to { |format|
      format.js { update_menu }
    }
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
