const user = (state = {}, action: any) => {
  switch (action.type) {
    case 'STORE_CURRENT_USER':
      return action.user;
    default:
      return state;
  }
};

export default user;
