


// import React from 'react';

// function AvailableTrains({ trains }) {
//     const noTrainsAvailable = trains.length === 0;


//     function booked(){

//     }

//     return (
//         <div className="mb-6 flex justify-center w-full flex-col items-center">
//             <h2 className="md:text-4xl text-2xl text-head font-serif text-center mt-3 mb-6">Available Trains</h2>
//             <div className="md:w-[60%] w-[90%] ">
//                 {noTrainsAvailable ? (
//                     <p className='mt-10 text-white text-xl'>No Trains available for the selected criteria.</p>
//                 ) : (
//                     trains.map(train => (
//                         <div key={train.id} className="mb-4">
//                             <div className="rounded bg-gradient-to-r from-wall via-head to-wall border-2 text-white bg-wall">
//                                 <div className="px-6 py-4">
//                                     <div className='flex  justify-between '>
//                                     <div className="font-bold text-xl mb-2">{train.name}</div>  
//                                     <span className='text-xs items-end ml-5'>Time : {train.time}</span>
//                                      </div>

//                                     <div className="mb-2">From: {train.origin}</div>
//                                     <div className="mb-2">To: {train.destination}</div>
//                                     <div className="flex flex-row">
//                                         {train.classes.map((trainClass, index) => (
//                                             <div key={index} className="mb-2 mr-4">
//                                                 <p onClick={booked} className="text-white border px-2 md:py-3 bg-gradient-to-r from-wall via-head to-wall rounded-md" style={{ display: 'inline-block' }}>
//                                                     {trainClass.className}: {trainClass.price}
//                                                 </p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// }

// export default AvailableTrains;

















import React from 'react';


function AvailableTrains({ trains }) {
    const noTrainsAvailable = trains.length === 0;


    

    return (
        <div className="mb-6 flex justify-center w-full flex-col items-center">
            <h2 className="md:text-4xl text-2xl text-head font-serif text-center mt-3 mb-6">Available Trains</h2>
            <div className="md:w-[60%] w-[90%] ">
                {noTrainsAvailable ? (
                    <p className='mt-10 text-white text-xl'>No Trains available for the selected criteria.</p>
                ) : (
                    trains.map(train => (
                        <div key={train.id} className="mb-4">
                            <div className="rounded bg-gradient-to-r from-wall via-head to-wall border-2 text-white bg-wall">
                                <div className="px-6 py-4">
                                    <div className='flex  justify-between '>
                                        <div className="font-bold text-xl mb-2">{train.name}</div>
                                        <span className='text-xs items-end ml-5'>Time : {train.time}</span>
                                    </div>

                                    <div className="mb-2">From: {train.origin}</div>
                                    <div className="mb-2">To: {train.destination}</div>
                                    <div className="flex flex-row">
                                        {train.classes.map((trainClass, index) => (
                                            <div key={index} className="mb-2 mr-4">
                                                <p  className="text-white border px-2 md:py-3 bg-gradient-to-r from-wall via-head to-wall rounded-md" style={{ display: 'inline-block' }}>
                                                    {trainClass.className}: {trainClass.price}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AvailableTrains;