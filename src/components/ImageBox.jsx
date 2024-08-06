import React, { useState, useEffect, useContext } from 'react';
import tourPackages from "../tourPackages.json";
import img from "../assets/imgs/sheger.jpeg"
import { useNavigate } from 'react-router-dom';
import {ApiContext} from "../context/ApiContext"

function ImageBox({ id }) {
  const [filteredPackages, setFilteredPackages] = useState([]);
  const navigateTo = useNavigate();
  const { setSelectedPackage } = useContext(ApiContext)

  useEffect(() => {
    // Filtering the packages based on the provided id
    const filtered = tourPackages.filter((pkg) => pkg.id === id);
    setFilteredPackages(filtered);
  }, [id]);

 // Function to scroll to the top of the page
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {filteredPackages.map((pkg) => (
        <div key={pkg.id} className="flex flex-col  items-center py-10 w-[80%] mx-auto font-montserrat  h-[340px] ">
           <div className="relative w-[36vw] 785:w-[25vw] flex-1  items-center justify-center  " >
              <img
                src={pkg.imgUrl}
                alt={pkg.name}
                className="h-[150px] 475:h-[190px] w-full object-cover rounded mb-3   hover:scale-110"
              />
           
            <h2 className="text-center text-[14px] 992:text-[18px] font-bold  text-[#264F0B] py-3">{pkg.name}</h2>
            <div className="flex items-center relative justify-center ">
                <button className='text-[13px] 475:text-[16px] rounded bg-[#FC6C22] text-white px-3 475:px-7 py-2 relative hover:translate-y-[-2px] shadow-2xl font-outfit'
                        onClick={()=>{
                            setSelectedPackage(id)
                            navigateTo('/view-details')
                            scrollToTop()}}>
                   View details
                </button>  
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageBox;
