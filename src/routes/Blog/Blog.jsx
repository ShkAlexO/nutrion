import { useState, useEffect } from "react";
import Container from "@c/Container/Container";
import Heading from "@c/Heading/Heading";
import List from "@c/List/List";
import BlogCard from "@c/BlogCard/BlogCard";

import { apiPosts, getPosts, heading } from "@/services/services";

import "./index.scss";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts(apiPosts);
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !posts.length) {
    return null;
  }

  const filterPosts = (cat) => {
    let currentCat = cat;
    if (currentCat !== "all") {
      setFilteredPosts(posts.filter(({ category }) => category === currentCat));
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <section className="blogPage">
      <Container>
        <Heading heading={heading.blogPage} />

        <div className="blogPage__categories">
          <button onClick={() => filterPosts("all")}>All posts</button>
          {posts.map(({ id, category }) => (
            <button onClick={() => filterPosts(category)} key={id}>
              {category}
            </button>
          ))}
        </div>

        <div className="blogPage__inner">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <List data={filteredPosts} Component={BlogCard} />
          )}
        </div>
      </Container>
    </section>
  );
}

export default Blog;
