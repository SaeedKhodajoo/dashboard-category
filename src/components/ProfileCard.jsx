import "./profileCard.css";
import TitleComponent from "./TitleComponent";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ProfileImage from "../images/avatarImage.png";
import Tag from "./Tag";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <TitleComponent title={"اطلاعات شناسایی"} />
      <div className="profileDetails">
        <div className="profileImage">
          <img src={ProfileImage} alt="" />
        </div>
        <h3 className="profileName">مهدی ساغری</h3>
        <div className="profileSocialMedia">
          <span>
            <WhatsAppIcon />
          </span>
          <span>
            <LinkedInIcon />
          </span>

          <span>
            <FacebookOutlinedIcon />
          </span>
        </div>
      </div>
      <TitleComponent title={"تگ لاین ها"} />
      <div className="tags">
        <Tag tag={"تجربه کاربری"} />
        <Tag tag={"طراحی سابت"} />
        <Tag tag={"گرافیک"} />
      </div>
      <TitleComponent title={"درباره من"} />
      <p className="aboutme">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <TitleComponent title={"مهارت ها"} />
      <div className="tags">
        <Tag tag={"تجربه کاربری"} />
        <Tag tag={"طراحی سابت"} />
        <Tag tag={"گرافیک"} />
      </div>
      <TitleComponent title={"گواهینامه ها و مدارک تحصیلی"} />
      <ul className="profile-list">
        <li className="profile-listItem">کارشناسی کامپیوتر - دانشگاه تبریز</li>
        <li className="profile-listItem">مبانی طراحی - udemy</li>
      </ul>
      <TitleComponent title={"سوابغ شغلی"} />
      <ul className="profile-list">
        <li className="profile-listItem">طراح تجریه کاربری - شرکت همراه</li>
        <li className="profile-listItem">طراح گرافیک - شرکت آینده سازان</li>
      </ul>
    </div>
  );
};

export default ProfileCard;
