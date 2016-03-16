class Performance < ActiveRecord::Base
	validates_presence_of :stakeholder_satisfaction, :timely_delivery, :budget_delivery, :planned_scope_delivery, :quality_requirements
end
