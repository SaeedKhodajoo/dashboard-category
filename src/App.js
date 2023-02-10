import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      <Header />
      <Sidebar toggleSidebar={toggleSidebar} />
      <span className={`sidebarSlider ${toggleSidebar && 'sidebarSliderToggled'}`} onClick={()=>setToggleSidebar(prevState => !prevState)}>
        <LogoutOutlinedIcon />
      </span>
      <Main toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
