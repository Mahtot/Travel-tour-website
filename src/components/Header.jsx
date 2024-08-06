import React, { useState, useEffect } from "react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { NavLink,  useLocation } from "react-router-dom";
import Select from "react-select";
import { RiCloseLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import logo from "../assets/imgs/logo.png";
import { CiSearch } from "react-icons/ci";
import "../assets/css/style.css";

function Header() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tour Packages", path: "/tour-packages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Account", path: "/account" },
  ];

  const options = [
    { value: "Addis Ababa", label: "Addis Ababa" },
    { value: "Mekelle", label: "Mekelle" },
    { value: "Tirgay", label: "Dire Dawa" },
    { value: "Adama", label: "Adama" },
    { value: "Bahir Dar", label: "Bahir Dar" },
    { value: "Gondar", label: "Gondar" },
    { value: "Hawassa", label: "Hawassa" },
  ];

  const [menuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setCity] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

// To check is tour-packages is active 
  function isTourPackagesActive(pathname) {
    return pathname.startsWith('/tour-packages') || pathname === '/view-details' || pathname === '/book-package';
  }

  
  // styles for react select
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isFocused, isSelected, isDisabled }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? '#264F0B'
            : isFocused
              ? '#E3DFDE'
              : undefined,
        color: isDisabled
          ? 'white'
          : isSelected
            ? 'white'
            : 'black',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? '#264F0B'
              : '#264F0B'
            : undefined,
        },
      };
    },
  };

  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleCityChange = (option) => {
    setCity(option.value);
  };

  // outside click will close the sidebar in mobile screens
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navigator')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Social Links Section */}
      <div
        className={`bg-[#264F0B] text-white transition-transform duration-300 ease-in-out ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="container mx-auto flex flex-row justify-end gap-3 280:gap-10 p-5 header-link">
          <a href="#" title="Twitter"><FaXTwitter /></a>
          <a href="#" title="Instagram"><FaInstagram /></a>
          <a href="#" title="Facebook"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/mahtot-gher-57860a274/" title="Linkedin"><FaLinkedinIn /></a>
          <a href="https://github.com/Mahtot" title="Github"><FaGithub /></a>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex flex-row fixed gap-2 top-0 w-[100%] mx-auto justify-items-end items-center p-5 z-[1000] bg-white text-montserrat font-outfit  border-b-2 transition-transform duration-300 ease-in-out ${
          isScrolled ? 'translate-y-0 shadow-lg' : 'translate-y-[55px]'
        }`}
      >
        <div className="w-[100px] 344:w-[120px] 785:w-[250px] flex 785:top-[-10px] relative 785:mr-10">
          <img src={logo} alt="Logo" className="" />
        </div>
        <div className="w-[30vw] flex-1 p-3">
          <Select
            options={options}
            styles={colourStyles}
            value={selectedCity}
            onChange={handleCityChange}
            className="text-[14px] sm:text-[16px]"
            placeholder={<div className="flex items-center gap-2"><CiSearch /> Destination</div>}
          />
        </div>

        <div className={`1097:hidden ${menuOpen ? 'hidden' : 'block'}`} onClick={handleMenu}>
          <SlMenu size={'1.5rem'} className="text-[#264F0B] cursor-pointer" />
        </div>

        <div
          className={` navigator fixed 1097:relative flex flex-col 1097:flex-row gap-5 bottom-0 top-0 p-10 1097:p-0 bg-slate-50 627:w-[40vw] h-screen overflow-y-auto 1097:h-auto 1097:w-auto 1097:bg-transparent items-center right-0 z-[1000] ${menuOpen ? 'block' : 'hidden'} 1097:inline-flex`}
        >
          <div className="1097:hidden p-3 self-start cursor-pointer" onClick={handleMenu}>
            <RiCloseLine className="text-[#264F0B] hover:scale-110 hover:transition-all fixed top-4 right-[20px]" size={'2rem'} />
          </div>
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              onClick={()=>setIsMenuOpen(false)}
              className={({ isActive }) =>
                index==2?
                isTourPackagesActive(location.pathname) ? 'text-[#FC6C22]' : 'text-black'
                :  isActive ? 'text-[#FC6C22]' : 'text-black'

              }
            >
              <div className="hover:text-[#FC6C22] hover:transition-all p-2 text-left w-[200px] 1097:w-auto">
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;



  // {
  //   "id": 7,
  //   "name": "Simien Mountains Trek",
  //   "description": "Enjoy breathtaking hikes in the stunning Simien Mountains.",
  //   "imgUrl": "path_to_image_4.jpg"
  // },
  