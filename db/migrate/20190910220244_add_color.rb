class AddColor < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :email, unique: true
    add_index :movies, :title, unique: true
    add_column :movies, :shell_color, :string, null: false
  end
end
