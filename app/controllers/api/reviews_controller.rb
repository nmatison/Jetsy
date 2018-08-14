class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all.select{ |el| el.product_id == params[:id] }
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.destroy
      render '/api/reviews/show'
    else
      render json: [@review.errors.full_messages], status: 422;
    end
  end

  def review_params
    params.require(:review).permit(:rating, :title, :body)
  end
end
