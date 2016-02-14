class ArticlesController < BaseController
  skip_before_filter :authenticate_user!

  def index
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.create(params[:article].merge(user_id: current_user.id))

    respond_to do |format|
      format.js do
        get_articles
        render :changed, layout: false
      end
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    @article.update_attributes(params[:article])

    respond_to do |format|
      format.js do
        get_articles
        render :changed, layout: false
      end
    end
  end

  def destroy
    @article = Article.find(params[:id])

    respond_to do |format|
      format.js do
        @article.destroy

        get_articles
        render layout: false
      end
    end
  end
end