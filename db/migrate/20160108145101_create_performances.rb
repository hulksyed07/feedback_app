class CreatePerformances < ActiveRecord::Migration
  def change
    create_table :performances do |t|
      t.integer :stakeholder_satisfaction
      t.integer :timely_delivery
      t.integer :budget_delivery
      t.integer :planned_scope_delivery
      t.integer :quality_requirements

      t.timestamps null: false
    end
  end
end
