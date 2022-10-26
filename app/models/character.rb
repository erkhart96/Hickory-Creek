class Character < ApplicationRecord
    has_many :collected_items
    has_many :character_choices
    has_many :items, through: :collected_items
    has_many :choices, through: :character_choices

    has_secure_password #bcrypy

    validates :username, presence: true, uniqueness: true
end
