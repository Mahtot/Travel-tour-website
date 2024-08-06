import { ApiContext } from "../context/ApiContext";
import { useContext, useState, useEffect } from "react";
import tourPackages from "../tourPackages.json";
import { IoMdCheckmarkCircle } from "react-icons/io";
import includedInPackage from "../data";
import Carousel from "react-elastic-carousel";
import ImageBox from "../components/ImageBox";
import { useNavigate } from "react-router-dom";

useNavigate
function Detail() {
  const { selectedPackage } = useContext(ApiContext);
  const [imgUrl, setImgUrl] = useState();
  const navigateTo = useNavigate();
  
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];

  const packageDetails = tourPackages.find(pkg => pkg.id === selectedPackage);

  if (!packageDetails || selectedPackage=='') {
    return <div className="mt-150px">Package not found</div>;
  }

  // scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  // Function to get similar packages
  const getSimilarPackages = (packageDetails, count) => {
    return tourPackages
      .filter(pkg => pkg.id !== packageDetails.id && pkg.type === packageDetails.type) // based on the type of package
      .slice(0, count);
  };        

  const similarPackages = getSimilarPackages(packageDetails, 6);

  useEffect(() => {
    setImgUrl(packageDetails.imgUrl);
  }, [packageDetails.imgUrl]);

  return (
    <div className="flex flex-col items-center py-10 mt-[100px] px-6 994:w-[80%] mx-auto gap-10 justify-center">
      <div key={packageDetails.id} className="flex flex-col 992:flex-row gap-0 rounded shadow-2xl justify-center w-[100%] items-center">
        <div>
            <img src={imgUrl} alt="destination image" 
                                  className="992:h-[660px] p-2" />
        </div>      
        <div className="flex flex-col p-10 gap-6">
          <h1 className="font-montserrat font-bold text-[18px]">{packageDetails.name}</h1>
          <p className="font-outfit">{packageDetails.description}</p>
          <p className="font-montserrat text-[#264F0B]">{packageDetails.days + ",  Total amount " + packageDetails.price}</p>
          {includedInPackage.map((item, index) => (
            <div className="flex items-center gap-2 font-thin" key={index}>
              <IoMdCheckmarkCircle className="text-[#264F0B]" />
              <p>{item}</p>
            </div>
          ))}
          <button className="book bg-[#FC6C22] p-2 text-[white] hover:scale-105 hover:shadow-2xl rounded"
                  onClick={()=>{navigateTo('/book-package')
                                scrollToTop()
                  }}>
            Book Your Trip
          </button>
        </div>
      </div>

      {packageDetails.more &&
      <div className="flex gap-3 w-full items-center justify-center">
        <Carousel breakPoints={breakPoints}>
          {packageDetails.more && packageDetails.more.map((imgUrl) => (
            <div key={imgUrl} className="w-[60vw] 785:w-[30vw] 994:w-[250px] 1157:w-[280px] h-[200px]">
              <img src={imgUrl}
                   className="w-full h-full object-cover hover:scale-110 cursor-pointer"
                   alt="More images"
                   onClick={() => setImgUrl(imgUrl)} />
            </div>
          ))}
        </Carousel>
      </div>}

      {/* Explore similar packages section */}
      <div className="flex flex-col items-center py-10 mt-[150px] w-[100%] mx-auto">
        <h1 className="self-start text-2xl 992:text-[40px] font-outfit">Similar Packages</h1>
        <div className="grid grid-cols-2 785:grid-cols-3 gap-6">
          {similarPackages.map((item, index) => (
            <div key={index} className="flex justify-center">
              <ImageBox id={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;