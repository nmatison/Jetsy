# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# sellers

User.destroy_all
Product.destroy_all
Review.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('reviews')
ApplicationRecord.connection.reset_pk_sequence!('products')
ApplicationRecord.connection.reset_pk_sequence!('shopping_carts')
ApplicationRecord.connection.reset_pk_sequence!('shopping_cart_items')


user0 = User.create!(username: "Marshalls", email_address: "marshall@marshall.blah", password: "gutsman")
user1 = User.create!(username: "annie's", email_address: "annie@annie.blah", password: "gutsman")
user2 = User.create!(username: "UrbanWares", email_address: "urban@urban.blah", password: "gutsman")
user3 = User.create!(username: "Essentials", email_address: "FoodTight@FoodTight.blah", password: "gutsman")
user4 = User.create!(username: "Manufacturer United", email_address: "unitede@urban.blah", password: "gutsman")

cart0 = ShoppingCart.create!(user_id: 1)
cart1 = ShoppingCart.create!(user_id: 2)
cart2 = ShoppingCart.create!(user_id: 3)
cart3 = ShoppingCart.create!(user_id: 4)
cart4 = ShoppingCart.create!(user_id: 5)
# random users for comments

product0 = Product.new(user_id: 1,
  product_name: "BoomTech 3.0",
  description: "These are the lateset edition of the BoomTech series. We are
  introducing noise-canceling effects in this rollout. Comes with a travel
  carry case to keep them protected on your long journeys and hiking adventures.",
  price: 125.75)

product0.photo.attach(io: File.open("./app/assets/images/headphones.jpg"), filename: "headphones.jpg")

product1 = Product.new(user_id: 1,
  product_name: "Navigator",
  description: "This compass is perfect for any of your trips out into the
  wilderness and hiking experiences. Comes with carrying case and lanyard.",
  price: 75.68)

product1.photo.attach(io: File.open("./app/assets/images/rawpixel-771279-unsplash.jpg"), filename: "rawpixel-771279-unsplash.jpg")


product2 = Product.new(user_id: 1,
  product_name: "Red and Black Lantern",
  description: "Our small store is really pushing out into the camping/hiking
  scene this year! Enjoy our state of the art lantern during your trips out into
  the wild!.",
  price: 25.76)

  product2.photo.attach(io: File.open("./app/assets/images/balazs-busznyak-531992-unsplash.jpg"), filename: "balazs-busznyak-531992-unsplash.jpg")

product3 = Product.new(user_id: 1,
  product_name: "Life's Good Water Bottle",
  description: "Life's good water bottle. Made for any and all travels, and it
  is completely indestructable. Perfect for hiking!",
  price: 31.45)

product3.photo.attach(io: File.open("./app/assets/images/averie-woodard-123973-unsplash.jpg"), filename: "averie-woodard-123973-unsplash.jpg")

product4 = Product.new(user_id: 1,
  product_name: "Custom Travel Mugs",
  description: "This is a custom mug that comes with a small case that you can
  take with you on any of your trips. Take it to a new coffee shop during your
  vacation or show it off at one of your abroad business meetings.",
  price: 13.00)

product4.photo.attach(io: File.open("./app/assets/images/greyson-joralemon-311103-unsplash.jpg"), filename: "greyson-joralemon-311103-unsplash.jpg")

product5 = Product.new(user_id: 1,
  product_name: "Personalized Travel Thermos",
  description: "This is a personalized travel thermos. Take it on any vacation or
  business trip! Whether you are hiking, laying on the beach, or out for business, your
  drink will stay hot!",
  price: 25.00)

product5.photo.attach(io: File.open("./app/assets/images/jon-tyson-558716-unsplash.jpg"), filename: "jon-tyson-558716-unsplash.jpg")


product6 = Product.new(user_id: 2,
product_name: "Duffel-Bag",
description: "This is my best duffel-bag yet! These bags can hold a lot of weight,
 and it is perfect as a carry-on item for those short business trips that take
 you out of town.",
price: 21.99)

product6.photo.attach(io: File.open("./app/assets/images/harsh-jadav-163197-unsplash.jpg"), filename: "harsh-jadav-163197-unsplash.jpg")

product7 = Product.new(user_id: 2,
product_name: "Professional Briefcase",
description: "Professional Briefcase that can be used casually or formally. Ditch your bags and upgrade with style! Take
it on your business trips and impress your forigen colleagues!",
price: 35.00)

product7.photo.attach(io: File.open("./app/assets/images/clem-onojeghuo-254153-unsplash.jpg"), filename: "clem-onojeghuo-254153-unsplash.jpg")

product8 = Product.new(user_id: 2,
product_name: "Travel Backpack",
description: "Travel Backpack designed for you on the go travelers. Plenty of
room to store everything you need for a weekend trip. Easy on the shoulders, and it leaves your arms free for more bags.
Great for out door vacations/hiking excursions!",
price: 29.50)

product8.photo.attach(io: File.open("./app/assets/images/aunnop-suthumno-657586-unsplash.jpg"), filename: "aunnop-suthumno-657586-unsplash.jpg")

product9 = Product.new(user_id: 2,
product_name: "Purse by Annie",
description: "My very first purse release! Bring it with you on your trips to
the big city! Plenty of room for all of your necessities. Why carry bags when you could be styling with this purse!",
price: 75.05)

product9.photo.attach(io: File.open("./app/assets/images/lee-campbell-191016-unsplash.jpg"), filename: "lee-campbell-191016-unsplash.jpg")


product10 = Product.new(user_id: 2,
product_name: "Hiking Backpack",
description: "More hiking bags! This time, I have listened to all of my clients
advice, and I have made the straps wider for comfort along with a few other upgrades.",
price: 47.25)

product10.photo.attach(io: File.open("./app/assets/images/josiah-weiss-435592-unsplash.jpg"), filename: "josiah-weiss-435592-unsplash.jpg")

product11 = Product.new(user_id: 2,
product_name: "Traveling Suitcase",
description: "Traveling Suitcase that holds a lot of stuff for your longer vacations. Much easier than carrying around
those heavy bags.",
price: 110.23)

product11.photo.attach(io: File.open("./app/assets/images/michal-parzuchowski-262847-unsplash.jpg"), filename: "michal-parzuchowski-262847-unsplash.jpg")

product12 = Product.new(user_id: 3,
product_name: "Comfy blanket",
description: "Comfy blanket that can be used anywhere! Take it to the beach, on an airplane, or even on a hike! Dog not included!",
price: 14.45)

product12.photo.attach(io: File.open("./app/assets/images/dog-blanket.jpg"), filename: "dog-blanket.jpg")

product13 = Product.new(user_id: 3,
product_name: "Hiking Shoes",
description: "Here are my first pair of
hiking shoes. Various sizes available!",
price: 44.99)

product13.photo.attach(io: File.open("./app/assets/images/shoes.jpg"), filename: "shoes.jpg")

product14 = Product.new(user_id: 3,
product_name: "Back Pack with additions",
description: "A backpack with a lot of additions supplied by other local sellers. Drop the bags and travel light!",
price: 150.89)

product14.photo.attach(io: File.open("./app/assets/images/bag-camera.jpg"), filename: "bag-camera.jpg")

product15 = Product.new(user_id: 3,
product_name: "Dry Gin",
description: "A bit of home brewed Gin for all of you home brewers out there.
Made using a passed-down family recipe! Great with some food!",
price: 12.52)

product15.photo.attach(io: File.open("./app/assets/images/gin.jpg"), filename: "gin.jpg")

product16 = Product.new(user_id: 4, 
  product_name: "Sun Dress",
  description: "Beautiful dress that is perfect for beach days or any vacation in any kind
  of hot or humid weather. Add it to your clothing collection today!",
  price: 45.32 )

product16.photo.attach(io: File.open("./app/assets/images/sun-dress.jpg"), filename: "sun-dress.jpg")

product17 = Product.new(user_id: 4,
  product_name: "Full-sized Blanket",
  description: "Large blanket that would be great to keep you warm. It would also be perfect to 
  lay out as you tan on the beach!",
  price: 32.76 )

product17.photo.attach(io: File.open("./app/assets/images/full-blanket.jpg"), filename: "full-blanket.jpg")

product18 = Product.new(user_id: 4,
  product_name: "Blanket Set",
  description: "Here are a full set of our previous blankets! Take them with you to the beach, on a hiking trip,
  on a plane, or just keep them around at home for your regular use.",
  price: 55.88 )

product18.photo.attach(io: File.open("./app/assets/images/blanket-set.jpg"), filename: "blanket-set.jpg")

product19 = Product.new(user_id: 4,
  product_name: "Travel Pillow",
  description: "A comfortable neck pillow.",
  price: 20.44)

product19.photo.attach(io: File.open("./app/assets/images/neck_pillow.jpeg"), filename: "neck_pillow.jpeg")

product20 = Product.new(user_id: 4,
  product_name: "Beach Hammock",
  description: "Why continue to lay on the ground when you could be floating over a beach? Comes with
  instructions and materials to hang. Nice to set up in the middle of a hiking trip as well.",
  price: 76.21)

product20.photo.attach(io: File.open("./app/assets/images/hammock.jpg"), filename: "hammock.jpg")

product21 = Product.new(user_id: 4,
  product_name: "White-dress",
  description: "Light, airy dress that would be great to wear in those hot environments like the beach!",
  price: 88.15)

product21.photo.attach(io: File.open("./app/assets/images/white-dress.jpg"), filename: "white-dress.jpg")

product22 = Product.new(user_id: 3,
  product_name: "Personal Note Book",
  description: "This note book will be great on business trips.
  Take it to meetings and pull it out during phone calls!",
  price: 18.66)

product22.photo.attach(io: File.open("./app/assets/images/notebook.jpg"), filename: "notebook.jpg")

product23 = Product.new(user_id: 5,
  product_name: "Black and Red Hammock",
  description: "Newly released black and red hammock. Great for the beach and hiking trips.",
  price: 65.21)

product23.photo.attach(io: File.open("./app/assets/images/black-and-red-hammock.jpg"), filename: "black-and-red-hammock.jpg")

product24 = Product.new(user_id: 5,
  product_name: "Mason Jar",
  description: "Cool, Hip Mason Jar. Great to take while hiking, or next in the sand while you are at the beach.
  Comes with lids!",
  price: 9.99)

product24.photo.attach(io: File.open("./app/assets/images/mason-jar1.jpg"), filename: "mason-jar1.jpg")

product25 = Product.new(user_id: 5, 
  product_name: "Face Cream",
  description: "Green face cream made to give you the comfort you feel at home while you are on the go!",
  price: 10.95)

product25.photo.attach(io: File.open("./app/assets/images/cream.jpg"), filename: "cream.jpg")

product26 = Product.new(user_id: 5,
  product_name: "Multi-Colored Scarves",
  description: "This is our newest collection of scarves. They come in a multitude of colors.",
  price: 12.34)

product26.photo.attach(io: File.open("./app/assets/images/scarves.jpg"), filename: "scarves.jpg")

product27 = Product.new(user_id: 4,
  product_name: "Simple Comfortable Beanie",
  description: "This is a comfortable beanie. Where it on your next ski trip or your next adventure
  in the snow! Comes in a variety of colors and sizes.",
  price: 9.99)

product27.photo.attach(io: File.open("./app/assets/images/beanie.jpg"), filename: "beanie.jpg")

product28 = Product.new(user_id: 5,
  product_name: "Two Person Tent",
  description: "Tent made to hold two people. Great for your hiking trips and camping trips!
  Sturdy and long lasting.",
  price: 89.99)

product28.photo.attach(io: File.open("./app/assets/images/tent.jpg"), filename: "tent.jpg")

product29 = Product.new(user_id: 5,
  product_name: "Healthy Crackers",
  description: "Home-made crackers made with low salt and no fat! If you are looking for 
  comfort food on the go, then look no further! Comes in packs of 100 and ships with protection
  to make sure your food arrives safe and sound.",
  price: 5.00)

product29.photo.attach(io: File.open("./app/assets/images/crackers.jpg"), filename: "crackers.jpg")

product30 = Product.new(user_id: 3,
  product_name: "Hand-Bag",
  description: "This is my largest hand bag yet! Take it with you on a business trip or on
  any sort of vacation! Comes only in this one color.",
  price: 97.08)

product30.photo.attach(io: File.open("./app/assets/images/bag1.jpg"), filename: "bag1.jpg")


product0.save!
product1.save!
product2.save!
product3.save!
product4.save!
product5.save!
product6.save!
product7.save!
product8.save!
product9.save!
product10.save!
product11.save!
product12.save!
product13.save!
product14.save!
product15.save!
product16.save!
product17.save!
product18.save!
product19.save!
product20.save!
product21.save!
product22.save!
product23.save!
product24.save!
product25.save!
product26.save!
product27.save!
product28.save!
product29.save! 
product30.save!
