class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      cart = ShoppingCart.new(user_id: @user.id)
      cart.save
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 402
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email_address)
  end
end
