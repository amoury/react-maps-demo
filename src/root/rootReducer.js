import { combineReducers } from 'redux'; 
import spacesReducer from '../components/spaces/spacesReducer';

const rootReducer = combineReducers({
  spaces: spacesReducer
});

export default rootReducer;