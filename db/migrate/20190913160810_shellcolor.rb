class Shellcolor < ActiveRecord::Migration[5.2]
  def change
    add_column :series, :shell_color, :string, null: false
  end
end
