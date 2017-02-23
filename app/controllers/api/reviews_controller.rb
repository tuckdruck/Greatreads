class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(book_id: params[:book_id]).includes(:user)
  end

  def create
    review = Review.new(review_params)
    review.user_id = current_user.id
    if review.save
      @book = Book.find(review.book_id)
      render "api/books/show"
    else
      render json: review.errors, status: 422
    end
  end

  def update
    review = Review.find(params[:id])
    if review.update(review_params)
      @book = Book.find(review.book_id)
      render "api/books/show"
    else
      render json: review.errors, status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    @book = Book.find(review.book_id)
    render "api/books/show"
  end

  private
  def review_params
    params.require(:review).permit(:book_id, :body)
  end
end
