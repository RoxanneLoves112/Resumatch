class CreateNodes < ActiveRecord::Migration[5.1]
  def change
    create_table :nodes do |t|
      t.date :date
      t.string :stage
      t.string :question_type
      t.text :example_questions
      t.references :experience, foreign_key: true

      t.timestamps
    end
  end
end
