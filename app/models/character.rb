class Character < ApplicationRecord
    has_many :collected_items
    has_many :items, through: :collected_items
end
