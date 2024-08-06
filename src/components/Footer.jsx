import logo from "../assets/imgs/logo.png";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { NavLink,  useLocation } from "react-router-dom";

function Footer() {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Tour Packages", path: "/tour-packages" },
        { name: "Contact", path: "/contact" },
        { name: "Account", path: "/account" },
      ];

      // To check if tour-packages is active 
  function isTourPackagesActive(pathname) {
    return pathname.startsWith('/tour-packages') || pathname === '/view-details' || pathname === '/book-package';
  }


  return (
    <div className="flex flex-col w-full font-montserrat mt-[100px] bg-slate-50 gap-2">
        <div className="flex  flex-col 627:flex-row justify-center items-center ">
        <div className="flex  flex-col 627:flex-row  justify-center items-center gap-7 p-10">
            <img src={logo}
                alt="Company logo"
                className="w-[70vw] 627:w-[200px] 627:h-[30px]"/>
            <div className=" hidden 627:flex-col 627:flex w-[40vw] justify-center items-center">
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
        <div className="flex 627:flex-col justify-center items-center gap-5">
            <a href="#" title="Twitter"><FaXTwitter /></a>
                <a href="#" title="Instagram"><FaInstagram /></a>
                <a href="#" title="Facebook"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/mahtot-gher-57860a274/" title="Linkedin"><FaLinkedinIn /></a>
                <a href="https://github.com/Mahtot" title="Github"><FaGithub /></a>
            
        </div>
        </div>
        <div className="p-10">
            <p>© 2024 All Rights Reserved.</p>
        </div>
    </div>
  )
}
export default Footer