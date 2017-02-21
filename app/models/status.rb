class Status < ActiveRecord::Base
  validates :status, :user, :book, presence: true
  validates :status, inclusion: { in: ["read", "currently reading", "to read"], message: "%{value} is not a valid status"}
  validates :user, uniqueness: { scope: :book }

  belongs_to :book
  belongs_to :user
end
