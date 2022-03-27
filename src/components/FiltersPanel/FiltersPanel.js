import React from 'react'
import { useFilter } from '../../contexts/filterContext'

 function FiltersPanel() {
    const { filterState ,filterDispatch} = useFilter()
  return (
    <>
        <main>
        <div className="filter my-2">
            <div className="p-2 test-outline flex-space_between-center">
               <h2>Filters</h2>
               <h3><button className="text-underline" onClick={()=>filterDispatch({type:"CLEAR_ALL"})}>Clear all</button></h3>
            </div>
            <div className="p-2 test-outline">
               <h3>Price</h3>
               <input className="my-2 w-100per" type="range" min="0" max="10000" value={filterState.inputPrice} onChange={(e)=>filterDispatch({type:"INPUT_PRICE", payload: Number(e.target.value)})}/>
               <p>current max price {filterState.inputPrice}</p>
            </div>
            <div className="p-2 test-outline">
               <h3>Catagory</h3>
               <form className="my-2" >
               <label>
          <input
            type="checkbox"
            checked={filterState.catagoryName.poster}
            onChange={() => filterDispatch({ type: "CATEGORY_NAME", payload: "poster" })}
          />
          Poster
        </label><br/>
        <label>
          <input
            type="checkbox"
            checked={filterState.catagoryName.flag}
            onChange={() => filterDispatch({ type: "CATEGORY_NAME", payload: "flag" })}
          />
          Flag
        </label><br/>
        <label>
          <input
            type="checkbox"
            checked={filterState.catagoryName.scaleModel}
            onChange={() => filterDispatch({ type: "CATEGORY_NAME", payload:  "scaleModel"})}
          />
          Scale Model
        </label><br/>
        <label>
          <input
            type="checkbox"
            checked={filterState.catagoryName.wearable}
            onChange={() => filterDispatch({ type: "CATEGORY_NAME", payload: "wearable" })}
          />
          Wearable
        </label><br/>
               </form>
            </div>
            <div className="p-2 test-outline">
               <h3>Rating</h3>
               <form className="my-2">
          <label >
            <input
              type="radio"
              id="rating-opt-1"
              name="option1"
              value={4}
              onChange={(e) => filterDispatch({type:"INPUT_RATING" , payload: Number(e.target.value) })}
            />
            4 stars and above
          </label>
          <br />
          <label >
            <input
              type="radio"
              id="rating-opt-2"
              name="option1"
              value={3}
              onChange={(e) => filterDispatch({type:"INPUT_RATING" , payload: Number(e.target.value) })}
            />
            3 stars and above
          </label>
          <br />
          <label >
            <input
              type="radio"
              id="rating-opt-3"
              name="option1"
              value={2}
              onChange={(e) => filterDispatch({type:"INPUT_RATING" , payload: Number(e.target.value) })}
            />
            2 stars and above
          </label>
          <br />
          <label >
            <input
              type="radio"
              id="rating-opt-4"
              name="option1"
              value={1}
              onChange={(e) => filterDispatch({type:"INPUT_RATING" , payload: Number(e.target.value) })}
            />
            1 stars and above
          </label>
          <br />
        </form>
            </div>
            <div className="p-2 test-outline">
               <h3>Price</h3>
               <form>
          <label >
            <input
              type="radio"
              name="option2"
              onChange={() => filterDispatch({type:"INPUT_SORT", payload:"HIGH_TO_LOW"})}
            />
            High to low
          </label>
          <br />
          <label >
            <input
              type="radio"
              name="option2"
              onChange={() => filterDispatch({type:"INPUT_SORT", payload:"LOW_TO_HIGH"})}
            />
            Low to high
          </label>
          <br />
        </form>
            </div>
         </div>
    </main>         
    </>
  )
}

export {FiltersPanel}