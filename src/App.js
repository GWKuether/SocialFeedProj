import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';


function App() {

  const[postList, setPostLists] = useState([{name: 'George Kuether', post: 'This is the entirety of the first post. It is not a long post. It is not a short post. It is just here to do its job.'},])

  return (
    <div>
      <PostList postList={postList} />

    </div>
  );
}

export default App;
