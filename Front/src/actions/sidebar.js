// Types
export const CHANGE_SIDEBAR_VISIBILITY = 'CHANGE_SIDEBAR_VISIBILITY';

// Creators
export const changeSidebarVisibility = (sidebarName, visible) => ({
  type: CHANGE_SIDEBAR_VISIBILITY,
  sidebarName,
  visible,
});
