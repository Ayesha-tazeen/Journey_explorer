// import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from '../NavBar';

// function Booking() {
//   return (
//     <div className='text-white'>
//       <NavBar />
//       <div className="flex justify-center items-center h-full">
//         <div className="w-[75%] flex flex-col items-center">
//           <div className='h-20 w-full bg-wall'></div>

//           <div className='flex justify-center space-x-20'> {/* Increased space between images */}
//             <Link to="/booking/train">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3KFZtWCVXQbJGiFf1syNeG-0KkTqk_reDg&usqp=CAU" alt="Train" className="w-56 h-56 rounded-full border" />
//               <p className=' mt-3 text-center font-serif'>Book train</p>
//             </Link>
//             <Link to="/booking/flight">
//               <img src="https://www.stockillustrations.com/Image.aspx?src=medres&name=WIRY0057.jpg&sz=572&fitw=y" alt="Flight" className="w-56 h-56 rounded-full border" />
//               <p className='   mt-3 text-center font-serif'>Book Flight </p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;






// Booking.js
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import './Booking.css'; // Import CSS file for animations

function Booking() {
  return (
    <div className='text-white'>
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="w-[75%] flex flex-col items-center">
          <div className='h-36 w-full bg-wall'></div>

          <div className='flex justify-center space-x-20'>
            <Link to="/booking/train" className="slide-in-left"> {/* Add class for animation */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3KFZtWCVXQbJGiFf1syNeG-0KkTqk_reDg&usqp=CAU" alt="Train" className="w-56 md:h-56 rounded-full border" />
              <p className='mt-3 text-center font-serif'>Book Train</p>
            </Link>
            <Link to="/booking/flight" className="slide-in-right "> {/* Add class for animation */}
              <img src="https://www.stockillustrations.com/Image.aspx?src=medres&name=WIRY0057.jpg&sz=572&fitw=y" alt="Flight" className="w-56 md:h-56 rounded-full border" />
              <p className='mt-3 text-center font-serif'>Book Flight</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking; 
