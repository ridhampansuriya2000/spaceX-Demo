import {
  GET_DATA
} from "./DashboardType";

const data = {
  data: []
};

const dashboardReducer = (state = JSON.parse(JSON.stringify(data)), {type, payload}) => {
  switch (type) {
    case `${GET_DATA}`: {
      return {
        ...state, data: [...state.data,...payload]
      }
    }

    default : {
      return state;
    }
  }
};

export default dashboardReducer;