json.array!(@performances) do |performance|
  json.extract! performance, :id, :stakeholder_satisfaction, :timely_delivery, :budget_delivery, :planned_scope_delivery, :quality_requirements
  json.url performance_url(performance, format: :json)
end
