import "./myWorksCard.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MyWorksCardDetails from "./MyWorksCardDetails";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const MyWorksCard = ({ title,details }) => {
  return (
    <div className="myWorksCard">
      <div className="myWorksCard-top">
        <h2 className="myWorksCard-title">{title}</h2>
        <span className="myWorksCard-edit">
          <BorderColorOutlinedIcon />
        </span>
        <span className="myWorksCard-delete">
          <DeleteOutlineOutlinedIcon />
        </span>
      </div>
      <div className="myWorksCard-bottom">
        <div className="myWorksCard--details">
            {details.map((d) => (
                <MyWorksCardDetails title={d.subTitle} image={d.imgSrc} />
            ))}
        </div>
        <div className="myWorksCard-bottom-left">
          <span className="myWorksCard-add">
            <ControlPointOutlinedIcon />
           <h4> افزودن اثر</h4>
          </span>
         {details.length >= 3 && <span className="myWorksCard-more">
            نمایش بیشتر...
          </span>}
        </div>
      </div>
    </div>
  );
};

export default MyWorksCard;
