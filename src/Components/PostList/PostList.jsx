import Post from "../Post/Post";

const PostList = (props) => {
    return (
        <div>
        {props.postList.map((el) => {
          return (
            <Post post={el} />
          );
        })}
      </div>
     );
}
 
export default PostList;