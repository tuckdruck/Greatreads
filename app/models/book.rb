class Book < ActiveRecord::Base
  validates :title, :author, presence: true

  has_many :book_taggings

  has_many :bookshelves,
    through: :book_taggings,
    source: :bookshelf

  def self.find_by_bookshelf(bookshelf_id)
    bookshelf = Bookshelf.find_by(id: bookshelf_id)
    bookshelf.books
  end

  def self.find_by_user(user_id)
    user = User.find_by(id: user_id)
    user.books
  end
end
