class Review < ActiveRecord::Base
  validates :body, :user, :book, presence: true
  validates :user, uniqueness: { scope: :book }

  belongs_to :user
  belongs_to :book
end
