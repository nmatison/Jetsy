json.review do
  json.extract! @review, :id, :rating, :title, :body,:product_id, :user_id
end
json.reviewer do
  json.extract! @review.user, :id, :username
end
