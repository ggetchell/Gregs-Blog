# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
post1 = Post.create(title: "Black Holes in our neighborhood", description: "There appears to be a lot of talk about a black hole or two appearing just outside our solar system, there is a supermassive blackhole at the center of our galaxy, but one near to us is more disturbing.")
post2 = Post.create(title: "The dark side of The Moon", description: "Some speculation going on that the dark side of the moon has several alien colonies that are possibly watching us, and may be the reason why there are so many dicumented sightings lately.")
post3 = Post.create(title: "Our Dying Sun", description: "Scientists are telling up that our sun is in its last stages of life, average life of our sun is ~10 Billion years. We are ~half-way through it, it will die out in a spectacular planetary nove which wll consume planets up to jupiter, before becoming a white dwarf.")

user1 = User.create(email: "123@gmail.com", password: "password", username: "steven", first_name: "Steven", last_name: "Roberts")
user2 = User.create(email: "example@example.com", password: "123456", username: "Cathy", first_name: "Cathy", last_name: "Stevens")

comment1 = Comment.create(rating: 3, body: "What happens if one comes into our solar system?", posts_id: post1.id, user_id: user1.id)
comment2 = Comment.create(rating: 5, body: "All of this is just rubbish and heresay, no real proof.", posts_id: post2.id, user_id: user2.id)
comment3 = Comment.create(rating: 5, body: "i hope not to be around when it happens", posts_id: post3.id, user_id: user2.id)