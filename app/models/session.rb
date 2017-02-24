# == Schema Information
#
# Table name: sessions
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  session_token :string           not null
#

class Session < ActiveRecord::Base
  validates :user, :session_token, presence: true
  validates :session_token, uniqueness: true
  
  after_initialize :ensure_session_token


  belongs_to :user



  private
  def self.ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
