class Api::V1::PostsController < ApiController

  def index
    render json: Post.all
  end

  def new 
    render json: Post.new
  end


  def create
    new_post = Post.new(post_params)
    if new_post.save
      render json: new_post
    else
      render json: {errors: new_post.errors.full_messages}
    end
  end

  def show
    post = Post.find(params[:id])
    render json: post, serializer: PostShowSerializer
  end

  
  def edit
  end

  
  def update
    update_post = Post.update(post_params)
    if update_post.save
      render json: update_post
    else
      render json: {errors: update_post.errors.full_messages}
    end
  end


  def destroy
    @post = Post.find(destroy_post_params)
    @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

  # def find_post
  #   post = Post.find(params[:id])
  # end

end