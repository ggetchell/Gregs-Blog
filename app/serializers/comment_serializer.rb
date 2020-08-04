class CommentSerializer < ActiveModel::Serializer
    attributes :id, :rating, :body, :commenter_name

    def commenter_name
        object.user.username
    end
end