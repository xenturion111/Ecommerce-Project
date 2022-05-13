const initialState = {
    products: [],
    // product: [],
    addItem: [],
  };
  
  const reducers = (state = initialState, action) => {
    const product = action.payload;
    switch (action.type) {
      case "SET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      // case "SET_PRODUCT":
      //   return {
      //     ...state,
      //     products: action.payload,
      //   };
      case "SET_ISLOADING":
        return {
          ...state,
          isLoading: action.payload,
        };
      case "ADDITEM":
         //  return {
        //    addItem: [
        //       ...state.addItem,
        //       action.payload,
        //    ]
        //  }
          {
          const inCart = state.addItem.find(
            (product) => product.id === action.payload.id
        );
        
        return {
            ...state,
            addItem: inCart ? state.addItem.map((product) => product.id === action.payload.id ? {
              ...product, qty: product.qty + 1}
              : product
            ) : [...state.addItem, action.payload],
          };
      }
        break;
      case "DELITEM":
        // return {
        //   addItem: state = state.addItem.filter((addItem)=> {
        //     return addItem.id !== action.payload.id;
        //   })
          
        // }
        return {
          ...state,
          addItem: state.addItem.filter((product) => product.id !== action.payload.id),
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
  