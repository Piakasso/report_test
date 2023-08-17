export const renderedReportsReducer = (
  state = { actualReports: [], startIndex: 0, endIndex: 10 },
  action
) => {
  switch (action.type) {
    case "SHOW_RENDERED_REPORTS": {
      return {
        ...state,
        actualReports: action.payload.slice(state.startIndex, state.endIndex),
      };
    }

    case "NEXT_RENDERED_REPORTS": {
      state.endIndex += 10;
      state.startIndex += 10;
      return {
        endIndex: state.endIndex,
        startIndex: state.startIndex,
        actualReports: action.payload.slice(state.startIndex, state.endIndex),
      };
    }

    case "PREV_RENDERED_REPORTS": {
      state.endIndex -= 10;
      state.startIndex -= 10;
      return {
        endIndex: state.endIndex,
        startIndex: state.startIndex,
        actualReports: action.payload.slice(state.startIndex, state.endIndex),
      };
    }

    default: {
      return state;
    }
  }
};
