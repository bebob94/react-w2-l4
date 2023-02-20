import { ADD_JOB, REMOVE_JOB } from "../action";

const initialState = {
  jobOfferts: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,

        jobOfferts: [...state.jobOfferts, action.payload],
      };
    case REMOVE_JOB:
      return {
        ...state,

        jobOfferts: state.jobOfferts.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
