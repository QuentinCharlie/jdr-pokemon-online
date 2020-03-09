// Action Types
import { CHANGE_SIDEBAR_VISIBILITY } from 'src/actions/sidebar';

// Initial State
const initialState = {
  isNavSidebarVisible: false,
  isLogSidebarVisible: false,
  isTrainerSidebarVisible: false,
  isPokemonSidebarVisible: false,
  isAttacksSidebarVisible: false,
  isDicesSidebarVisible: false,
};

// Reducer
const sidebarReducer = (state = initialState, action = {}) => {
  const bool = action.bool;
  switch (action.type) {
    case CHANGE_SIDEBAR_VISIBILITY: {
      const sidebarToChange = `is${action.sidebarName}SidebarVisible`;
      return {
        isNavSidebarVisible: false,
        isLogSidebarVisible: false,
        isTrainerSidebarVisible: false,
        isPokemonSidebarVisible: false,
        isAttacksSidebarVisible: false,
        isDicesSidebarVisible: false,
        [sidebarToChange]: !action.visible,
      };
    }

    default:
      return state;
  }
};

export default sidebarReducer;
