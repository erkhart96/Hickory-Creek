class CollectedItemSerializer < ActiveModel::Serializer
  attributes :id, :character_id, :item_id
  has_many :item
end
