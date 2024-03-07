
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ name, desc, cost, imageSrc }) {
  const navigate = useNavigate();
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsSmallDevice(mediaQuery.matches);

    const handleResize = () => {
      setIsSmallDevice(mediaQuery.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  function handleBooking() {
    navigate('/booking');
    window.scrollTo(0, 0);
  }

  function toggleDescription() {
    setShowFullDesc(!showFullDesc);
  }

  return (
    <div className="flex justify-center content-center">
      <div className={`flex w-[90%] p-4 mb-4 rounded-md `}>
        <div className="w-1/2 mr-4 flex justify-center items-center">
          <div className="flex justify-center content-center items-center">
            <img src={imageSrc} alt={name} className="w-[500px] h-38 w rounded-sm" />
          </div>
        </div>

        <div className="w-1/2 pr-2">
          <h2 className="text-xl text-paras font-serif font-semibold mb-2">{name}</h2>
          <p className="text-gray-300 md:text-lg text-xs mb-4">
            {desc.length > 70 && !showFullDesc && isSmallDevice ? `${desc.slice(0, 70)}...` : desc}
            {desc.length > 70 && isSmallDevice && (
              <button onClick={toggleDescription} className="text-[#872341] underline ml-2 focus:outline-none">
                {showFullDesc ? 'Show less' : 'Show more'}
              </button>
            )}
          </p>
          <p className="text-gray-300 md:text-lg text-xs mb-4">Estimated Cost of travel: {cost}</p>
          <button onClick={handleBooking} className="bg-[#872341] hover:bg-[#541a2c]  text-white py-2 px-4 rounded-md">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
