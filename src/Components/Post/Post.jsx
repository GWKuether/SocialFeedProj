import CustomButton from "../CustomButton/CustomButton"

const Post = (props) => {
    return(
    <div>
        <h2>{props.post.name}</h2>
        <h4>{props.post.date}</h4>
        <p>{props.post.post}</p>
        <CustomButton />
    </div>

    )
}

export default Post