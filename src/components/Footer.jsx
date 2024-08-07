import logo from "../assets/imgs/logo.png";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

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
        <footer className="flex flex-col w-full font-montserrat mt-[100px] bg-[#264F0B] p-6 text-white text-[13px] 531:text-[16px]">
            <div className="flex flex-col items-center gap-4">
                <img src={logo} alt="Logo" className="h-12" />
                <div className="flex gap-5 text-2xl">
                    <a href="#" title="Twitter" className="hover:text-gray-300"><FaXTwitter /></a>
                    <a href="#" title="Instagram" className="hover:text-gray-300"><FaInstagram /></a>
                    <a href="#" title="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
                    <a href="https://www.linkedin.com/in/mahtot-gher-57860a274/" title="LinkedIn" className="hover:text-gray-300"><FaLinkedinIn /></a>
                    <a href="https://github.com/Mahtot" title="GitHub" className="hover:text-gray-300"><FaGithub /></a>
                </div>
            </div>
            <nav className="flex justify-center mt-4">
                {menuItems.map(item => (
                    <NavLink key={item.name} to={item.path} className="mx-3 hover:text-gray-300">
                        {item.name}
                    </NavLink>
                ))}
            </nav>
            <div className="text-center mt-6">
                <p>© 2024 All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
