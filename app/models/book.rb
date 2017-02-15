class Book < ActiveRecord::Base
  validates :title, :author, presence: true

  has_many :book_taggings

  has_many :bookshelves,
    through: :book_taggings,
    source: :bookshelf

  def self.find_by_bookshelf(bookshelf_id)
      Book
        .joins(:book_taggings)
        .joins(:bookshelves)
        .where("bookshelves.id = ?", bookshelf_id)
  end

  def self.find_by_user(user_id)
  end
end
