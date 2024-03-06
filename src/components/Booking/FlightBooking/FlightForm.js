


// import React, { useState } from 'react';

// function FlightForm({ flightsData, onSearch }) {
//     const [origin, setOrigin] = useState('');
//     const [destination, setDestination] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Filter available flights based on user input
//         const filteredFlights = flightsData.filter(flight => {

//             const flightOrigin = flight.origin.toLowerCase();
//             const flightDestination = flight.destination.toLowerCase();
//             const inputOrigin = origin.toLowerCase();
//             const inputDestination = destination.toLowerCase();

//             // Check if both origin and destination match or contain the input values
//             return (flightOrigin.includes(inputOrigin) || flightOrigin === inputOrigin) &&
//                 (flightDestination.includes(inputDestination) || flightDestination === inputDestination);
//         });
//         // Pass filtered flights to parent component for rendering
//         onSearch(filteredFlights);
//     };

//     return (
//         <div className="flex flex-col items-center justify-center pb-5 rounded-lg w-[90%] md:w-[60%] mt-5 bg-gradient-to-r from-wall via-head to-wall border-2">
//             <h2 className="md:text-3xl text-white font-semibold mt-4 text-xl font-serif mb-8">Flight Booking Form</h2>
//             <form onSubmit={handleSubmit} className="w-full px-2 md:px-16">
//                 <div className="mb-4">
//                     <label htmlFor="origin" className="block text-white">From:</label>
//                     <select
//                         id="origin"
//                         className="form-select mt-1 py-1 pr-4 placeholder:text-gray-800 w-full rounded-md"
//                         value={origin}
//                         onChange={(e) => setOrigin(e.target.value)}
//                         required
//                     >
//                         <option value="">From</option>
//                         {/* Predefined destinations */}
//                         <option value="Singapore">Singapore</option>
//                         <option value="Mumbai">Mumbai</option>
//                         <option value="Delhi">Delhi</option>
//                         <option value="Jaipur">Jaipur</option>
//                         <option value="Udaipur">Udaipur</option>
//                         <option value="Chicago">Chicago</option>
//                         <option value="Miami">Miami</option>
//                         <option value="Boston">Boston</option>

//                     </select>
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="destination" className="text-white">To:</label>
//                     <select
//                         id="destination"
//                         className="form-select mt-1 py-1 pr-4 placeholder:text-gray-800 w-full rounded-md"
//                         value={destination}
//                         onChange={(e) => setDestination(e.target.value)}
//                         required
//                     >
//                         <option value="">Select destination</option>
//                         {/* Predefined destinations */}
//                         <option value="Singapore">Singapore</option>
//                         <option value="Mumbai">Mumbai</option>
//                         <option value="Delhi">Delhi</option>
//                         <option value="Jaipur">Jaipur</option>
//                         <option value="Udaipur">Udaipur</option>
//                         <option value="Chicago">Chicago</option>
//                         <option value="Miami">Miami</option>
//                         <option value="Boston">Boston</option>
                        
//                     </select>
//                 </div>


//                 <button type="submit" className="bg-wall hover:bg-[#421b27] text-white py-2 px-4 rounded-md">
//                     Search Flights
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default FlightForm;



















import React, { useState } from 'react';

function FlightForm({ flightsData, onSearch }) {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Filter available flights based on user input
        const filteredFlights = flightsData.filter(flight => {

            const flightOrigin = flight.origin.toLowerCase();
            const flightDestination = flight.destination.toLowerCase();
            const inputOrigin = origin.toLowerCase();
            const inputDestination = destination.toLowerCase();

            // Check if both origin and destination match or contain the input values
            return (flightOrigin.includes(inputOrigin) || flightOrigin === inputOrigin) &&
                (flightDestination.includes(inputDestination) || flightDestination === inputDestination);
        });
        // Pass filtered flights to parent component for rendering
        onSearch(filteredFlights);
    };

    return (
        <div className="flex flex-col items-center justify-center pb-5 rounded-lg w-[90%] md:w-[60%] mt-5 bg-gradient-to-r from-wall via-head to-wall border-2">
            <h2 className="md:text-3xl text-white font-semibold mt-4 text-xl font-serif mb-8">Flight Booking Form</h2>
            <form onSubmit={handleSubmit} className="w-full px-2 md:px-16">
                <div className="mb-4">
                    <label htmlFor="origin" className="block text-white">From:</label>
                    <select
                        id="origin"
                        className="form-select mt-1 py-1 pr-4 placeholder:text-gray-800 w-full rounded-md"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                    >
                        <option value="">From</option>
                        {/* Predefined destinations */}
                        <option value="Singapore">Singapore</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Miami">Miami</option>
                        <option value="Boston">Boston</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="destination" className="text-white">To:</label>
                    <select
                        id="destination"
                        className="form-select mt-1 py-1 pr-4 placeholder:text-gray-800 w-full rounded-md"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                    >
                        <option value="">Select destination</option>
                        {/* Predefined destinations */}
                        <option value="Singapore">Singapore</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Miami">Miami</option>
                        <option value="Boston">Boston</option>
                        
                    </select>
                </div>


                <button type="submit" className="bg-wall hover:bg-[#421b27] text-white py-2 px-4 rounded-md">
                    Search Flights
                </button>
            </form>
        </div>
    );
}

export default FlightForm;