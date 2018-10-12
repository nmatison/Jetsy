@products.each do |product|
  json.products do
    json.set! product.id do
      json.extract! product, :id, :user_id, :product_name, :description, :price
      json.photoUrl url_for(product.photo)
      json.categories product.categories
    end
  end
  json.users do
    json.set! product.user.id do
      json.extract! product.user, :id, :username, :email_address
    end
  end
end
