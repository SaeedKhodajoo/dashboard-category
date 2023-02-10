import "./myWorksCardDetails.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MyWorksCardDetails = ({ title, image }) => {
  return (
    <div className="myWorksDetails">
      <div className="myWorksDetails-image">
        <img src={require(`../images/${image}.jpg`)} alt="" />
      </div>
      <div className="myWorksDetails-title">
        <h5>{title}</h5>
      </div>
      <span className="myWorksDetails-icon">
        <MoreVertIcon />
      </span>
    </div>
  );
};

export default MyWorksCardDetails;
