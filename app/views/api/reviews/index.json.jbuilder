@reviews.each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :rating, :title, :body, :product_id
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :id, :username
    end
  end
end
