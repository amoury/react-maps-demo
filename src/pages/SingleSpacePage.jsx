import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { connect } from 'react-redux';

import Jumbotron from "../layout/Jumbotron/Jumbotron";
import TwoColumn from "../layout/TwoColumn/TwoColumn";
import SingleSpaceInfo from "../components/spaces/SingleSpaceInfo";
import SingleSpaceContact from "../components/spaces/SingleSpaceContact";
import Loader from '../layout/Loader/Loader';
import { updateSpacesAsync } from "../components/spaces/spacesActions";

class SingleSpacePage extends Component {
  handleSpaceDelete = spaceId => {
    const _spaces = [...this.props.spaces];
    const updatedSpaces = _spaces.filter( space => space.id !== spaceId );
    this.props.updateSpacesAsync(updatedSpaces);
    this.props.history.push('/');
  }


  render() {
    const { match, spaces } = this.props;
    if(!spaces) return <Loader/>;
    const space = spaces.filter( space => match.params.id === space.id)[0];

    return (
      <div>
        <Jumbotron bgImage="https://source.unsplash.com/random/800x600" />
        <Container>
          <TwoColumn
            left={<SingleSpaceInfo space={space} />}
            right={<SingleSpaceContact space={space} handleDelete={this.handleSpaceDelete}/>}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces
})

export default connect(mapStateToProps, { updateSpacesAsync })(SingleSpacePage);
