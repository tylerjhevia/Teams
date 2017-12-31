const sidebar = (state: boolean, action: any) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return !state;
    default:
      return false;
  }
};

export default sidebar;
