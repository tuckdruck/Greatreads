# == Schema Information
#
# Table name: book_taggings
#
#  id           :integer          not null, primary key
#  bookshelf_id :integer          not null
#  book_id      :integer          not null
#  date_read    :date
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class BookTagging < ActiveRecord::Base
  validates :book, :bookshelf, presence: true
  validates :book, uniqueness: { scope: :bookshelf }

  belongs_to :book
  belongs_to :bookshelf

  def user_book_taggings(user_id)
    BookTagging.joins(:bookshelf).where("bookshelves.user_id = ?", user_id)
  end
end
