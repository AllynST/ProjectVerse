import PostComment from "./PostComments";
import { Project } from "./Project";

interface Post{
  id:string,
  project:Project,
  viewsCount:number,
  likesCount:number,
  commentsCount:number,
  isLikedByCurrentUser:boolean,
  postComments:PostComment[]  
}

export default Post;