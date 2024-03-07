import React from 'react';
import PlacesCard from './PlacesCard';
import places from "./Const"

function PopularPlaces() {
  
    return (
        <>
            <h1 className='text-head font-serif mb-3  md:text-4xl text-xl mt-3 text-center'>Popular Destinations</h1>
           {places.map(place => (
                <PlacesCard
                key={place.id}
                    id={place.id}
                    name={place.name}
                    desc={place.desc}
                    imageSrc={place.imageSrc}
                    cost={place.cost}
                />
            ))}
        </>
    );
}

export default PopularPlaces;
