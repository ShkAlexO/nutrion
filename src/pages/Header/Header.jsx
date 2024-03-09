import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Navigation classNav="header__nav" />
        </div>
      </div>
    </header>
  );
}

export default Header;
