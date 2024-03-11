import ShadowBox from "../ShadowBox/ShadowBox";

import "./index.scss";

function BlogCard({ image, title, text }) {
  const allText = text.split(" ");
  const excerpt = allText.slice(0, 20).join(" ") + "...";

  return (
    <ShadowBox>
      <div className="blogCard">
        <img src={image} alt={title} className="blogCard__img" />
        <h3 className="blogCard__title h5">{title}</h3>
        <p className="blogCard__exerpt">{excerpt}</p>
      </div>
    </ShadowBox>
  );
}

export default BlogCard;
