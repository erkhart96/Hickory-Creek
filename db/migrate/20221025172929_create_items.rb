class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :location
      t.integer :durability
      t.integer :value

      t.timestamps
    end
  end
end
