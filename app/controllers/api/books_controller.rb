class Api::BooksController < ApplicationController

  def index
    @books = books_filtered
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
    debugger
    if params[:book][:create] == "true"
      add_book_to_bookshelf
    else
      remove_book_from_bookshelf
    end
    @book = Book.find(params[:book][:book_id])
    render :show
  end

  private
  def books_filtered
    return Book.by_user(user_id) if by_user?
    if params[:bookshelf_id]
      return Book.by_bookshelf(params[:bookshelf_id], user_id)
    end
    return Book.by_status(status_name, user_id) if status_name
    return Book.by_search(search_string) if search_string

    Book.all
  end

  def by_user?
    params[:user_id]
  end

  def status_name
    params[:status_name]
  end

  def search_string
    params[:search_string]
  end

  def add_book_to_bookshelf
    BookTagging.create!(book_id: book_id, bookshelf_id: bookshelf_id)
    book_status = Status.find_by(book_id: book_id, user_id: user_id)

    unless book_status
      Status.create!(book_id: book_id, user_id: user_id, status: "read")
    end
  end

  def remove_book_from_bookshelf
    BookTagging
      .find_by(book_id: book_id, bookshelf_id: bookshelf_id)
      .destroy
  end

  def book_id
    params[:book][:book_id]
  end

  def bookshelf_id
    params[:book][:bookshelf_id]
  end
end
