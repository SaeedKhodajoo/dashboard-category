import './toggleButton.css'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const ToggleButton = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
      <span className='toggleIcon toggleIcon-light'>
        <LogoutOutlinedIcon />
      </span>
      <span className='toggleIcon toggleIcon-dark'>
        <LogoutOutlinedIcon />
      </span>
    </label>
  );
};

export default ToggleButton;
