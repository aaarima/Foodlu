class AddToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :middle_initial, :string
    add_column :users, :last_name, :string, null: false
    add_column :users, :age, :integer
    add_column :users, :gender, :string
  end
end
