@products.each do |product|
  json.set! product.id do
    json.extract! product, :user_id, :product_name, :description, :price
    json.user do
      json.extract! product.user, :username, :email_address
    end
  end
end
