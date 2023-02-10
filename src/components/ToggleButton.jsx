import './toggleButton.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const ToggleButton = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
      <span className='toggleIcon toggleIcon-light'>
        <LightModeIcon />
      </span>
      <span className='toggleIcon toggleIcon-dark'>
        <DarkModeIcon />
      </span>
    </label>
  );
};

export default ToggleButton;
