import React, { useState } from 'react';
import "./CustomButton.css"



const CustomButton = (props) => {
    
    const [buttonClassLike, setButtonClassLike] = useState('inactive')
    const [buttonClassDislike, setButtonClassDislike] = useState('inactive')

    function handleClickLike(){
        if(buttonClassLike === "inactive"){
            setButtonClassLike("like-active");
        }
        else{
            setButtonClassLike("inactive")
        }

    }

    function handleClickDislike(){
        if(buttonClassDislike === "inactive"){
            setButtonClassDislike("dislike-active");
        }
        else{
            setButtonClassDislike("inactive")
        }

    }
    
    return (
        <div>
            <div>
                <button className={buttonClassLike} type="submit" onClick={handleClickLike}>Like</button>
            </div>
            <div>
                <button className={buttonClassDislike} type="submit" onClick={handleClickDislike}>Dislike</button>
            </div> 
        </div>

     );
}
 
export default CustomButton;