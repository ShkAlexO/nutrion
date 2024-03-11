import Container from "../../../components/Container/Container";
import "./index.scss";
import womenImage from "../../../assets/images/woman.png";

import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner">
      <Container>
        <div className="banner__inner">
          <div className="banner__content">
            <h2 className="banner__title">
              Skip The Diet, Just Eat Healthy With Jez Salad
            </h2>
            <p className="banner__text">
              Imagine you don't need a diet because we provide healthy and
              delicious food for you! Imagine you don't need a diet because we
              provide healthy and delicious food for you!
            </p>
            <Link to="/about" className="button">
              About Us
            </Link>
          </div>

          <div className="banner__img">
            <img src={womenImage} alt="women" />
            <div className="banner__quote">
              <p>
                Take care of your body.
                <br /> It is the only place where you will have to live
                permanently.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
