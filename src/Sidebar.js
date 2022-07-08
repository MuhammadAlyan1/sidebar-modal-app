import { useState } from "react";

import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaFolderOpen,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

// css
import "./Sidebar.css";

export function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="hamburgerBtn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <GiHamburgerMenu />
      </button>
      <nav className={isSidebarOpen ? "sidebar showSidebar" : "sidebar"}>
        <h1 className="main-heading">Alyan Developer</h1>
        <ul className="links">
          <li>
            <a href="#">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <RiTeamFill /> Team
            </a>
          </li>
          <li>
            <a href="#">
              <FaFolderOpen /> Projects
            </a>
          </li>
          <li>
            <a href="#">
              <FaCalendarAlt /> Calendar
            </a>
          </li>
          <li>
            <a href="#">
              <FaFileAlt /> Documents
            </a>
          </li>
        </ul>
        <ul className="socials">
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
