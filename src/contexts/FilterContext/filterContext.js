import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../../reducer/filterReducer";

const FilterContext = createContext(null);

const initialFilters = {
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

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialFilters);
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };