class CreateCharacterChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :character_choices do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.belongs_to :choice, null: false, foreign_key: true

      t.timestamps
    end
  end
end
