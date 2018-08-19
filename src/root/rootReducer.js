import { combineReducers } from 'redux';

import { reducer as toastrReducer } from 'react-redux-toastr';
import spacesReducer from '../components/spaces/spacesReducer';

const rootReducer = combineReducers({
  spaces: spacesReducer,
  toastr: toastrReducer
});

export default rootReducer;