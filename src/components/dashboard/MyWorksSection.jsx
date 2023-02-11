import "./myWorksSection.css";

import MyWorksCard from "./MyWorksCard";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import {data} from '../../data/data'
import { useState } from "react";

const MyWorksSection = () => {
    const [gridShow, setGridShow] = useState(true);

  return (
    <div className="myWorksSection">
      <div className="myWorks-top">
        <h2 className="worksTitle">آثار من :</h2>
        <div className="worksView">
          <h3>نوع نمایش :</h3>
          <div className="worksView-icons">
            <span className={`worksView-icon ${!gridShow && 'worksView-icon--deactive'}`} onClick={()=>setGridShow(true)}>
              <ViewStreamOutlinedIcon />
            </span>
            <span className={`worksView-icon worksView-icon-left ${gridShow && 'worksView-icon--deactive'} `} onClick={()=>setGridShow(false)}>
              <AccessTimeIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="myWorksSection-bottom">
        <div className="myWorksSection--details">
            {data.map(d => (
                <MyWorksCard key={d.id} title={d.title} details={d.details} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorksSection;
