export const crudInitialState = {
    state: [],
  };

const userReducer = (state, action) => {
    switch (action.type) {
      case "ADD-USER":
        console.log(action.payload)
        return {...state,state:action.payload};
      case "SET-USER":
        return {
          state: action.payload};
      default:
        return state;
    }
  };
  
  export default userReducer;