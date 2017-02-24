class RemoveSessionTokenRequirementUsersTable < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :session_token, :string, :null => false
  end
end
