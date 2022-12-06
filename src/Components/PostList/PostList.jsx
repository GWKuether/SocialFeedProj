const PostList = (props) => {
    return (
        <div>
        {props.postList.map((el) => {
          return (
            <div>
              <h3>{el.name}</h3>
              <p>{el.post}</p>
            </div>
          );
        })}
      </div>
     );
}
 
export default PostList;