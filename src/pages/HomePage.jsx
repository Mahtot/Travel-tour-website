import CarouselPic from "../components/CarouselPic"
import "../assets/css/style.css"
import carImg from "../assets/imgs/aboutus.jpeg"
import ImageBox from "../components/ImageBox"
import { useState, useEffect } from "react"
import coffeeImg from "../assets/imgs/coffee.jpg";
import ethVideo from "/eth.mp4";
// import ethVideo from "../assets/video/ethiopia-cinematic-travel-film-travelxp.mp4";

import ReactPlayer from "react-player"
import cbeLogo from "../assets/imgs/cbe Logo.svg"
import hiltonLogo from "../assets/imgs/Hilton Logo.svg"
import fhLogo from "../assets/imgs/fhLogo.svg"
import telLogo from "../assets/imgs/telLogo.svg"
import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"

function HomePage() {
  const idOfBestPlacesToVisit = [1,4,9,10,7,13]
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });


  // To get the width and height of the screen
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="flex flex-col relative top-[120px] gap-10 ">
      <div>
        <CarouselPic/>
      
      </div>

      {/* Company Description Section */}
      <div className="flex flex-col items-center py-10 mt-[50px] w-[80%] mx-auto">
        <h1 className="text-2xl 992:text-[40px]  mb-5 font-outfit">Who We Are</h1>
        <div className="flex flex-row gap-10 justify-center p-6">
          <p className="text-lg text-justify 785:w-[50%] font-outfit flex items-center">
            We are a leading travel and tour company dedicated to providing exceptional experiences in Ethiopia. Our team of expert guides and travel planners are committed to helping you explore the beauty and culture of Ethiopia in the most immersive and enjoyable way possible.
            <br />
            Our mission is to make your journey memorable by offering personalized tour packages that cater to your interests and needs.
          </p>
          <div className="w-[50%] hidden 785:flex items-center ">
            <img src={carImg} alt="Image of car" className="h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Places to visit in Ethiopia section */}
      <div className="flex flex-col items-center py-10 mt-[50px] w-[80%] mx-auto">
        <h1 className="self-start text-2xl 992:text-[40px] font-outfit ">Best Places to Visit In Ethiopia </h1>
        <div className="grid grid-cols-2 785:grid-cols-3 gap-6">
          {idOfBestPlacesToVisit.map((item) => (
            <div key={item} className="flex justify-center">
              <ImageBox id={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Ethiopia an coffee */}
      <div className="flex flex-col items-center py-10 mt-[50px] w-[80%] mx-auto">
        <h1 className="text-2xl 992:text-[40px]  mb-5 font-outfit self-start">Ethiopia The Birthplace of Coffee</h1>
        <div className="flex flex-row gap-10 justify-center p-6">
          <p className="text-lg text-justify 785:w-[50%] font-outfit flex items-center">
              The coffee plant originates in Kaffa Ethiopia. According to legend, the 9th-century goat herder Kaldi in the region of Kaffa discovered the coffee plant after noticing the energizing effect the plant had on his flock, but the story did not appear in writing until 1671. After originating in Ethiopia, coffee was consumed as a beverage in Yemen, possibly around the 6th century, even though the origin of coffee drinking is obscure.
              Ethiopia is renowned as the birthplace of coffee, where the rich aroma and deep flavors of this beloved beverage have been cherished for centuries.

            </p>
          <div className="w-[50%] hidden 785:flex items-center ">
            <img src={coffeeImg} alt="Image of car" className="h-full object-cover" />
          </div>
        </div>
       <div>
       </div></div>

      {/* A section for Video of Ethiopia */}
      <div className='player-wrapper flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-lg shadow-lg overflow-x-hidden'>
            <h1 className='text-[18px] 992:text-4xl font-bold text-white mb-5 text-center font-montserrat'>
                Ethiopia in Three Minutes
            </h1>
            <ReactPlayer
                className='react-player rounded-lg shadow-md overflow-x-hidden'
                url={ethVideo}
                width={screenSize.width>700? '70%': '120%'}
                height='80%'
                playing={false}
                controls={true}
            />

            <p className="caption mt-4 text-center text-white">
                Experience the rich culture, stunning landscapes, and vibrant history of Ethiopia.
            </p>
        </div>
        
        {/* Call to action section */}
        <div className="cta-section bg-[#264F0B] text-white py-10">
          <div className="container mx-auto text-center">
              <h2 className="text-[18px] 785:text-4xl font-bold mb-4">Ready to Explore Ethiopia?</h2>
              <p className="785:text-xl mb-6">Join us for an unforgettable journey and experience the beauty and culture of Ethiopia.</p>
              <NavLink to="/tour-packages" className="bg-white text-green-500 font-semibold py-3 px-8 rounded hover:bg-gray-200 transition duration-300">
                  Explore Tour Packages
              </NavLink>
          </div>
        </div>

        {/* Our partners section */}
        <div className="flex flex-col mt-[130px] justify-center items-center w-full">
          <h2 className="text-[18px] 785:text-4xl font-bold mb-[50px] font-montserrat text-center">
              Our Partners
          </h2>
         <div className="partners grid grid-cols-4  justify-center items-center w-[95vw] mx-auto overflow-x-auto overflow-y-hidden space-x-[30px]">
         <a href="https://www.hilton.com/en/" className="flex-shrink-0">
                <img src={hiltonLogo} alt="Logo of Hilton Hotel" className="h-auto max-h-20 w-auto" />
            </a>
            <a href="https://www.flintstonehomes.com/" className="flex-shrink-0">
                <img src={fhLogo} alt="Logo of Flintstone Homes" className="h-auto max-h-20 w-auto" />
            </a>
            <a href="https://combanketh.et/" className="flex-shrink-0">
                <img src={cbeLogo} alt="Logo of Commercial Bank of Ethiopia" className="h-auto max-h-20 w-auto" />
            </a>
            <a href="https://www.ethiotelecom.et/" className="flex-shrink-0">
                <img src={telLogo} alt="Logo of Ethiopia Telecom" className="h-auto max-h-20 w-auto" />
            </a>
    </div>
</div>



   {/* Footer section */}
   <Footer/>
    </div>
  )
}
export default HomePage