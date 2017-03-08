class Api::BooksController < ApplicationController

  def index
    if params[:user_id]
      @books = Book.user_books_with_statuses(params[:user_id])
    elsif params[:bookshelf_id]
      @books = Book.bookshelf_books(params[:bookshelf_id], current_user.id)
    elsif params[:status_name]
      @books = Book.status_books(params[:status_name], current_user.id)
    elsif params[:search_string]
      @books = Book.find_by_search(params[:search_string])
    else
      @books = Book.all
      # debugger
    end
  end

  def show
    @book = Books.find(params[:book][:book_id])
    if @book
      render :show
    else
      render json: "Could not find book", status: 422
    end
  end

  def update
    if params[:book][:create] == "true"
      BookTagging.create!(book_id: params[:book][:book_id], bookshelf_id: params[:book][:bookshelf_id])
      associated_status = Status.find_by(book_id: params[:book][:book_id], user_id: current_user.id)
      unless associated_status
        Status.create!(book_id: params[:book][:book_id], user_id: current_user.id, status: "read")
      end
    else
      book_tagging = BookTagging.find_by(book_id: params[:book][:book_id], bookshelf_id: params[:book][:bookshelf_id])
      book_tagging.destroy
    end
    @book = Book.find(params[:book][:book_id])
    render :show
  end

  private
  def book_params
  end

end
