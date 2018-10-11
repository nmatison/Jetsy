class Api::CategoriesController < ApplicationController

  def create
    @category = Category.new(category_params)
    if @category.save!
      
  end


  private
  def category_params
    params.require(:category).permit(:name)
  end
end