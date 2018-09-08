@cart_items.each do |cart_item|
  json.cart_items do
    json.set! cart_item.id do
      json.extract! cart_item, :id, :shopping_cart_id, :product_id, :quantity, :updated_at
    end
  end

  json.products do
    json.set! cart_item.product_id do
      json.extract! cart_item.product, :id, :user_id, :product_name, :description, :price
    end
  end
end


=begin

{
  cart_items: {
    1: {3, 1, 10, date}
    2: {#, #, #, date }
  }
  products: {
    1: {1, 1, "doggo", "doggo is good", 54.00}
    5: {#, #, "doggo", "doggo is good", #}
  }
}




=end
