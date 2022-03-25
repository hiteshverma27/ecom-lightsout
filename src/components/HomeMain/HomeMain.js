import React from "react";
import { v4 as uuid } from "uuid";
import { CatagoryCard } from "../CatagoryCard/CatagoryCard";

const categories = [
    {
      _id: uuid(),
      categoryName: "fiction",
      description:
        "literature in the form of prose, especially novels, that describes imaginary events and people",
    },
    {
      _id: uuid(),
      categoryName: "non-fiction",
      description:
        "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    },
    {
      _id: uuid(),
      categoryName: "horror",
      description:
        "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    },
  ];
 function HomeMain() {
  return (
    <main className="w-100vw flex-center-center flex-col">
      <div className="explore-section w-100per my-1">
        <div className="p-3 h-50vh explore-items w-100per img-cover border-radius-2rem">
          <img
            className="h-100per w-100per img-cover hover-img"
            src="https://images.unsplash.com/photo-1563394779868-b02c503851fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="main"
          />
        </div>
        <div className="p-3 h-50vh explore-items">
          <img
            className="h-100per w-100per img-cover hover-img"
            src="https://images.unsplash.com/photo-1555765093-698c20d82b2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80"
            alt="main"
          />
        </div>
      </div>
      <hr />
      <div className="catagory w-100per flex-center-center flex-wrap p-2">
        {
            categories.map(({categoryName,_id})=><CatagoryCard categoryName={categoryName} key={_id}/>)
        }
      </div>
    </main>
  );
}



export {HomeMain}