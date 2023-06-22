const productReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD-PRODUCT":
      state = [...state, action.payload];
      return state;
    case "SET-PRODUCTS":
      state = action.payload;
      return state;
    case "EDIT-PRODUCT":
      let productIndex = state.findIndex((obj) => obj.id === action.payload.id);
      state[productIndex] = action.payload;
      return state;
    case "DELETE-PRODUCT":
        let restProducts = state.filter(obj => obj.id !== action.payload)
        state = restProducts
        return state;
    default:
      return state;
  }
};

export default productReducer;
