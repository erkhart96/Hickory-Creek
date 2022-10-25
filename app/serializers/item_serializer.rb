class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :durability, :value
end
