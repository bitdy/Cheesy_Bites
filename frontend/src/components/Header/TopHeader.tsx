import "./TopHeader.css";
import { GrLinkNext } from "react-icons/gr";

const TopHeader = () => {
  return (
    <div className="container">
      <div className="row g-0 top_logo">
        <div className="col-5">
          <div className="top_logo_contnet">
            <GrLinkNext class="main_color" /> تماس با ما
            <span>+98 922 4003 487</span>
            <GrLinkNext class="main_color" /> ورود
          </div>
        </div>
        <div className="col-7"></div>
      </div>
    </div>
  );
};

export default TopHeader;
