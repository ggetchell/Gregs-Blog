class Comment < ApplicationRecord
    validates :rating, presence: true

    belongs_to :post
    belongs_to :user

end