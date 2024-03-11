import "./index.scss";

function Heading({ heading }) {
  const { title, subtitle } = heading;

  return (
    <div className="heading">
      <h2 className="heading__title">{title}</h2>
      <p className="heading__subtitle">{subtitle}</p>
    </div>
  );
}

export default Heading;
