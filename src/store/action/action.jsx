import axios from 'axios'

export const setProducts = (payload) => ({
  type: "SET_PRODUCTS",
  payload,
});

// export const setProduct = (payload) => ({
//   type: "set_PRODUCTS",
//   payload,
// });


export const setIsLoading = (payload) => ({
    type: "SET_ISLOADING",
    payload,
});


export const fetchProduct = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data.results);
    await dispatch(setIsLoading(true));
    await dispatch(setProducts(res.data));
    await dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
};

// export const ProductDetail = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
//     // console.log(res.data.results);
//     await dispatch(setIsLoading(true));
//     await dispatch(getProduct(res.data));
//     await dispatch(setIsLoading(false));
//   } catch (error) {
//     console.log(error);
//   }
// };