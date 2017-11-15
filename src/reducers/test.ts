const test = (state = {}, action: any) => {
  switch (action.type) {
    case 'TEST':
      return 'test';
    default:
      return state;
  }
};

export default test;
