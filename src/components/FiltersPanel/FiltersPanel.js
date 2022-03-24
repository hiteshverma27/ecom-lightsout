import React from 'react'

 function FiltersPanel() {
  return (
    <>
        <main>
        <div className="filter my-2">
            <div className="p-2 test-outline flex-space_between-center">
               <h2>Filters</h2>
               <h3><button className="text-underline" >Clear all</button></h3>
            </div>
            <div className="p-2 test-outline">
               <h3>Price</h3>
               <input className="my-2 w-100per" type="range" min="0" max="10000"/>
            </div>
            <div className="p-2 test-outline">
               <h3>Catagory</h3>
               <form className="my-2" >
                  <input type="checkbox" id="catagory-opt-1" name="option1"/>
                  <label htmlFor="catagory-opt-1"> Posters</label><br/>
                  <input type="checkbox" id="catagory-opt-2" name="option2" />
                  <label htmlFor="catagory-opt-2"> Flags</label><br/>
               </form>
            </div>
            <div className="p-2 test-outline">
               <h3>Rating</h3>
               <form className="my-2" >
                  <input type="radio" id="rating-opt-1" name="option1"/>
                  <label htmlFor="rating-opt-1"> 4 stars and above</label><br/>
                  <input type="radio" id="rating-opt-2" name="option1" />
                  <label htmlFor="rating-opt-2"> 3 stars and above</label><br/>
                  <input type="radio" id="rating-opt-3" name="option1"/>
                  <label htmlFor="rating-opt-3"> 2 stars and above</label><br/>
                  <input type="radio" id="rating-opt-4" name="option1" />
                  <label htmlFor="rating-opt-4"> 1 star and above</label><br/>
               </form>
            </div>
            <div className="p-2 test-outline">
               <h3>Price</h3>
               <form className="my-2" >
                  <input type="radio" id="price-opt-1" name="option1"/>
                  <label htmlFor="price-opt-1"> Price - Low to High</label><br/>
                  <input type="radio" id="price-opt-2" name="option1" />
                  <label htmlFor="price-opt-2"> Price - High to Low</label><br/>
               </form>
            </div>
         </div>
    </main>         
    </>
  )
}

export {FiltersPanel}