import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  const[postList, setPostLists] = useState([{name: 'George Kuether', date: '2022-12-06', post: 'This is the entirety of the first post. It is not a long post. It is not a short post. It is just here to do its job.' }])


  function addNewPost(newPost){
    let tempPosts = [newPost, ...postList]
    setPostLists(tempPosts)
  }

  return (
    <div className='main-background'>
      <div className='container-fluid'>
        <div className='row'>

          <NavBar />
        </div>
        <div className='row'>
          <div className='col-3'>
          </div>
          <div className='col-6'>
            <div className='border-box form-background'>
              <CreatePostForm addNewPost={addNewPost} />
            </div>
            <div>
              <PostList postList={postList} />
            </div>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
