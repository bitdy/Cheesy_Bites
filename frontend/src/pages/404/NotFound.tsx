import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not_found">
      <h1 className="title">404</h1>
      <h3 className="subtitle">NotFound</h3>
      <Link to="/">
        <p className="back">Back to home</p>
      </Link>
    </div>
  );
};

export default NotFound;
