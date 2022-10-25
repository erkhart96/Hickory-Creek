puts 'Creating test character...'
Character.create(name: 'Ben', health: 100)

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
