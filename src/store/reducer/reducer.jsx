const initialState = {
    products: [],
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      case "SET_ISLOADING":
        return {
          ...state,
          isLoading: action.payload,
        };  
      default:
        return state;
    }
  };
  
  export default reducers;
  