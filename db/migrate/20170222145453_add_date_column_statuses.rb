class AddDateColumnStatuses < ActiveRecord::Migration[5.0]
  def change
    add_column :statuses, :date_read, :date
  end
end
