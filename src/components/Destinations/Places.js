// import React from "react";
// import places from "./ConstantPlaces";
// import Card from "./Card";



// function Places() {
//   return (
//     <div> {places.map(place => (
//         <Card
//         key={place.id}
//             id={place.id}
//             name={place.name}
//             desc={place.desc}
//             imageSrc={place.imageSrc}
//             cost={place.cost}
//         />
//     ))}</div>
//   )
// }

// export default Places



import React, { useState } from "react";
import places from "./ConstantPlaces";
import Card from "./Card";

function Places() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Function to filter places based on search query
  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex content-center justify-center items-center flex-col ">
      <div className="flex items-center justify-center w-[80%] md:mt-4 mt-2 bg-opacity-50 rounded-md   overflow-hidden ">
        <input 
          type="text" 
          placeholder="Search for places..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 py-2 px-4 md:px-6 border rounded-l-md focus:outline-none bg-transparent placeholder-opacity-75 placeholder-white" 
        />
        <button 
          type="submit" 
          className="bg-[#872341] hover:bg-[#541a2c] text-white py-2 px-4 border rounded-r-md"
        >
          Search
        </button>
      </div>
      {filteredPlaces.map((place) => (
        <Card
          key={place.id}
          id={place.id}
          name={place.name}
          desc={place.desc}
          imageSrc={place.imageSrc}
          cost={place.cost}
        />
      ))}
    </div>
  );
}

export default Places;
