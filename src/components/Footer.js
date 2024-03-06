// Footer.js

import React, { useEffect, useState } from 'react';
import { Facebook } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Twitter } from '@mui/icons-material';


function Footer() {
    const [isContentShort, setIsContentShort] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.offsetHeight;
            const footer = document.querySelector('footer');

            if (bodyHeight < windowHeight) {
                footer.classList.add('fixed-bottom');
                setIsContentShort(true);
            } else {
                footer.classList.remove('fixed-bottom');
                setIsContentShort(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`bg-color-wall text-white text-sm text-center py-4 w-full ${isContentShort ? 'fixed-bottom' : ''}`}>
            <div className="flex justify-center">
                <Facebook className="text-2xl mx-2" />
                <Twitter className="text-2xl mx-2" />
                <InstagramIcon className="text-2xl mx-2" />
                {/* Add more Material-UI icons as needed */}
            </div>
            <p className="mt-2">All rights reserved &copy; Journey Explorer {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;

