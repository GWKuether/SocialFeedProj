import React, { useState } from 'react';
import './CreatePostForm.css'


const CreatePostForm = (props) => {
    
    const [name, setName] = useState('')
    const [post, setPost] = useState('')
    const [date, setDate] = useState('')
    
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            date: date,
            post: post  
        }
        console.log(newPost)
        props.addNewPost(newPost)

    }
    
    return (
            <div className='form-background'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className='form-group'>   
                        <label>Date</label>
                        <input type='date' className='form-control' value={date} onChange={(event) => setDate(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Post</label>
                        <input type='text' className='form-control' value={post} onChange={(event) => setPost(event.target.value)} />
                    </div> 
                        <button type='submit' className='btn btn-dark' style={{'margin-top': '1em'}}>Create</button>
                </form>
            </div>

     );
}
 
export default CreatePostForm;