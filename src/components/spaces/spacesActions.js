import firebase from 'firebase/app';
import "firebase/database";
import { actions as toastrActions } from 'react-redux-toastr';


export const FETCH_SPACES = 'FETCH_SPACES';
export const CREATE_SPACE = 'CREATE_SPACE';
export const DELETE_SPACE = 'DELETE_SPACE';
export const UPDATE_DISTANCE_DATA = 'UPDATE_DISTANCE_DATA';


export const fetchSpacesAsync = () => {
  return dispatch => {
    firebase.database().ref("spaces/").on("value", function(data) {
      dispatch(fetchSpaces(data.val()));
    });
  }
}

export const fetchSpaces = spaces => ({
  type: FETCH_SPACES,
  payload: spaces
});

export const createSpaceAsync = spaces => {
  return dispatch => {
    firebase.database().ref("spaces/").set(spaces)
      .then(() => {
        dispatch(createSpace(spaces))
        dispatch(toastrActions.add({
          type: 'success',
          title: 'Success',
          message: 'Space added successfully'
        }))
      })
      .catch (err => console.log(err));
  }
}

export const createSpace = spaces => ({
  type: CREATE_SPACE,
  payload: spaces
});

export const updateDistanceData = data => ({
  type: UPDATE_DISTANCE_DATA,
  payload: data
});

export const updateSpacesAsync = spaces => {
  return dispatch => {
    firebase.database().ref("spaces/").set(spaces)
      .then(() => {
        console.log('Database updated successfully');
      })
      .catch (err => console.log(err));
  }
}

export const sortByDistance = (spaces) => {
  return (dispatch) => {
    const withDistanceData = spaces.filter( space => space.distanceData.status === "OK");
    const withoutDistanceData = spaces.filter( space => space.distanceData.status !== "OK");
    withDistanceData.sort( (a, b) => {
      return a.distanceData.distance.value - b.distanceData.distance.value;
    });
    const sortedSpaces = withDistanceData.concat(withoutDistanceData);
    dispatch(fetchSpaces(sortedSpaces));
  }
}