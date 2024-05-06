import { useState, useEffect } from "react";
import Container from "@c/Container/Container";
import Heading from "@c/Heading/Heading";
import List from "@c/List/List";
import BlogCard from "@c/BlogCard/BlogCard";

import { apiPosts, getPosts, heading } from "@/services/services";

import "./index.scss";

function LastPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPosts(apiPosts);
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading || !posts.length) {
    return null;
  }

  const lastTwoPosts = posts.slice(-2);

  return (
    <section className="lastPosts">
      <Container>
        <Heading heading={heading.features} />

        <div className="lastPosts__inner">
          <List data={lastTwoPosts} Component={BlogCard} />
        </div>
      </Container>
    </section>
  );
}

export default LastPosts;
