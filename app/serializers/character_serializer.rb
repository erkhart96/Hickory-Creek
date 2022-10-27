class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :username, :health, :upcoming_situation_text, :upcoming_situation, :upcoming_choices, :character_choice_id
  has_many :items
  has_many :collected_items
end
