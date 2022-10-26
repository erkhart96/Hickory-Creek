class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :username, :health
  has_many :items
end
