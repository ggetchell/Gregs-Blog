class PostShowSerializer < ActiveModel::Serializer 
    attributes :id, :title, :body

    has_many :comments
end