class ChangeColumnSeries < ActiveRecord::Migration[5.2]
  def change
    change_column :series, :network_id, :string, null: true
  end
end
