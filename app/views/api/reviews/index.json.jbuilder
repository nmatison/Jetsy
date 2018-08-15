@reviews.each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :rating, :title, :body, :product_id, :user_id, :updated_at
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :id, :username
    end
  end
end
