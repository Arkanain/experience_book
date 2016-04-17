class ArticlesController < BaseController
  skip_before_filter :authenticate_user!
  load_resource find_by: :id

  def index
  end

  def new
  end

  def create
    current_user.articles.create(params[:article])

    respond_to do |format|
      format.js do
        get_articles
        render :changed, layout: false
      end
    end
  end

  def show
  end

  def edit
  end

  def update
    @article.update_attributes(params[:article])

    respond_to do |format|
      format.js do
        get_articles
        render :changed, layout: false
      end
    end
  end

  def destroy
    @article.destroy

    respond_to do |format|
      format.js do
        get_articles
        render layout: false
      end
    end
  end
end