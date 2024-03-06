// import React, { useState } from 'react';
// import Booking from '../Booking';
// import TrainForm from './TrainForm';
// import trainData from './TrainsData';
// import AvailableTrains from './AvailableTrains';


// function TrainBooking() {

//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (results) => {
//       setSearchResults(results);
//   };
//   return (
//     <div>

//       <Booking />

//       <div className='flex justify-center'>
//         <TrainForm trainData={trainData} onSearch={handleSearch} />
//       </div>
//       <div className='flex justify-center'>
//         <AvailableTrains trains={searchResults.length > 0 ? searchResults : trainData} />
//       </div></div>
//   )
// }

// export default TrainBooking

















import React, { useState } from 'react';
import Booking from '../Booking';
import TrainForm from './TrainForm';
import trainData from './TrainsData';
import AvailableTrains from './AvailableTrains';

function TrainBooking() {
  const [searchResults, setSearchResults] = useState([]);
  const [formUsed, setFormUsed] = useState(false);

  const handleSearch = (results) => {
    setSearchResults(results);
    setFormUsed(true);
  };

  // Check if there are search results, if not, show default trains
  const displayTrains = searchResults.length > 0 ? searchResults : trainData;

  // Check if there are no matching trains to display appropriate message
  const noMatchingTrains = searchResults.length === 0 && formUsed;

  return (
    <div>
      <Booking />
      <div className='flex justify-center'>
        <TrainForm trainData={trainData} onSearch={handleSearch} />
      </div>
      <div className='flex justify-center'>
        {noMatchingTrains ? (
          <p className='mt-10 mb-10 font-serif text-white text-xl'> We are Sorry !!  No Trains available for the selected criteria.</p>
        ) : (
          <AvailableTrains trains={displayTrains} />
        )}
      </div>
    </div>
  );
}

export default TrainBooking;
