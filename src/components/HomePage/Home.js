
import "../../index.css"
import NavBar from "../NavBar";
import PopularPlaces from "./PopluarPlaces"
import Footer from "../Footer"


function Home() {
    const handleDefaultHd = (e) => {
        e.preventDefault();
    };

    return (
        <div >
            <div className='main-div flex flex-col items-center justify-center relative'>
                <video id="my-video" className="w-[95%] h-[500px] mt-2 overflow-hidden object-cover relative" disablePictureInPicture autoPlay loop muted preload='auto' onContextMenu={handleDefaultHd}>
                    <source src="./beachvid.mp4" type="video/mp4"></source>
                </video>
                <div className="overlay">
                    <span className="text md:text-[60px] text-[30px] text-center border-none ">Journey Explorer</span>
                    <div className="text-center text-wall text-xs md:text-sm font-bold">Embark on your adventure</div>
                    {/* <div className="text-center"><SearchBar /></div> */}
                </div>
                <NavBar />
            </div>

            <div  > <PopularPlaces /></div>
            <Footer />
        </div>
    );

}

export default Home;
