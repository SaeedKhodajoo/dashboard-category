import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useState } from "react";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      <Header />
      <Sidebar toggleSidebar={toggleSidebar} />
      <span className={`sidebarSlider ${toggleSidebar && 'sidebarSliderToggled'}`} onClick={()=>setToggleSidebar(prevState => !prevState)}>
        <LogoutOutlinedIcon />
      </span>
    </div>
  );
}

export default App;
