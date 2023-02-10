import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Main from "./components/Main";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      <Header />
      <Sidebar toggleSidebar={toggleSidebar} />
      <span className={`sidebarSlider ${toggleSidebar && 'sidebarSliderToggled'}`} onClick={()=>setToggleSidebar(prevState => !prevState)}>
        {toggleSidebar ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosOutlinedIcon />}
      </span>
      <Main toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
