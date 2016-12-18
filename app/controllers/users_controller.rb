class UsersController < BaseController
  load_resource find_by: :id

  def index
  end

  def new
  end

  def create
    if @user.save
      redirect_to users_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @user.update_attributes(params[:user])

    if @user.valid?
      redirect_to users_path
    else
      render :edit
    end
  end

  def destroy
    @user.destroy

    respond_to { |format|
      format.js {
        @users = User.all

        render layout: false
      }
    }
  end
end
