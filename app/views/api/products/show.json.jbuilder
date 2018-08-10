  json.product do
    json.set! @product.id do
      json.extract! @product, :id, :user_id, :product_name, :description, :price
    end
  end
  json.user do
    json.extract! @product.user, :id, :username, :email_address
  end
