






// import React, { useState } from 'react';

// function AvailableFlights({ flights }) {
//     const [showAllFlights, setShowAllFlights] = useState(false);
//     const limitedFlights = showAllFlights ? flights : flights.slice(0, 5);
//     const noMatchingFlights = limitedFlights.length === 0;

//     return (
//         <div className="mb-6 flex justify-center w-full flex-col items-center"> {/* Center the cards and set the width to full */}
//             <h2 className="md:text-4xl text-2xl text-head font-serif text-center mt-3 mb-6">Available Flights</h2>
//             <div className="md:w-[60%] w-[90%] "> {/* Set the width of the container to 70% */}
//                 {noMatchingFlights ? (
//                     <p>No flights available for the selected criteria.</p>
//                 ) : (
//                     limitedFlights.map(flight => (
//                         <div key={flight.id} className="mb-4">
//                             <div className="rounded bg-gradient-to-r from-wall via-head to-wall border-2 text-white bg-wall">
//                                 <div className="px-6 py-4">
//                                     <div className="font-bold text-xl mb-2">{flight.name}</div>
//                                     <div className="mb-2">From: {flight.origin}</div>
//                                     <div className="mb-2">To: {flight.destination}</div>
//                                     <div className="flex flex-row">
//                                         {flight.classes.map((flightClass, index) => (
//                                             <div key={index} className="mb-2 mr-4">
//                                                 <p className="text-white border px-2 md:py-3 bg-gradient-to-r from-wall via-head to-wall rounded-md" style={{ display: 'inline-block' }}>
//                                                     {flightClass.className}: {flightClass.price}
//                                                 </p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//                 {!showAllFlights && flights.length > 5 && !noMatchingFlights && (
//                     <button onClick={() => setShowAllFlights(true)} className="text-head hover:underline focus:outline-none">Show all flights</button>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default AvailableFlights;










import React, { useState } from 'react';

function AvailableFlights({ flights }) {
    const [showAllFlights, setShowAllFlights] = useState(false);
    const limitedFlights = showAllFlights ? flights : flights.slice(0, 5);
    const noMatchingFlights = limitedFlights.length === 0;

    return (
        <div className="mb-6 flex justify-center w-full flex-col items-center">
            <h2 className="md:text-4xl text-2xl text-head font-serif text-center mt-3 mb-6">Available Flights</h2>
            <div className="md:w-[60%] w-[90%] ">
                {noMatchingFlights ? (
                    <p className='mt-10 mb-10 font-serif text-white text-xl'>No Flights available for the selected criteria.</p>
                ) : (
                    limitedFlights.map(flight => (
                        <div key={flight.id} className="mb-4">
                            <div className="rounded bg-gradient-to-r from-wall via-head to-wall border-2 text-white bg-wall">
                                <div className="px-6 py-4">
                                    <div className='flex justify-between'>
                                        <div className="font-bold text-xl mb-2">{flight.name} </div>
                                        <span className='text-xs items-end ml-5'>Time : {flight.time}</span>
                                    </div>

                                    <div className="">From: {flight.origin}</div>
                                    <div className="mb-2">To: {flight.destination}</div>
                                    <div className="flex flex-row">
                                        {flight.classes.map((flightClass, index) => (
                                            <div key={index} className="mb-2 mr-4">
                                                <p className="text-white border px-2 md:py-3 bg-gradient-to-r from-wall via-head to-wall rounded-md" style={{ display: 'inline-block' }}>
                                                    {flightClass.className}: {flightClass.price}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {!showAllFlights && flights.length > 5 && !noMatchingFlights && (
                    <button onClick={() => setShowAllFlights(true)} className="text-head hover:underline focus:outline-none">Show all flights</button>
                )}
            </div>
        </div>
    );
}

export default AvailableFlights;
