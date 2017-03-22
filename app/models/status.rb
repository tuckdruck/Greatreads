# == Schema Information
#
# Table name: statuses
#
#  id        :integer          not null, primary key
#  user_id   :integer          not null
#  book_id   :integer          not null
#  status    :string           not null
#  date_read :date
#

class Status < ActiveRecord::Base
  validates :status, :user, :book, presence: true

  validates :status, inclusion:
    {
      in: ["read", "currently reading", "to read"],
      message: "%{value} is not a valid status"
    }

  validates :user, uniqueness: { scope: :book }

  belongs_to :book
  belongs_to :user

  def date_read=(date)
    super(date.to_date)
  end

end
