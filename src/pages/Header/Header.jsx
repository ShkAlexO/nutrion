import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import WaveDecoration from "../../components/WaveDecoration/WaveDecoration";

import "./header.scss";

function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo />
          <Navigation classNav="header__nav" classButton="menu-button" />
        </div>
      </Container>
      <WaveDecoration />
    </header>
  );
}

export default Header;
