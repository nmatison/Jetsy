class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :user_id, null: false
      t.string :product_name, null: false
      t.text :description, null: false
      t.float :price, null: false

      t.timestamps
    end
  end
end
