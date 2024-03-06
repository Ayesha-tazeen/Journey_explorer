import React from 'react'
import { NavLink} from 'react-router-dom';
import "../index.css"

function NavBar() {
    
    return (
        <>
            <div className='flex items-center content-center  justify-center w-full absolute top-0 mt-4'>

                <nav className='bg-white py-3 md:pl-[50%] w-[90%] rounded-lg'>

                    <ul className='flex flex-row justify-between font-bold text-head   px-3'>

                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-gradient-to-br   text-xs md:text-[16px] from-wall to-head p-2 text-white rounded-md" : "hover:bg-gradient-to-br from-wall to-head p-2  text-xs md:text-[16px] hover:text-white rounded-md  ")} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/destinations"
                                className={({ isActive }) => (isActive ?  "bg-gradient-to-br text-xs md:text-[16px] from-wall to-head p-2 text-white rounded-md" : "hover:bg-gradient-to-br from-wall to-head p-2 text-xs md:text-[16px] hover:text-white rounded-md  ")}
                            >
                                Destinations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => (isActive ?  "bg-gradient-to-br text-xs md:text-[16px] from-wall to-head p-2 text-white rounded-md" : "hover:bg-gradient-to-br from-wall to-head p-2 text-xs md:text-[16px] hover:text-white rounded-md  ")} >About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/booking" className={({ isActive }) => (isActive ? "bg-gradient-to-br text-xs md:text-[16px] from-wall to-head p-2 text-white rounded-md" : "hover:bg-gradient-to-br from-wall to-head p-2 text-xs md:text-[16px] hover:text-white rounded-md ")}  >Book Now</NavLink>
                        </li>
                    </ul>  
                </nav>
            </div>
        </>
    )
}

export default NavBar








