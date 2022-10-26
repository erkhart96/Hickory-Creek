class SituationChoiceSerializer < ActiveModel::Serializer
  attributes :id, :outcome
  has_one :situation
  has_one :choice
end
