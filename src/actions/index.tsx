export const storeCurrentUser = (user: object) => ({
  type: 'STORE_CURRENT_USER',
  user
});

export const toggleSidebar = () => ({
  type: 'TOGGLE_SIDEBAR'
});
