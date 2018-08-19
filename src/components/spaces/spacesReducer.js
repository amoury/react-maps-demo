import { FETCH_SPACES, CREATE_SPACE, UPDATE_DISTANCE_DATA } from './spacesActions';


const initialState = [];

const spacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPACES:
      return [...action.payload];
    case CREATE_SPACE:
      return [...action.payload];
    case UPDATE_DISTANCE_DATA:
      return action.payload; 
    default:
      return state;
  }
}

export default spacesReducer;