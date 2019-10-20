class CreateExperiences < ActiveRecord::Migration[5.1]
  def change
    create_table :experiences do |t|
      t.string :company
      t.string :role
      t.string :job_type

      t.timestamps
    end
  end
end
