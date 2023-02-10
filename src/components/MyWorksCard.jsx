import "./myWorksCard.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MyWorksCardDetails from "./MyWorksCardDetails";
import ShoeImage from "../images/shoe.jpg";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const MyWorksCard = ({ title }) => {
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
          <MyWorksCardDetails
            title="تدوین تیزر تبلیغاتی نوشیدنی انرژی زا"
            image={ShoeImage}
          />
          <MyWorksCardDetails
            title="تدوین تیزر تبلیغاتی نوشیدنی انرژی زا"
            image={ShoeImage}
          />
          <MyWorksCardDetails
            title="تدوین تیزر تبلیغاتی نوشیدنی انرژی زا"
            image={ShoeImage}
          />
        </div>
        <div className="myWorksCard-bottom-left">
          <span className="myWorksCard-add">
            <ControlPointOutlinedIcon />
            افزودن اثر
          </span>
          <span className="myWorksCard-more">
            نمایش بیشتر...
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyWorksCard;
