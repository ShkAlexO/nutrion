import { useParams } from "react-router-dom";
import Container from "@c/Container/Container";

function Post() {
  // const params = useParams();
  const { categoryId, postId } = useParams();
  console.log("categoryId:" + categoryId + "|", "postId:" + postId);

  return (
    <Container>
      <div className="postWrap">555</div>
    </Container>
  );
}

export default Post;
