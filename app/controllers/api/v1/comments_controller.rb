class Api::V1::CommentsController < ApiController

skip_before_action :verify_authenticity_token
    def create
        post = Post.find(params[:post_id])
        new_comment = Comment.new(comment_params)
        new_comment.post = post
        user = current_user
        new_comment.user = user

        if new_comment.save
            render json: new_comment
        else
            render json: {errors: new_comment.errors.full_messages}
        end
    end

    def destroy
        @comment = Post.find(destroy_comment_params)
        @comment.destroy 
    end

    private

    def comment_params
        params.require(:comment).permit(:rating, :body)
    end

    def destroy_comment_params 
        params.require(:id) 
    end
end
