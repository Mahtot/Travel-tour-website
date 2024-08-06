import CarouselPic from "../components/CarouselPic"
import "../assets/css/style.css"
import carImg from "../assets/imgs/aboutus.jpeg"
import ImageBox from "../components/ImageBox"
import { useState } from "react"
import coffeeImg from "../assets/imgs/coffee.jpg";

function HomePage() {
  const idOfBestPlacesToVisit = [1,4,9,10,7,13]
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
              Ethiopia is renowned as the birthplace of coffee, where the rich aroma and deep flavors of this beloved beverage have been cherished for centuries. From the lush highlands of Kaffa to the bustling markets of Addis Ababa, coffee is more than just a drink in Ethiopia; it's a way of life. The traditional coffee ceremony, a symbol of hospitality and respect, invites you to experience the authentic taste and cultural significance of Ethiopian coffee. Join us in exploring this ancient land where every sip tells a story.

            </p>
          <div className="w-[50%] hidden 785:flex items-center ">
            <img src={coffeeImg} alt="Image of car" className="h-full object-cover" />
          </div>
        </div>
       <div>
       </div></div>

    </div>
  )
}
export default HomePage