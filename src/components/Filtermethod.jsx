import React, { useState } from "react";

import data from "./TemplateData.json";

function Filtermethod() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <input 
            id="searchInput" 
            type="text" 
            placeholder="Search here..." 
            className="max-w-7xl p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }} 
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
              return false;
            })
            .map((val) => (
              <div key={val.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={val.image} alt={val.title} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="mt-4 text-lg font-semibold">{val.title}</h3>
                <p className="mt-2 text-gray-500">${val.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Filtermethod;
