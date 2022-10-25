class CreateCollectedItems < ActiveRecord::Migration[7.0]
  def change
    create_table :collected_items do |t|
      t.integer :character_id
      t.integer :item_id

      t.timestamps
    end
  end
end
