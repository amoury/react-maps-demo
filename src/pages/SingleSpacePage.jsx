import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Jumbotron from "../layout/Jumbotron/Jumbotron";
import TwoColumn from "../layout/TwoColumn/TwoColumn";
import SingleSpaceInfo from "../components/spaces/SingleSpaceInfo";
import SingleSpaceContact from "../components/spaces/SingleSpaceContact";

class SingleSpacePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron bgImage="https://source.unsplash.com/random/800x600" />
        <Container>
          <TwoColumn
            left={<SingleSpaceInfo />}
            right={<SingleSpaceContact />}
          />
        </Container>
      </div>
    );
  }
}

export default SingleSpacePage;
