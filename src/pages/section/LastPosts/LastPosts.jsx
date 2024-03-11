import Container from "../../../components/Container/Container";
import Heading from "../../../components/Heading/Heading";
import List from "../../../components/List/List";
import BlogCard from "../../../components/BlogCard/BlogCard";

import { heading, blog } from "../../../services/services";

import "./index.scss";

function LastPosts() {
  const lastTwoPosts = blog.slice(-2);

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
