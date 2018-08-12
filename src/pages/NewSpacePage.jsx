import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Progress, Form } from "semantic-ui-react";
import CenteredColumn from "../layout/CenteredColumn/CenteredColumn";
import FormBasicInfo from "../components/spaces/AddSpaceForm/FormBasicInfo";
import FormContactInfo from "../components/spaces/AddSpaceForm/FormContactInfo";
import FormAmenitiesInfo from "../components/spaces/AddSpaceForm/FormAmenitiesInfo";
import FormLocationInfo from "../components/spaces/AddSpaceForm/FormLocationInfo";
import TestForm from '../components/spaces/AddSpaceForm/TestForm';

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
      amenities: []
    }
  };

  componentDidMount = () => {
    const { pathname } = this.props.location;
    const baseUrl = "/spaces/add/";
    switch (pathname) {
      case `${baseUrl}basic-info`:
        this.setState({ formStep: 1, progress: 10 });
        break;
      case `${baseUrl}contact-info`:
        this.setState({ formStep: 2, progress: 20 });
        break;
      case `${baseUrl}amenities`:
        this.setState({ formStep: 3, progress: 30 });
        break;
      case `${baseUrl}location-info`:
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
      amenities
    } = this.state.space;
    switch (step) {
      case 1:
        return (
          <FormBasicInfo
            next={this.handleProgressInc}
            back={this.handleProgressDec}
            space={{ name, description }}
            onInputChange={this.onInputChange}
          />
        );
      case 2:
        return (
          <FormContactInfo
            next={this.handleProgressInc}
            back={this.handleProgressDec}
            space={{ contactInfo, socialLinks }}
            onObjectChange={this.onObjectChange}
          />
        );
      case 3:
        return (
          <FormAmenitiesInfo
            next={this.handleProgressInc}
            back={this.handleProgressDec}
            amenities={amenities}
            onCheckboxChange={this.onCheckboxChange}
          />
        );
      case 4:
        return (
          <TestForm />
          // <FormLocationInfo
          //   next={this.handleProgressInc}
          //   back={this.handleProgressDec}
          // />
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

  onFormSubmit = event => {
    console.log(event);
  };

  render() {
    const { match, location } = this.props;
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
          {shouldRedirect && <Redirect to="/spaces/add/basic-info" />}

          <Form onSubmit={this.onFormSubmit}>
            {this.renderFormStep(this.state.formStep)}
          </Form>
        </CenteredColumn>
      </Fragment>
    );
  }
}

export default NewSpacePage;
