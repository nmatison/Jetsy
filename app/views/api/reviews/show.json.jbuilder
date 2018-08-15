json.review do
  json.set! @review.id do
    json.extract! @review, :id, :rating, :title, :body,:product_id, :user_id
  end
end
json.reviewer do
  json.extract! @review.user, :id, :username
end
