class BookTagging < ActiveRecord::Base
  validates :book, :bookshelf, presence: true
  validates :book, uniqueness: { scope: :bookshelf }

  belongs_to :book
  belongs_to :bookshelf
end
