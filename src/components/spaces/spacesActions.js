import firebase from 'firebase/app';
import "firebase/database";

export const FETCH_SPACES = 'FETCH_SPACES';
export const CREATE_SPACE = 'CREATE_SPACE';
export const UPDATE_DISTANCE_DATA = 'UPDATE_DISTANCE_DATA';

export const fetchSpaces = spaces => ({
  type: FETCH_SPACES,
  payload: spaces
});

export const createSpaceAsync = space => {
  return dispatch => {
    firebase.database().ref("spaces2/").set(space)
      .then( result => {
        debugger
        console.log(result);
        dispatch(createSpace(space))
      })
      .catch (err => console.log(err));
  }
}

export const createSpace = space => ({
  type: CREATE_SPACE,
  payload: space
});

export const updateDistanceData = data => ({
  type: UPDATE_DISTANCE_DATA,
  payload: data
})