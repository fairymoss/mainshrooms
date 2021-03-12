class CreateMushrooms < ActiveRecord::Migration[6.1]
  def change
    create_table :mushrooms do |t|
      t.string :common_name
      t.string :scientific_name
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
