class Experience < ApplicationRecord
  has_many :nodes

  validates_presence_of :company, :role, :job_type
end
