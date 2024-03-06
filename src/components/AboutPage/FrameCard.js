import React from 'react'
import '../../index.css'

const pictures = [
    {
        id: 1,
        image: "https://hips.hearstapps.com/hmg-prod/images/long-boat-docked-on-beach-in-krabi-thailand-summers-royalty-free-image-1622044679.jpg?crop=1.00xw:0.752xh;0,0.219xh&resize=1200:*"
    },
    {
        id: 2,
        image: "https://blog.thomascook.in/wp-content/uploads/2017/01/Four-seasons-Bora-Bora-yexplore.travel-1024x768.jpg"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrbpbVOqVQH9ps3IHBF1_DA7nqIrcnZMIEA&usqp=CAU"
    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAqRKxkGPH4OOe7bTH-PNVtj0fywiFbvF8A&usqp=CAU"
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWI5BJixsT5CwlMtalRuEFE2cBMhfj6pnmCQ&usqp=CAU"
    },
    {
        id: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kdIwFlfGEcpA-0YOJi9DS0fHyh0KZJxV9g&usqp=CAU"
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEk_j2DyJ_wDN1UIiBuaBCfeiSIe9LXYTpw&usqp=CAU"
    },
    {
        id: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfo6vKaJDDqzNtZ3QI04MCH2tXq5mYqx_dg&usqp=CAU"
    },

    {
        id: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAqRKxkGPH4OOe7bTH-PNVtj0fywiFbvF8A&usqp=CAU"
    },


]




function FrameCard() {
    return (
        


        <div className="flex overflow-x-scroll hide-scrollbar">
            {pictures.map((pic, index) => (
                <img key={index} className="flex-none m-1 w-36 h-24 md:w-64 md:h-52" src={pic.image} alt={` photos${index + 1}`} />
            ))}
        </div>
    );
}

export default FrameCard;