import "./index.scss";

function ContactLink({ icon, type, text, target }) {
  let link = "";
  if (type === "mail") {
    link = `mailto:${text}`;
  } else if (type === "number") {
    const cleanedNumber = text.replace(/\D/g, "");
    link = `tel:+${cleanedNumber}`;
  } else if (type === "address") {
    link = text;
    const encodedAddress = encodeURIComponent(text);
    link = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }

  return (
    <a href={link} className="contactLink" target={target}>
      <img src={icon} alt={text} className="contactLink__icon" />
      <span className="contactLink__text">{text}</span>
    </a>
  );
}

export default ContactLink;
