class Api::V1::PostsController < ApiController

    def index
        render json: Post.all 
    end

    def new 
        render json: Post.new
    end

    def create 
        @post = Post.new
        if @post.save(post_params)
            flash[:notice] = "Successfully created Post."
            redirect_to post_path(@post)
        else
            flash[:alert] = "Error creating new post!"
            render :new
        end
    end

    def edit

    end

    def update
        if @post.update_attributes(post_params)
            flash[:notice] = "Successfully updated post."
            redirect_to post_path(@post)
        else
            flash[:alert] = "Error updating post!"
        end
    end

    def show 

    end

    def destroy 
        if @post.destroy
            flash[:notice] = "Successfully deleted post."
            redirect_to posts_path
        else
            f;ash[:alert] = "Error updating post!"
        end
    end

    private

    def post_params 
        params.require(:post).permit(:title, :body)
    end

    def find_post 
        @post = Post.find(params[:id])
    end

end
    