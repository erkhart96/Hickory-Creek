puts 'Creating test character...'
character = Character.create(username: 'Ben', password: 'flatiron', health: 100)

puts 'Placing items...'
rope = Item.create(name: 'Rope', location: 'Garage', durability: 2, value: 10)
metal = Item.create(name: 'Metal', location: 'Garage', durability: 1, value: 15)
medicine = Item.create(name: 'Medicine', location: 'Bathroom', durability: 1, value: 30)
makeshift_knife = Item.create(name: 'Makeshift Knife', location: 'Cellar', durability: 5, value: 20)
knife = Item.create(name: 'Knife', location: 'Kitchen', durability: 10, value: 50)
axe = Item.create(name: 'Axe', location: 'Barn', durability: 15, value: 70)
tape = Item.create(name: 'Tape', location: 'Shed', durability: 1, value: 5)
stick = Item.create(name: 'Stick', location: 'Woods', durability: 3, value: 1)
string = Item.create(name: 'String', location: 'Living Room', durability: 1, value: 5)
chemicals = Item.create(name: 'Chemicals', location: 'House', durability: 1, value: 10)
pistol = Item.create(name: 'Pistol', location: 'Safe', durability: 2, value: 150)

puts 'Placing starter item in inventory...'
CollectedItem.create(character_id: 1, item_id: 4)

puts 'Creating situations...'
situation1 = Situation.create(story_text: "You find yourself on a straight road. It's Dark. There's nothing but silence. Up ahead you come to a dead end. Seems like left or right are your only options.")
situation2a = Situation.create(story_text: '2A')
situation2b = Situation.create(story_text: '2B')

puts 'Generating your choices...'
choice0 = Choice.create(choice_text: 'In the Beginning')
choice1a = Choice.create(choice_text: 'Go left.')
choice1b = Choice.create(choice_text: 'Go right.')
choice2aa = Choice.create(choice_text: '2AA')
choice2ab = Choice.create(choice_text: '2AB')

puts 'Seeding situation_choices...'
SituationChoice.create(choice: choice0, situation: situation1, outcome: false)
SituationChoice.create(choice: choice1a, situation: situation1, outcome: true)
SituationChoice.create(choice: choice1a, situation: situation2a, outcome: false)
SituationChoice.create(choice: choice1b, situation: situation1, outcome: true)
SituationChoice.create(choice: choice1b, situation: situation2b, outcome: false)
SituationChoice.create(choice: choice2aa, situation: situation2a, outcome: true)
SituationChoice.create(choice: choice2ab, situation: situation2a, outcome: true)

puts "Seeding character_choices..."
character_choice_new = CharacterChoice.create(character: character, choice: choice0)

puts 'Complete!'