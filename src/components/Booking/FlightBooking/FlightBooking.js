// import React, { useState } from 'react';
// import Booking from '../Booking';
// import FlightForm from './FlightForm';
// import AvailableFlights from './AvailableFlights';
// import flightsData from './FlightsData';

// function FlightBooking() {
//     const [searchResults, setSearchResults] = useState([]);

//     const handleSearch = (results) => {
//         setSearchResults(results);
//     };

//     return (
//         <div>
//             <Booking />
//             <div className='flex justify-center'>
//                 <FlightForm flightsData={flightsData} onSearch={handleSearch} />
//             </div>
//             <div className='flex justify-center'>
//                 <AvailableFlights flights={searchResults.length > 0 ? searchResults : flightsData} />
//             </div>
//         </div>
//     );
// }

// export default FlightBooking;



import React, { useState } from 'react';
import Booking from '../Booking';
import FlightForm from './FlightForm';
import AvailableFlights from './AvailableFlights';
import flightsData from './FlightsData';

function FlightBooking() {
    const [searchResults, setSearchResults] = useState([]);
    const [noMatchingFlights, setNoMatchingFlights] = useState(false);

    const handleSearch = (results) => {
        setSearchResults(results);
        setNoMatchingFlights(results.length === 0);
    };

    return (
        <div>
            <Booking />
            <div className='flex justify-center'>
                <FlightForm flightsData={flightsData} onSearch={handleSearch} />
            </div>
            <div className='flex justify-center'>
                {noMatchingFlights ? (
                    <p className='mt-10 mb-10 font-serif text-white text-xl'>No Flights available for the selected criteria.</p>
                ) : (
                    <AvailableFlights flights={searchResults.length > 0 ? searchResults : flightsData} />
                )}
            </div>
        </div>
    );
}

export default FlightBooking;


