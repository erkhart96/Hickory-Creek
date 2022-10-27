class AddLocationToSituation < ActiveRecord::Migration[7.0]
  def change
    add_column :situations, :location, :string
  end
end
