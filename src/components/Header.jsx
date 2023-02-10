import './header.css'
import Logo from '../images/logo.png'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ToggleButton from './ToggleButton';

const Header = () => {

    return <header className="header">
        <a href="#">
            <img src={Logo} alt="logo" className='logo' />
        </a>
        <div className='header-icons'>
            <span className='header-icon'>
                <NotificationsNoneOutlinedIcon />
            </span>
            <span className='header-icon'>
                <SettingsOutlinedIcon />
            </span>
            <span className='header-icon'>
                <LogoutOutlinedIcon />
            </span>
            <ToggleButton />
        </div>
    </header>
}

export default Header