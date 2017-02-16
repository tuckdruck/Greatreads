class Api::BooktaggingsController < ApplicationController

  def show
    @book_tagging = 
  end
  def create
    @book_tagging = BookTagging.new(book_tagging_params)
    if @book_tagging.save
      render :show
    else
      render json: "Invalid book tagging", status: 422
    end
  end

  def destroy
    @book_tagging = BookTagging.find_by(book_id: params[:book_tagging][:book_id], bookshelf_id: params[:book_tagging][:bookshelf_id])
    if @book_tagging
      @book_tagging.destroy
      render :show
    else
      render json: "No book tagging to destroy", status: 404
    end
  end

  private
  def book_tagging_params
    params.require(:book_tagging).permit(:id, :book_id, :bookshelf_id)
  end
end
