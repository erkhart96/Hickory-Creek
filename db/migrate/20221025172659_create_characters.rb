class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :username
      t.string :password_digest
      t.integer :health

      t.timestamps
    end
  end
end
