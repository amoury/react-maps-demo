import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { connect } from 'react-redux';

import Jumbotron from "../layout/Jumbotron/Jumbotron";
import TwoColumn from "../layout/TwoColumn/TwoColumn";
import SingleSpaceInfo from "../components/spaces/SingleSpaceInfo";
import SingleSpaceContact from "../components/spaces/SingleSpaceContact";

class SingleSpacePage extends Component {
  render() {
    const { match, spaces } = this.props;
    const space = spaces.filter( space => match.params.id === space.id)[0];

    return (
      <div>
        <Jumbotron bgImage="https://source.unsplash.com/random/800x600" />
        <Container>
          <TwoColumn
            left={<SingleSpaceInfo space={space} />}
            right={<SingleSpaceContact space={space}/>}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces
})

export default connect(mapStateToProps)(SingleSpacePage);
