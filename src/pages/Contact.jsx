import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
        alert("Message successfully sent! Thank you for reaching out.");
        setFormData({
          firstName: "",
          email: "",
          subject: "",
          message: ""
        });
     
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex flex-col">

    
    <div className="flex flex-col w-[80vw] max-w-2xl mx-auto justify-center items-center py-10 mt-[150px]">
      <h2 className="text-[18px] 531:text-4xl font-bold mb-6 font-montserrat">CONTACT US</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#264F0B]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#264F0B]"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#264F0B]"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#264F0B] h-32 resize-none"
        />
        <button
          type="submit"
          className="submit p-2 bg-[#264F0B] text-white rounded-md hover:scale-105 "
        >
          Send
        </button>
      </form>
      
    </div>
    <div>
        <Footer/>
      </div>
  </div>
  );
}
