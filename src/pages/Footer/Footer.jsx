import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import ContactLink from "../../components/ContactLink/ContactLink";

import "./footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <Logo />

          <ContactLink></ContactLink>

          <Navigation classNav="footer__menu" />
        </div>
      </Container>

      <div className="footer__copyright">
        <Container>
          <p>©{currentYear} Nutritionist. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
