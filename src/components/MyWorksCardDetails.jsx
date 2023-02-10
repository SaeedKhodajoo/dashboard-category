import "./myWorksCardDetails.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MyWorksCardDetails = ({ title, image }) => {
  return (
    <div className="myWorksDetails">
      <div className="myWorksDetails-image">
        <img src={image} alt="" />
      </div>
      <div className="myWorksDetails-title">
        <h4>{title}</h4>
      </div>
      <span className="myWorksDetails-icon">
        <MoreVertIcon />
      </span>
    </div>
  );
};

export default MyWorksCardDetails;
