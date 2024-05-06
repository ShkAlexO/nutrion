import ShadowBox from "@c/ShadowBox/ShadowBox";
import { Link } from "react-router-dom";

import "./index.scss";

function BlogCard({ id, category, image, title, text }) {
  const allText = text.split(" ");
  const excerpt = allText.slice(0, 20).join(" ") + "...";

  return (
    <ShadowBox className="blogCard">
      <Link to={`${category}/${id}`} className="blogCard__link" />
      <img src={image} alt={title} className="blogCard__img" />
      <h3 className="blogCard__title h5">{title}</h3>
      <p className="blogCard__exerpt">{excerpt}</p>
    </ShadowBox>
  );
}

export default BlogCard;
