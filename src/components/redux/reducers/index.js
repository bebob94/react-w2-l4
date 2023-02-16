const initialState = {
  container: {
    jobOfferts: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-JOB":
      return {
        ...state,
        container: {
          ...state.container,
          jobOfferts: [...state.container.jobOfferts, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
