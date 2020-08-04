class PostShowSerializer < ActiveModel::Serializer 
    attributes :id, :title, :body

    has_many :reviews
end