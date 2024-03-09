import { useParams } from "react-router-dom"


function Post() {
    // const params = useParams();
    const {categoryId, postId} = useParams();
    console.log('categoryId:'+ categoryId + '|' , 'postId:' + postId);

  return (
    <div>Post</div>
  )
}

export default Post