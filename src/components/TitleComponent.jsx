import './titleComponent.css'
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const TitleComponent = ({ title }) => {
  return (
    <div className="title-wrapper">
      <h4>{title}</h4>
      <hr />
      <BorderColorOutlinedIcon />
    </div>
  );
};

export default TitleComponent;
