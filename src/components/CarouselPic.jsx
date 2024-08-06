import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import styled from "styled-components";
import pic1 from "../assets/imgs/city.jpeg"
import pic2 from "../assets/imgs/flower.jpeg"
import pic3 from "../assets/imgs/night.jpeg"
import pic4 from "../assets/imgs/lalibela.jpeg"
import { NavLink } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

 const items=[
  {id: 1, url: pic1},
  {id: 2, url: pic2},
  {id: 3, url: pic3},
  {id: 4, url: pic4},
]

function CarouselPic() {
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  

 return (
    <>
      <div className="flex items-center justify-center gap-10 flex-col 785:flex-row ">
        <Carousel breakPoints={breakPoints} 
                   >
          {items.map((item) => (
          <div key={item.id} className="h-[300px] 475:h-[400px] 785:h-[500px] 785:w-[43vw] flex items-center  ">
            <img
              src={item.url}
              className=" w-[70vw] h-full shadow-2xl "
              alt="Ethiopian images"
            />
          </div>
        ))}

        </Carousel>
        <div className="flex flex-col 785:w-[60vw] text-justify p-10 self-start mt-[80px]">
        <h1 className="992:text-3xl font-bold font-montserrat mb-5 text-[24px] text-left">Discover the Magic of Ethiopia</h1>

          <p className="font-montserrat text-[18x] text-left 992:text-xl">
             Ready for an unforgettable journey? Discover Ethiopia’s stunning landscapes and rich history.
          </p>
          <NavLink to="/tour-packages" className="bg-[#264F0B] text-[white] mt-10 p-5 text-center text-[14px] 785:text-[16px] 992:text-[18px] hover:bg-white hover:text-[#264F0B] hover:border border-[#264F0B] hover:shadow-xl">
            Explore Our Tour Packages
          </NavLink>
        </div>
      </div>
    </>
  );
}


export default CarouselPic
