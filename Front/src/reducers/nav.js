// Action Types
import { CHANGE_NAV_SIDEBAR_VISIBILITY } from 'src/actions/nav';

// Initial State
const initialState = {
  isNavSiderbarVisible: false,
};

// Reducer
const navReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NAV_SIDEBAR_VISIBILITY: 
        return {
          ...state,
          isNavSiderbarVisible: !state.isNavSiderbarVisible,
        };

    default:
      return state;
  }
};

export default navReducer;
