puts 'Creating test character...'
character = Character.create(username: 'Ben', password: 'flatiron', health: 100)

puts 'Placing items...'
rope = Item.create(name: 'Rope', location: 'The Garage', durability: 2, value: 10)
metal = Item.create(name: 'Metal', location: 'The Garage', durability: 1, value: 15)
medicine = Item.create(name: 'Medicine', location: 'Bathroom', durability: 1, value: 30)
makeshift_knife = Item.create(name: 'Makeshift Knife', location: 'Cellar', durability: 5, value: 20)
knife = Item.create(name: 'Knife', location: 'The Car', durability: 10, value: 50)
axe = Item.create(name: 'Axe', location: 'Back of The Barn', durability: 15, value: 70)
tape = Item.create(name: 'Tape', location: 'Shed', durability: 1, value: 5)
stick = Item.create(name: 'Stick', location: 'The Road', durability: 3, value: 1)
string = Item.create(name: 'String', location: 'Living Room', durability: 1, value: 5)
chemicals = Item.create(name: 'Chemicals', location: 'The House', durability: 1, value: 10)
pistol = Item.create(name: 'Pistol', location: 'Safe', durability: 2, value: 150)
red_key = Item.create(name: 'Red Key', location: 'The Barn', durability: 1, value: 1000)
blue_key = Item.create(name: 'Blue Key', location: 'The Lockbox', durability: 1, value: 1000)
green_key = Item.create(name: 'Green Key', location: 'The Kitchen', durability: 1, value: 1000)
orange_key = Item.create(name: 'Orange Key', location: 'The Cellar', durability: 1, value: 1000)

# puts 'Placing starter item in inventory...'
# CollectedItem.create(character_id: 1, item_id: 4)

puts 'Creating situations...'
situation1 = Situation.create(story_text: "You find yourself on a straight road. It's Dark. There's nothing but silence. Suddenly, there's a familiar sound heard off in the distance. You try to remember where you've heard that before, but eventually shrug it off. Up ahead you come to a dead end. Seems like left or right are your only options.", location: 'The Road')
situation2a = Situation.create(story_text: "You come across a dilapidated barn. As you approach, you notice that there seems to be a hole in the door. You try to look through, but you can't make anything out inside. You could break the door down if you had something stronger.", location: 'Front of The Barn')
situation2b = Situation.create(story_text: "You walk for a while then eventually come across a garage. Huh, looks like it's in fairly decent shape. Weird. The garage door is closed, so you decide to try the main door. It's unlocked, how convienient. You walk inside and hear nothing but the dull hum of a flourescent light about to go out. You see an old car sitting in the garage. Maybe that's worth checking out. You look around and you see a lockbox sitting on a desk. Unlike the door, the box isn't unlocked. Seems too tough to break, maybe I can find something to jam into the lock.", location: 'The Garage')
situation3aaa = Situation.create(story_text: "You break down the door and head into the barn. It's pitch black. Luckily there's another hole in the roof that's letting in just enough moonlight for you to navigate around. No one's been in here in years. Near the back, you spot what looks like an old trunk of some sort. Maybe it's worth searching to see what's inside.", location: 'The Barn')
situation3aab = Situation.create(story_text: "You walk around to the rear of the barn. There's nothing back here except some old farming equipment, and some stacks of split logs. The equipment definitely looks like it's seen better days. Through the treeline you can make out what seems to be some sort building. It looks like it may be a house. You hear that noise again. It sounds so familiar, but you just can't put your finger on it. Oh well. Maybe it's a good time to search around.", location: 'Back of The Barn')
situation3baa = Situation.create(story_text: "You walk over to the old car. Even though this place seems to be in pretty good shape, you can tell this car hasn't moved in a while. I'll bet no-one would notice if you looked around inside for a minute. Through the back garage window, there seems to be a building of some sort through the treeline.", location: "The Car")
situation3bab = Situation.create(story_text: "You open the lockbox. Time to do some searching.", location: "The Lockbox")
situation4a = Situation.create(story_text: "You walk through the treeline and start heading towards the large structure. You hear a familiar noise. Alright, this is starting to get old. You keep trying to remember but you cannot remember where you've heard that noise before. After walking for a bit, you finally come up to a really old house. Looks to be about in as good of shape as the barn. There's holes everywhere. Windows are busted out. The wind is starting to pick up. For some reason you feel like something is watching you from the treeline you just came through, so you decide to walk into the house. The smell of mold and mildew fills your nose. Straight ahead you see what looks to have been a kitchen at some point in the past. To your right you see a cellar door. You hear the noise again.", location: 'The House')
situation5aaa = Situation.create(story_text: "You walk down into the cellar, a step breaks underneath you and you hit the gorund hard. It's dark down here. You still feel like you're being watched from even closer at this point. You get up and dust your self off and look around. You don't see much but you find a single light bulb with a string hanging from the ceiling, so you turn on the light. You hear the noise again, it's even louder this time. In front of you, you see a single door. The door has four locks. A red one, a blue one, a green one, and an orange one.", location: "The Cellar")
situation5abb = Situation.create(story_text: "You walk into the kitchen. Everything is rotted and falling apart. You should probably be careful where you step. Maybe you should search around. You might need to get a tetanus shot afterwards, though. (That's not in the game.)", location: 'The Kitchen')
situation6 = Situation.create(story_text: "You walk through the door. Right before you do, you hear the noise again. This time it feels like it almost deafens you. Suddenly, you wake up. You're in your bed. Your alarm is ringing on your phone. Huh, well that explains the familiar noise. You roll over and turn it off, and look at the time. It's 1:30PM. You missed your code challenge retake. HAPPY HALLOWEEN!", location: "The End")


puts 'Generating your choices...'
choice0 = Choice.create(choice_text: "The Beginning")
choice1a = Choice.create(choice_text: "Go left")
choice1b = Choice.create(choice_text: "Go right")
choice2aa = Choice.create(choice_text: "Break the door down")
choice2ab = Choice.create(choice_text: "Go around the back")
choice2ba = Choice.create(choice_text: "Check out the car")
choice2bb = Choice.create(choice_text: "Open the lockbox")
choice4 = Choice.create(choice_text: "Head through the trees")
choice4aa = Choice.create(choice_text: 'Go down into the cellar')
choice4ab = Choice.create(choice_text: 'Go to the kitchen')
choice5aaab = Choice.create(choice_text: 'Unlock the door and walk through')

puts 'Seeding situation_choices...'
SituationChoice.create(choice: choice0, situation: situation1, outcome: false)
SituationChoice.create(choice: choice1a, situation: situation1, outcome: true)
SituationChoice.create(choice: choice1b, situation: situation1, outcome: true)
SituationChoice.create(choice: choice1a, situation: situation2a, outcome: true)
SituationChoice.create(choice: choice2aa, situation: situation2a, outcome: true)
SituationChoice.create(choice: choice2ab, situation: situation2a, outcome: true)
SituationChoice.create(choice: choice2aa, situation: situation3aaa, outcome: false)
SituationChoice.create(choice: choice2ab, situation: situation3aab, outcome: true)
SituationChoice.create(choice: choice1b, situation: situation2b, outcome: true)
SituationChoice.create(choice: choice2ba, situation: situation2b, outcome: true)
SituationChoice.create(choice: choice2bb, situation: situation2b, outcome: true)
SituationChoice.create(choice: choice2ba, situation: situation3baa, outcome: true)
SituationChoice.create(choice: choice2bb, situation: situation3bab, outcome: false)
SituationChoice.create(choice: choice4, situation: situation3aab, outcome: true)
SituationChoice.create(choice: choice4, situation: situation3baa, outcome: true)
SituationChoice.create(choice: choice4, situation: situation4a, outcome: true)
SituationChoice.create(choice: choice4aa, situation: situation4a, outcome: true)
SituationChoice.create(choice: choice4ab, situation: situation4a, outcome: true)
SituationChoice.create(choice: choice4aa, situation: situation5aaa, outcome: true)
SituationChoice.create(choice: choice4ab, situation: situation5abb, outcome: false)
SituationChoice.create(choice: choice5aaab, situation: situation5aaa, outcome: true)
SituationChoice.create(choice: choice5aaab, situation: situation6, outcome: false)


puts "Seeding character_choices..."
character_choice_new = CharacterChoice.create(character: character, choice: choice0)

puts 'Complete!'