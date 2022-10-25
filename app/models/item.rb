class Item < ApplicationRecord
    has_many :collected_items
    has_many :characters, through: :collected_items
end
