const initialState = {
    products: [],
    // cart: [],
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
      // case "ADDITEM":
      //     const exist = state.find((x) => x.id === product.id)
      //     if(exist) {
      //       return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1 }: x);
      //     } else {
      //       const product = action.payload;
      //       return [
      //         ...state,
      //         {
      //           ...product,
      //             qty: 1,
      //         }
      //       ]
      //     }
      //     break;
      //   case "DELITEM":
      //       const exist1 = state.find((x) => x.id === product.id)
      //       if(exist1.qty === 1) {
      //         return state.filter((x) => x.id !== exist1.id);
      //       } else {
      //         return state.map((x) => 
      //           x.id === product.id ? {...x, qty: x.qty - 1 } : x
      //         );
      //       }
      //     break;
      default:
        return state;
    }
  };
  
  export default reducers;
  