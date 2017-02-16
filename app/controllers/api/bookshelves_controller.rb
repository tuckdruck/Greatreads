class Api::BookshelvesController < ApplicationController

  def index
    if params[:book_id]
      @bookshelves = Bookshelf.find_by_user_id(current_user.id)
    else
      @bookshelves = Bookshelf.find_by_book_id(params[:book_id])
    end

    render :index
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors, status: 422
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:bookshelf][:id])
    if @bookshelf
      bookshelf.destroy
      render :show
    else
      render json: "no bookshelf to destroy", status: 404
    end
  end

  def update
    @bookshelf = Bookshelf.find(params[:bookshelf][:id])
    if @bookshelf.update(bookshelf_params)
      render :show
    else
      render json: @bookshelf.errors, status: 422
    end
  end

  def show
    @bookshelf = Bookshelf.find(params[:bookshelf][:id])
    if @bookshelf
      render :show
    else
      render json: "cannot find book", status: 404
    end
  end

  private
  def bookshelf_params
    params.require(:bookshelf).permit(:title, :id)
  end
end
