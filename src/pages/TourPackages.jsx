import { useContext, useState, useEffect } from "react";
import tourPackages from "../tourPackages.json";
import ImageBox from "../components/ImageBox";
import Footer from "../components/Footer";

function TourPackages() {
  return (
    <div className="flex flex-col w-full">
     <div className="flex flex-col items-center py-10 mt-[150px] w-[100%] mx-auto">
      <div className="grid grid-cols-2 785:grid-cols-3 gap-6">
        {tourPackages.map((item, index) => (
          <div key={index} className="flex justify-center">
            <ImageBox id={item.id} {...item} />
          </div>
        ))}
      </div>
    
    </div>
      <div>
          <Footer/>
      </div>
  </div>
  )
}
export default TourPackages