import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const[postList, setPostLists] = useState([{name: 'George Kuether', date: '12-6-2022', post: 'This is the entirety of the first post. It is not a long post. It is not a short post. It is just here to do its job.' }])


  function addNewPost(newPost){
    let tempPosts = [newPost, ...postList]
    setPostLists(tempPosts)
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPost={addNewPost} />
      <PostList postList={postList} />

    </div>
  );
}

export default App;
