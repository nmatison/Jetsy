json.review do
  json.set! @review.id do
    json.extract! @review, :rating, :title, :body
  end
end
json.reviewer do
  json.extract! @review.user, :id, :username
end
