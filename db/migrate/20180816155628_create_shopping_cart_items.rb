class CreateShoppingCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_cart_items do |t|
      t.integer :shopping_cart_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, null: false

      t.timestamps
    end
    add_index :shopping_cart_items, :shopping_cart_id
    add_index :shopping_cart_items, :product_id 
  end
end
