import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/dashboard/Main";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      <Header />

      <Sidebar toggleSidebar={toggleSidebar} />
      <span className={`sidebarSlider ${toggleSidebar && 'sidebarSliderToggled'}`} onClick={()=>setToggleSidebar(prevState => !prevState)}>
        {toggleSidebar ? <ArrowBackIosNewIcon /> : <ArrowForwardIosOutlinedIcon />}
      </span>
      <Main toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
