


import React from 'react';

function SearchBar() {
    return (
        <div className="flex items-center justify-center w-full md:mt-4 mt-2 bg-opacity-50">
            <input 
                type="text" 
                placeholder="Search for places..." 
                className="flex-1 py-2 md:px-6 border backdrop-blur-md border-gray-300 rounded-l-md focus:outline-none bg-transparent placeholder-opacity-75 placeholder-[#872341]" 
            />
            <button 
                type="submit" 
                className="bg-[#872341] hover:bg-[#541a2c] border text-white py-2 md:px-6 px-3 rounded-r-md"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;

