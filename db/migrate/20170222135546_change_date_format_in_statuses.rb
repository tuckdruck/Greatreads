class ChangeDateFormatInStatuses < ActiveRecord::Migration[5.0]
  def change
    change_column(:statuses, :date_read, :string)
  end
end
