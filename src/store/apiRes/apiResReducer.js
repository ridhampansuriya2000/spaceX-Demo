import {
  API_RESPONSES,
} from "./apiResType";

const apiResponses = [];

const apiResReducer = (state = JSON.parse(JSON.stringify(apiResponses)), {type, payload}) => {
  switch (type) {
    case `${API_RESPONSES}` : {
      return {
        ...state,
        apiResponses: [...state.apiResponses, payload]
      }
    }

    default : {
      return state;
    }
  }
};

export default apiResReducer;