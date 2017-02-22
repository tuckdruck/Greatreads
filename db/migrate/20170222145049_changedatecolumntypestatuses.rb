class Changedatecolumntypestatuses < ActiveRecord::Migration[5.0]
  def change
    remove_column :statuses, :date_read
  end
end
