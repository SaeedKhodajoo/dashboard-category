import "./myWorksSection.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import MyWorksCard from "./MyWorksCard";

const MyWorksSection = () => {
  return (
    <div className="myWorksSection">
      <div className="myWorks-top">
        <h2 className="worksTitle">آثار من :</h2>
        <div className="worksView">
          <h3>نوع نمایش :</h3>
          <div className="worksView-icons">
            <span className="worksView-icon">
              <ViewStreamOutlinedIcon />
            </span>
            <span className="worksView-icon worksView-icon-left">
              <AccessTimeIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="myWorksSection-bottom">
        <div className="myWorksSection--details">
          <MyWorksCard title="تدوین و صداگذاری" />
          <MyWorksCard title="تدوین و صداگذاری" />
          <MyWorksCard title="تدوین و صداگذاری" />
        </div>
      </div>
    </div>
  );
};

export default MyWorksSection;
