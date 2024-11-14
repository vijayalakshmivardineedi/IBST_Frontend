import React from 'react';
import icon from '../assests/mybook.jpg'
import './header.css'
import { FaHome, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4 shadow-md fixed top-0 left-0 w-full z-40">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: 'black',
                    color: 'white',
                    height: '100px'
                }} className="container mx-auto flex items-center justify-between">

                <div className="flex items-center space-x-2 text-white">
                    <img src={icon} alt="Book" className="w-12 h-12"
                        style={{ height: '100px' }} />
                </div>

                <div className="flex items-center space-x-2 text-white">
                    <h1 style={{color: "#45a049"}}className="text-xl font-bold">The Library</h1>
                </div>

                <div style={{ justifyContent: 'space-between',marginRight: 10,}} >
                    <nav className="flex space-x-4 text-white">
                        <a href="/" style={{ color: 'white', marginRight: 20, fontSize: 35}} className="hover:underline"><FaHome /></a>
                        <a href="https://vijayalakshmi-vardineedi-portfolio.netlify.app/" style={{ color: 'white', marginRight: 15, fontSize: 30}} className="hover:underline"><FaPhoneAlt /></a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
