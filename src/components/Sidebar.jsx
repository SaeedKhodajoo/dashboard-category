import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';


const Sidebar = ({toggleSidebar}) => {

  return (
    
      <div id="mySidebar" className={`sidebar ${toggleSidebar && 'sidebar-toggled'}`}>
        <a href="#">
          <span className={` ${toggleSidebar && 'link-toggled'}`}>
            <DashboardIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> داشبورد</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <AccountCircleOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> پروفایل</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <ChatBubbleOutlineOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> گفتگو ها</h3>
            {/* <span className='availableChats'>۳</span> */}
          </span>
        </a>
        <a href="#">
          <span>
            <ForwardToInboxOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> ارسال دعوت نامه</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <TextSnippetOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}>صدور پیش فاکتور</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <PersonOutlineOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> عضویت در کانتمو</h3>
          </span>
        </a>
        <a href="#">
          <span>
            <EmojiEventsOutlinedIcon />
            <h3 className={`sidebar-title ${toggleSidebar && 'sidebar-title-hidden'}`}> نمایش آثار</h3>
          </span>
        </a>

       
      </div>
    
  );
};

export default Sidebar;
