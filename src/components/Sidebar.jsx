import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import './sidebar.css'

const Sidebar = ({toggleSidebar}) => {

  return (
    <>
      <div id="mySidebar" className={`sidebar ${toggleSidebar && 'sidebar-toggled'}`}>
        {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
          ×
        </a> */}
        <a href="#">
          <span>
            <LogoutOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> داشبورد</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <LogoutOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> پروفایل</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <LogoutOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> گفتگو ها</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <LogoutOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> ارسال دعوت نامه</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <LogoutOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}>صدور پیش فاکتور</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <LogoutOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> عضویت در کانتمو</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <LogoutOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> نمایش آثار</h3>
          </span>
        </a>

        {/* <span className="sidebarSlider">
        <LogoutOutlinedIcon />
        </span> */}
      
      </div>

      {/* <div id="main">
        <button class="openbtn" onclick="openNav()">
          ☰ Open Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>
          Click on the hamburger menu/bar icon to open the sidebar, and push
          this content to the right.
        </p>
      </div> */}
    </>
  );
};

export default Sidebar;
