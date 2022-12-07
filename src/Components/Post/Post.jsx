import CustomButton from "../CustomButton/CustomButton"
import './Post.css'

const Post = (props) => {
    return(
    <div className="border-box post-background container-flud">
        <div className="d-flex flex-column">
            <div className="p-2">
                <h4>{props.post.name}</h4>
            </div>
            <div className="p-2">
                <h6>{props.post.date}</h6>
            </div>
            <div className="p-2">
                <p>{props.post.post}</p>
            </div>
            <div className="p-2 align-self-end">
                <CustomButton />
            </div>
        </div>
    </div>
    )
}

export default Post