import { features } from "../../../services/services";

import Container from "../../../components/Container/Container";
import Heading from "../../../components/Heading/Heading";
import List from "../../../components/List/List";
import FeatureCard from "../../../components/FeatureCard/FeatureCard";

import { heading } from "../../../services/services";

import "./index.scss";

function Features() {
  return (
    <section className="features">
      <Container>
        <Heading heading={heading.features} />
        <div className="features__inner">
          <List data={features} Component={FeatureCard} />
        </div>
      </Container>
    </section>
  );
}

export default Features;
