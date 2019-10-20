class Node < ApplicationRecord
  belongs_to :experience

  validates_presence_of :date, :stage
end
