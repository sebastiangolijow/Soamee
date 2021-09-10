import { useEffect } from "react";

const InitialState = {
   Books: [],
   DetailBook: {},
   Authors:[]
  };
  
function Reducer(state = InitialState, action) {

    switch (action.type) { 
      case "ALL_BOOKS":
        return { ...state,
        Books: action.payload 
        };
      case "DETAIL_BOOK":
        return {
          ...state,
          DetailBook: action.payload
        };
        case "AUTHORS":
          return { ...state,
          Authors: action.payload
          };
      default:
        return state;
    }
  }
  
  export default Reducer;