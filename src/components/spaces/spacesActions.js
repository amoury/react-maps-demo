export const FETCH_SPACES = 'FETCH_SPACES';
export const CREATE_SPACE = 'CREATE_SPACE';
export const UPDATE_DISTANCE_DATA = 'UPDATE_DISTANCE_DATA';

export const fetchSpaces = spaces => ({
  type: FETCH_SPACES,
  payload: spaces
});

export const createSpace = space => ({
  type: CREATE_SPACE,
  payload: space
});

export const updateDistanceData = data => ({
  type: UPDATE_DISTANCE_DATA,
  payload: data
})