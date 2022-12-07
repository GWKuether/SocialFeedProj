import React, { useState } from 'react';
import "./CustomButton.css"



const CustomButton = (props) => {
    
    const [buttonClassLike, setButtonClassLike] = useState('inactive')
    const [buttonClassDislike, setButtonClassDislike] = useState('inactive')

    function handleClickLike(){
        if(buttonClassLike === "inactive"){
            setButtonClassLike("like-active")
            if (buttonClassDislike === "dislike-active"){
                setButtonClassDislike("inactive")
            }
        }
        else{
            setButtonClassLike("inactive")
        }

    }

    function handleClickDislike(){
        if(buttonClassDislike === "inactive"){
            setButtonClassDislike("dislike-active")
            if (buttonClassLike === "like-active"){
                setButtonClassLike("inactive")
            }
        }
        else{
            setButtonClassDislike("inactive")
        }

    }
    
    return (
        <div className='d-flex flex-row'>
            <div className='p-2'>
                <button className={buttonClassLike} type="submit" onClick={handleClickLike}>Like</button>
            </div>
            <div className='p-2'>
                <button className={buttonClassDislike} type="submit" onClick={handleClickDislike}>Dislike</button>
            </div> 
        </div>

     );
}
 
export default CustomButton;