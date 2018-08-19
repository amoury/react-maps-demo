import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Progress, Form } from "semantic-ui-react";
import cuid from "cuid";

import { createSpaceAsync } from "../components/spaces/spacesActions";

import CenteredColumn from "../layout/CenteredColumn/CenteredColumn";
import FormBasicInfo from "../components/spaces/AddSpaceForm/FormBasicInfo";
import FormContactInfo from "../components/spaces/AddSpaceForm/FormContactInfo";
import FormAmenitiesInfo from "../components/spaces/AddSpaceForm/FormAmenitiesInfo";
import FormLocationInfo from "../components/spaces/AddSpaceForm/FormLocationInfo";


class NewSpacePage extends Component {
  state = {
    progress: 10,
    space: {
      name: "",
      description: "",
      contactInfo: {
        email: "",
        contactNumber: "",
        siteLink: ""
      },
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: ""
      },
      amenities: [],
      location: {
        address: "",
        coordinates: {}
      },
      spaceHighlights: []
    }
  };

  componentDidMount = () => {
    this.switchSteps();
  };

  componentDidUpdate = prevProps => {
    if (this.props.location === prevProps.location) return;
    this.switchSteps();
  };

  switchSteps = () => {
    const { pathname } = this.props.location;
    this.renderFormStep();
    const baseUrl = "/spaces/add/";
    switch (pathname) {
      case `${baseUrl}location-info`:
        this.setState({ formStep: 1, progress: 10 });
        break;
      case `${baseUrl}basic-info`:
        this.setState({ formStep: 2, progress: 20 });
        break;
      case `${baseUrl}contact-info`:
        this.setState({ formStep: 3, progress: 30 });
        break;
      case `${baseUrl}amenities`:
        this.setState({ formStep: 4, progress: 40 });
        break;
      default:
        break;
    }
  };

  renderFormStep = step => {
    const {
      name,
      description,
      contactInfo,
      socialLinks,
      amenities,
      spaceHighlights
    } = this.state.space;
    switch (step) {
      case 1:
        return (
          // <TestForm />
          <FormLocationInfo
            _space={this.state.space}
            next={this.handleProgressInc}
            back={this.handleProgressDec}
            handleMapData={this.handleMapData}
          />
        );
      case 2:
        return (
          <FormBasicInfo
            next={this.handleProgressInc}
            back={this.handleProgressDec}
            space={{ name, description, spaceHighlights }}
            onInputChange={this.onInputChange}
            onSpaceHighlightsChange={this.onSpaceHighlightsChange}
          />
        );
      case 3:
        return (
          <FormContactInfo
            next={this.handleProgressInc}
            back={this.handleProgressDec}
            space={{ contactInfo, socialLinks }}
            onObjectChange={this.onObjectChange}
          />
        );
      case 4:
        return (
          <FormAmenitiesInfo
            next={this.handleProgressInc}
            back={this.handleProgressDec}
            amenities={amenities}
            onCheckboxChange={this.onCheckboxChange}
          />
        );
      default:
        return;
    }
  };

  handleProgressInc = () => {
    if (this.state.progress >= 100 && this.state.formStep >= 10) return;
    this.setState({
      step: this.state.formStep++,
      progress: this.state.progress + 10
    });
  };

  handleProgressDec = () => {
    if (this.state.progress <= 10 && this.state.formStep <= 1) return;
    this.setState({
      step: this.state.formStep--,
      progress: this.state.progress - 10
    });
  };

  handleMapData = result => {
    this.setState({ space: result });
  };

  onInputChange = event => {
    const newSpace = this.state.space;
    newSpace[event.target.name] = event.target.value;
    this.setState({ space: newSpace });
  };

  onObjectChange = newObj => {
    const _space = this.state.space;
    _space[Object.keys(newObj)[0]] = Object.values(newObj)[0];
    this.setState({ space: _space });
  };

  onCheckboxChange = (name, array) => {
    const _space = this.state.space;
    _space[name] = [...array];
    this.setState({ space: _space });
  };

  onSpaceHighlightsChange = highlightFields => {
    const _space = {...this.state.space};
    _space.spaceHighlights = highlightFields;
    this.setState({ space: _space });
  };

  onFormSubmit = () => {
    const _space = { ...this.state.space };
    if (_space.id) {
      const _spaces = this.props.spaces.filter( space => space.id !== _space.id);
      const updatedSpaces = [..._spaces].concat([{ ..._space }]);
      this.props.createSpaceAsync(updatedSpaces);
      this.props.history.push("/");
      return;
    }
  
    _space["id"] = cuid();
    _space["mainImage"] = "https://source.unsplash.com/random/";

    const _spaces = [...this.props.spaces].concat([{ ..._space }]);
    this.props.createSpaceAsync(_spaces);
    this.props.history.push("/");
  };

  handleSpaceEdit = (currentSpace) => {
    if(!currentSpace.id) return;
    this.setState({ space: currentSpace })
    this.props.history.push('/spaces/add/basic-info');
  }

  render() {
    const { match, location, spaces } = this.props;
    
    if ( match.params.id ) {
      const newObj = spaces.filter(space => space.id === match.params.id)[0];
      this.handleSpaceEdit(newObj);
      return null;
    }
    
    let shouldRedirect = match.url === location.pathname;
    
    return (
      <Fragment>
        <CenteredColumn
          top={
            <Progress
            className="form_progress_bar"
            percent={this.state.progress}
            color="teal"
            />
          }
          >
          
          {shouldRedirect && <Redirect to="/spaces/add/location-info" />}
          

          <Form onSubmit={this.onFormSubmit}>
            {this.renderFormStep(this.state.formStep)}
          </Form>
        </CenteredColumn>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  spaces: state.spaces
})

export default connect(
  mapStateToProps,
  { createSpaceAsync }
)(NewSpacePage);
