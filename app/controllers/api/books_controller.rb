class Api::BooksController < ApplicationController

  def index
    if params[:user_id]
      @books = Book.find_by_user(params[:user_id])
    elsif params[:bookshelf_id]
      @books = Book.find_by_bookshelf(params[:bookshelf_id])
    else
      @books = Book.all
    end
    render :index
  end

  def show
    @book = Books.find(params[:book][:book_id])
    if @book
      render :show
    else
      render json: "Could not find book", status: 422
    end
  end
end
