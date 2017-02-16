class Api::BookshelvesController < ApplicationController

  def index
    @bookshelves = Bookshelf.find_by_user_id(params[:user_id])
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
