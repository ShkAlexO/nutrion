import ShadowBox from "@c/ShadowBox/ShadowBox";
import "./index.scss";

function FeatureCard({ icon, title, text }) {
  return (
    <ShadowBox className="feature">
      <div className="feature__inner-title">
        <img src={icon} alt={title} className="feature__icon" />
        <h3 className="feature__title">{title}</h3>
      </div>
      <p className="feature__text">{text}</p>
    </ShadowBox>
  );
}

export default FeatureCard;
