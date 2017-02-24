class MakeSessionTokenOptionsUsersTable < ActiveRecord::Migration[5.0]
  def change
      change_column :users, :session_token, :string, :null => true
  end
end
