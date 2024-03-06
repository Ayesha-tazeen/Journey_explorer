

import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlacesCard({ id, name, desc, imageSrc }) {
    const isEven = id % 2 === 0;
    const navigate = useNavigate();

    const handleClickTrain = () => {
        navigate('/booking/train');
        window.scrollTo(0, 0); // Scroll to the top of the page when navigating
    };

    const handleClickFlight = () => {
        navigate('/booking/flight');
        window.scrollTo(0, 0); // Scroll to the top of the page when navigating
    };

    return (
        <div className="flex justify-center content-center">
            <div className={`flex w-[90%] p-4 mb-4 rounded-md ${isEven ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 mr-4 flex justify-center items-center">
                    <div className="flex justify-center content-center items-center">
                        <img src={imageSrc} alt={name} className="w-[500px] h-38 w rounded-sm" />
                    </div>
                </div>

                <div className="w-1/2 pr-2">
                    <h2 className="text-xl text-semihead font-serif font-semibold mb-2">{name}</h2>
                    <p className="text-gray-300 md:text-lg text-xs mb-4">{desc}</p>
                    <button onClick={handleClickTrain} className="bg-[#872341] hover:bg-[#541a2c]  text-white md:py-2 md:text-[14px] px-1 py-1  text-xs md:px-4 rounded-md">Book Train</button>
                    <button onClick={handleClickFlight} className="bg-[#872341] hover:bg-[#541a2c]  ml-1 text-white md:py-2 md:text-[14px] px-1 py-1  text-xs md:px-4 rounded-md">Book Flight</button>
                </div>
            </div>
        </div>
    );
}

export default PlacesCard;
