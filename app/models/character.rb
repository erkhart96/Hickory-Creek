class Character < ApplicationRecord
    has_many :collected_items
    has_many :character_choices
    has_many :items, through: :collected_items
    has_many :choices, through: :character_choices

    has_secure_password #bcrypt

    validates :username, presence: true, uniqueness: true

    def recent_choice
        self.character_choices.first.choice
    end

    def character_choice_id
        self.character_choices.first.id
    end

    def recent_situation
        self.recent_choice.situations.first
    end

    def upcoming_situation
        self.recent_choice.situations.last
    end

    def upcoming_situation_text
        self.upcoming_situation.story_text
    end

    def upcoming_choices
        self.upcoming_situation.choices.drop(1)
    end
end
