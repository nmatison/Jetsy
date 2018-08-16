json.review do
  json.extract! @review, :id, :rating, :title, :body,:product_id, :user_id, :updated_at
end
json.reviewer do
  json.extract! @review.user, :id, :username
end
