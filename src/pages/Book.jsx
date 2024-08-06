import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import tourPackages from "../tourPackages.json";
import congratsPic from "../assets/imgs/congrats.jpeg";

function Book() {
    const { selectedPackage } = useContext(ApiContext);
    const [inputType, setInputType] = useState('text'); // State to control input type of date
    const [booked, setBooked] = useState(false)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        departureDate: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
       
        setBooked(true)
        scrollToTop();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    if (!selectedPackage) {
        return (
            <div className="flex flex-col items-center py-10 mt-[100px] w-[80%] mx-auto">
                <h2 className="text-xl font-bold text-red-600">No package selected.</h2>
                <p className="mt-4 text-gray-700">Please go back and select a package to book.</p>
            </div>
        );
    }

    const destinationPackage = tourPackages.find(pkg => pkg.id === selectedPackage);

    if (!destinationPackage) {
        return <div className="mt-150px">Package not found</div>;
    }

    return (
        <>
        {
            booked? 
            <>
             <h1 className=" mt-[100px] congraMsg text-[20px]  531:text-[40px] font-bold font-Cursive p-10 w-full">🎉 Congratulations! 🎉</h1>

            <div className="congraSection flex flex-col 785:flex-row  w-[90%] mx-auto px-10 justify-center ">
              
               <div className="flex flex-col w-[70vw] gap-5 order-2 785:order-1">
                <h1 className="531:text-[20px] 992:text-[30px] font-bold font-montserrat">You have successfully booked your trip. </h1>
                <p className="text-[#FF7F50]  text-[16px] font-montserrat font-bold 992:text-[20px]">
                Thank you for letting us be a part of your journey. We can’t wait to see all the amazing experiences that await you.
                 </p>
                <div className="grid grid-cols-1 font-montserrat gap-2 ">
                    <p>First Name : {formData.firstName}</p>
                    <p>Last Name : {formData.lastName}</p>
                    <p>Email : {formData.email}</p>
                    <p>Departure : {formData.departureDate}</p>
                    <p>Package:{destinationPackage.name} </p>
                  </div>
               </div>
               <div className="order-1 785:order-2">
                 <img src={congratsPic}
                      alt="People celebrating"
                      className="785:h-[400px]"/>
               </div>
            </div></>:
        <div className="flex flex-col items-center py-10 mt-[60px] w-full mx-auto">
            <div className="bookPic w-full relative flex items-center justify-center 785:h-[300px]">
                <div className="overlay absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 flex items-center justify-center">
                    <h1 className="text-[18px] 785:text-[40px] font-montserrat text-white drop-shadow-lg p-5 opacity-100">
                        Pack your bags and travel with us!
                    </h1>
                </div>
            </div>
            <div className="flex flex-col mt-[50px] 785:w-[80vw] p-5">
                <h1 className="785:text-[20px] font-montserrat font-bold text-[#264F0B]">{destinationPackage.name}</h1>
                <h2 className="text-[14px] 785:text-18px] capitalize font-mono">{destinationPackage.days}, {destinationPackage.price}</h2>
               
               {/* conditional render, if a person books successfuly a confirmation will be displayed else a form will be displayed */}
                
                      <form onSubmit={handleSubmit} className="flex flex-col mt-5 font-outfit p-5 gap-5 bg-white 785:w-[80%]">
                      <div className="grid 785:grid-cols-2 gap-10 items-center justify-center">
                              <input
                                  type="text"
                                  value={formData.firstName}
                                  placeholder="First Name"
                                  name="firstName"
                                  onChange={handleChange}
                                  required
                                  className="text-black border border-white border-b-[#264F0B] px-2 py-0 mt-1 rounded focus:outline-none focus:border-b-2 placeholder:text-[#002] "
                              />
                      
                              <input
                                  type="text"
                                  value={formData.lastName}
                                  name="lastName"
                                  placeholder="Last Name"
                                  onChange={handleChange}
                                  required
                                  className="text-black border border-white border-b-[#264F0B] px-2 py-0 mt-1 rounded focus:outline-none focus:border-b-2 placeholder:text-[#002] "
                              />
                          
                              <input
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="text-black border border-white border-b-[#264F0B] px-2 py-0 mt-1 rounded focus:outline-none focus:border-b-2 placeholder:text-[#002] "
                              />
                      
                              <input
                                  type={inputType}
                                  placeholder="Departure Date"
                                  name="departureDate"
                                  value={formData.departureDate}
                                  onChange={handleChange}
                                  required
                                  onFocus={() => setInputType('date')} // Set input type to 'date' on focus
                                  onBlur={() => setInputType('text')} // Set input type back to 'text' on blur
                                  className="text-black border border-white border-b-[#264F0B] px-2 py-0 mt-1 rounded focus:outline-none focus:border-b-2 placeholder:text-[#002] "
                              />
                          </div>
                      <button
                          type="submit"
                          className="bg-[#FC6C22] text-white p-2 rounded hover:scale-105 transition duration-200 w-full 785:w-[50%] mt-5"
                      >
                          Book
                      </button>
                  </form>
                
                      
            </div>
        </div>
}</>)};


export default Book;
