class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :health
  has_many :items
end
