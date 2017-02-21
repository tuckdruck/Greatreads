class Api::StatusesController < ApplicationController

  def update
    @status = Status.find(params[:id])
    if @status.update(status_params)
      @book = Book.find(params[:status][:book_id])
      render "api/books/show"
    else
      render json: @status.errors, status: 422
    end
  end

  def create
    @status = Status.new(status_params)
    @status.user_id = current_user.id
    if @status.save
      @book = Book.find(params[:status][:book_id])
      render "api/books/show"
    else
      render json: @status.errors, status: 422
    end
  end

  def status_params
    params.require(:status).permit(:book_id, :status)
  end
end
