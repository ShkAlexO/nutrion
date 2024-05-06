import Container from "@c/Container/Container";
import Logo from "@c/Logo/Logo";
import Navigation from "@c/Navigation/Navigation";
import ShadowBox from "@c/ShadowBox/ShadowBox";
import ContactLink from "@c/ContactLink/ContactLink";
import contactLinks from "@/services/contactData";

import "./footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__inner-menu">
            <Logo />
            <Navigation classNav="footer__menu" />
          </div>

          <ShadowBox className="footer__info">
            <div className="footer__contacts">
              {contactLinks.map((link, index) => (
                <ContactLink key={index} {...link} />
              ))}
            </div>

            <p className="footer__copyright">
              ©{currentYear} Nutritionist. All rights reserved.
            </p>
          </ShadowBox>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
