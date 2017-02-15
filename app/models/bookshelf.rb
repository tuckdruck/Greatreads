class Bookshelf < ActiveRecord::Base
  validates :title, :user, presence: true
  validates :title, uniqueness: { scope: :user}

  belongs_to :user
  has_many :book_taggings

  has_many :books,
    through: :book_taggings,
    source: :book

  def self.find_by_user_id(user_id)
    Bookshelf.where(user_id: user_id)
  end
end
