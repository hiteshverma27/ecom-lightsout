
const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "CATEGORY_NAME":
      return {
        ...state, catagoryName: {
          ...state.catagoryName, [payload]: !state.catagoryName[payload]
        }
      };
    case "INPUT_PRICE":
      return { ...state, inputPrice: payload };
    case "INPUT_RATING":
      return {...state, inputRating: payload }
    case "INPUT_SORT":
      return {...state, inputSort: payload}
    case "CLEAR_ALL":
      return {
        catagoryName: {
          poster: false,
          flag: false,
          scaleModel: false,
          wearable: false,
        },
        rating:"",
        inputPrice:10000,
        inputRating:1,
        inputSort:""
      };
    default:
      return {...state}
  }
};

export {filterReducer}