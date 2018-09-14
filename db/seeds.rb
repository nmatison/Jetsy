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

user0 = User.create!(username: "Marshalls", email_address: "marshall@marshall.blah", password: "gutsman")
user1 = User.create!(username: "annie's-bags", email_address: "annie@annie.blah", password: "gutsman")
user2 = User.create!(username: "UrbanWares", email_address: "urban@urban.blah", password: "gutsman")
user3 = User.create!(username: "FoodTight", email_address: "FoodTight@FoodTight.blah", password: "gutsman")
user4 = User.create!(username: "Manufacturer United", email_address: "unitede@urban.blah", password: "gutsman")

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
price: 75.00)

product9.photo.attach(io: File.open("./app/assets/images/lee-campbell-191016-unsplash.jpg"), filename: "lee-campbell-191016-unsplash.jpg")


product10 = Product.new(user_id: 2,
product_name: "Hiking Backpack",
description: "Another hiking bag! This time, I have listened to all of my clients
advice, and I have made the straps wider for comfort along with a few other upgrades.",
price: 47.25)

product10.photo.attach(io: File.open("./app/assets/images/josiah-weiss-435592-unsplash.jpg"), filename: "josiah-weiss-435592-unsplash.jpg")

product11 = Product.new(user_id: 2,
product_name: "Traveling Suitcase",
description: "Traveling Suitcase that holds a lot of stuff for your longer vacations.",
price: 110.00)

product11.photo.attach(io: File.open("./app/assets/images/michal-parzuchowski-262847-unsplash.jpg"), filename: "michal-parzuchowski-262847-unsplash.jpg")

product12 = Product.new(user_id: 3,
product_name: "Comfy blanket",
description: "Comfy blanket that can be used anywhere! Dog not included!",
price: 14.00)

product12.photo.attach(io: File.open("./app/assets/images/dog-blanket.jpg"), filename: "dog-blanket.jpg")

product13 = Product.new(user_id: 3,
product_name: "Hiking Shoes",
description: "I breaking out into the shoe business! Here are my first pair of
hiking shoes. Various sizes available!",
price: 14.00)

product13.photo.attach(io: File.open("./app/assets/images/shoes.jpg"), filename: "shoes.jpg")


product14 = Product.new(user_id: 3,
product_name: "Back Pack with additions",
description: "A backpack with a lot of additions supplied by other local sellers.",
price: 150.00)

product14.photo.attach(io: File.open("./app/assets/images/bag-camera.jpg"), filename: "bag-camera.jpg")

product15 = Product.new(user_id: 3,
product_name: "Dry Gin",
description: "A bit of home brewed Gin for all of you home brewers out there.
Made using a passed-down family recipe!",
price: 12.50)

product15.photo.attach(io: File.open("./app/assets/images/gin.jpg"), filename: "gin.jpg")

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
