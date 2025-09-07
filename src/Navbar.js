// Removed react-router-dom imports
import HomeIcon from "./assets/icons/home-svgrepo-com.svg";
import ProfileIcon from "./assets/icons/profile-round-1346-svgrepo-com.svg";
import FolderIcon from "./assets/icons/folder-svgrepo-com.svg";
import ContactIcon from "./assets/icons/contacts-svgrepo-com.svg";
import ProfilePage from "./Profile";

const Navbar = () => (
  <div className="min-h-screen bg-black flex">
    <nav className="w-48 text-white flex flex-col justify-center items-center py-8 px-4 fixed left-0 top-0 h-full z-10 bg-black">
      <a
        href="#home"
        className="mb-6 text-lg flex items-center group icon-padding"
      >
        <img src={HomeIcon} alt="Home" className="w-10 h-10 mr-2" />
        <span className="bg-blue-400 text-white rounded px-2 py-1 ml-0 max-w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap">
          Home
        </span>
      </a>

      <a
        href="#profile"
        className="mb-6 text-lg flex items-center group icon-padding"
      >
        <img src={ProfileIcon} alt="Profile" className="w-8 h-8 mr-2" />
        <span className="bg-blue-400 text-white rounded px-2 py-1 ml-0 max-w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap">
          Profile
        </span>
      </a>

      <a
        href="#projects"
        className="mb-6 text-lg flex items-center group icon-padding"
      >
        <img src={FolderIcon} alt="Projects" className="w-10 h-10 mr-2" />
        <span className="bg-blue-400 text-white rounded px-2 py-1 ml-0 max-w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap">
          Projects
        </span>
      </a>

      <a
        href="#contact"
        className="mb-6 text-lg flex items-center group icon-padding"
      >
        <img src={ContactIcon} alt="Contact" className="w-10 h-10 mr-2" />
        <span className="bg-blue-400 text-white rounded px-2 py-1 ml-0 max-w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap">
          Contact
        </span>
      </a>
    </nav>
  </div>
);

export default Navbar;
