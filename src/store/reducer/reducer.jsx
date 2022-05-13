const initialState = {
    products: [],
    addItem: [],
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
      case "ADDITEM":
         return {
           addItem: [
              ...state.addItem,
              action.payload,
           ]
         }
        break;
      case "DELITEM":
        return {
          addItem: state = state.addItem.filter((addItem)=> {
            return addItem.id !== action.payload.id;
          })
        }
        break;
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
  