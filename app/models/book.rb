# == Schema Information
#
# Table name: books
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  author          :string           not null
#  description     :text
#  cover_image_url :string
#  average_rating  :float
#  page_length     :integer
#  published_date  :date
#  publisher       :string
#  isbn            :string
#  language        :string
#  url_to_buy      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

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
