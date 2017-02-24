# == Schema Information
#
# Table name: reviews
#
#  id      :integer          not null, primary key
#  body    :text             not null
#  user_id :integer          not null
#  book_id :integer          not null
#

class Review < ActiveRecord::Base
  validates :body, :user, :book, presence: true
  validates :user, uniqueness: { scope: :book }

  belongs_to :user
  belongs_to :book
end
