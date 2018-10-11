class CreateCategorizes < ActiveRecord::Migration[5.2]
  def change
    create_table :categorizes do |t|
      t.integer :product_id, null: false
      t.integer :category_id, null: false 

      t.timestamps
    end
    add_index :categorizes, :product_id
    add_index :categorizes, :category_id
  end
end
