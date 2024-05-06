import { useState, useEffect } from "react";
import { getPosts, apiPosts } from "@/services/services";

function usePosts(modifiedData = null) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts(apiPosts);
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const modifiedPosts = modifiedData ? posts.filter(modifiedData) : posts;

  return { posts: modifiedPosts, loading };
}

export default usePosts;
