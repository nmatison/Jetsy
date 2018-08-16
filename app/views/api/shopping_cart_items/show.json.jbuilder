json.shopping_cart_item do
  json.extract! @shopping_cart_item, :shopping_cart_item, :product_id, :quantity, :updated_at
end
