import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { useState } from "react";

const Sidebar = ({ toggleSidebar }) => {
  const [active, setActive] = useState(1);

  return (
    <div
      id="mySidebar"
      className={`sidebar ${toggleSidebar && "sidebar-toggled"}`}
    >
      <a
        href="#"
        onClick={() => setActive(1)}
        className={`${active === 1 && "active-link"}`}
      >
        <span>
          <DashboardIcon />
          <h3
            className={`sidebar-title ${
              toggleSidebar && "sidebar-title-hidden"
            }`}
          >
            {" "}
            داشبورد
          </h3>
        </span>
      </a>
      <a
        href="#"
        onClick={() => setActive(2)}
        className={`${active === 2 && "active-link"}`}
      >
        <span >
          <AccountCircleOutlinedIcon />
          <h3
            className={`sidebar-title ${
              toggleSidebar && "sidebar-title-hidden"
            }`}
          >
            {" "}
            پروفایل
          </h3>
        </span>
      </a>
      <a
        href="#"
        onClick={() => setActive(3)}
        className={`${active === 3 && "active-link"}`}
      >
        <span >
          <ChatBubbleOutlineOutlinedIcon />
          <h3
            className={`sidebar-title ${
              toggleSidebar && "sidebar-title-hidden"
            }`}
          >
            {" "}
            گفتگو ها
          </h3>
        </span>
      </a>
      <a
        href="#"
        onClick={() => setActive(4)}
        className={`${active === 4 && "active-link"}`}
      >
        <span>
          <ForwardToInboxOutlinedIcon />
          <h3
            className={`sidebar-title ${
              toggleSidebar && "sidebar-title-hidden"
            }`}
          >
            {" "}
            ارسال دعوت نامه
          </h3>
        </span>
      </a>
      <a
        href="#"
        onClick={() => setActive(5)}
        className={`${active === 5 && "active-link"}`}
      >
        <span>
          <TextSnippetOutlinedIcon />
          <h3
            className={`sidebar-title ${
              toggleSidebar && "sidebar-title-hidden"
            }`}
          >
            صدور پیش فاکتور
          </h3>
        </span>
      </a>
      <a
        href="#"
        onClick={() => setActive(6)}
        className={`${active === 6 && "active-link"}`}
      >
        <span>
          <PersonOutlineOutlinedIcon />
          <h3
            className={`sidebar-title ${
              toggleSidebar && "sidebar-title-hidden"
            }`}
          >
            {" "}
            عضویت در کانتمو
          </h3>
        </span>
      </a>
      <a
        href="#"
        onClick={() => setActive(7)}
        className={`${active === 7 && "active-link"}`}
      >
        <span>
          <EmojiEventsOutlinedIcon />
          <h3
            className={`sidebar-title ${
              toggleSidebar && "sidebar-title-hidden"
            }`}
          >
            {" "}
            نمایش آثار
          </h3>
        </span>
      </a>

      <span
        className={`availableChats ${
          toggleSidebar && "availableChats-toggled"
        }`}
      >
        ۳
      </span>
    </div>
  );
};

export default Sidebar;
