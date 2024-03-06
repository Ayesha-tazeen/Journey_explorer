import React, { useState } from 'react';

function TrainForm({ trainData, onSearch }) {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Filter available trains based on user input
        const filteredTrains = trainData.filter(train => {

            const trainOrigin = train.origin.toLowerCase();
            const trainDestination = train.destination.toLowerCase();
            const inputOrigin = origin.toLowerCase();
            const inputDestination = destination.toLowerCase();

            // Check if both origin and destination match or contain the input values
            return (trainOrigin.includes(inputOrigin) || trainOrigin === inputOrigin) &&
                (trainDestination.includes(inputDestination) || trainDestination === inputDestination);
        });
        // Pass filtered trains to parent component for rendering
        onSearch(filteredTrains);



    };

    return (
        <div className="flex flex-col items-center justify-center pb-5 rounded-lg w-[90%] md:w-[60%] mt-5 bg-gradient-to-r from-wall via-head to-wall border-2">
            <h2 className="md:text-3xl text-white font-semibold mt-4 text-xl font-serif mb-8">Train Booking Form</h2>
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
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Agra">Agra</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Kalka">Kalka</option>
                        <option value="Shimla">Shimla</option>
                        <option value="New Jalpaiguri">New Jalpaiguri</option>
                        <option value="Darjeeling">Darjeeling</option>
                        <option value="Churchgate">Churchgate</option>
                        <option value="Virar">Virar</option>


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
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Agra">Agra</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Kalka">Kalka</option>
                        <option value="Shimla">Shimla</option>
                        <option value="New Jalpaiguri">New Jalpaiguri</option>
                        <option value="Darjeeling">Darjeeling</option>
                        <option value="Churchgate">Churchgate</option>
                        <option value="Virar">Virar</option>


                    </select>
                </div>
                <button type="submit" className="bg-wall hover:bg-[#421b27] text-white py-2 px-4 rounded-md">
                    Search Trains
                </button>

            </form>
        </div>
    );
}

export default TrainForm;
