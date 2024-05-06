import "./index.scss";

function ShadowBox({ children, className }) {
  return <div className={`shadowBox ${className}`}>{children}</div>;
}

export default ShadowBox;
