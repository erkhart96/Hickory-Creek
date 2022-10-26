class CharacterChoiceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :character
  has_one :choice
end
