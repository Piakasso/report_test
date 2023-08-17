export const reportsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_REPORTS": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
