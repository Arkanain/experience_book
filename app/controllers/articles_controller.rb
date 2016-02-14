class ArticlesController < BaseController
  skip_before_filter :authenticate_user!

  def index
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(params[:article].merge(user_id: current_user.id))

    if @article.save
      redirect_to article_path(@article)
    else
      render :new
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

    render nothing: true
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