
import React from 'react';
import NavBar from '../NavBar';
import CompanyOverview from './CompanyOverview';
import MissionAndValues from './MissionAndValues';
import History from './History';
import Team from './Team';
import ContactInformation from './ContactInformation';
import FrameCard from './FrameCard';
import Footer from '../Footer';

function About() {
    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <NavBar />
                <div className='text-white content-center justify-center items-center flex flex-col w-[90%]'>
                    <div className=' md:h-30  h-20 w-full bg-wall'></div>
                    <div className='min-w-4/5 mb-5 overflow-x-auto'>
                        <FrameCard />
                    </div>
                    <div>
                        <CompanyOverview />
                        <MissionAndValues />
                        <History />
                        <Team />
                        <ContactInformation />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default About;
