import "./SecHeader.css"
import { GrLinkNext } from "react-icons/gr"

interface Props {
    title : string;
}

const SecHeader = ({title} : Props) => {
  return (
    <header className="header-sec">
      <div className="header_title">{title}</div>
      <div className="see_more">see more <GrLinkNext /></div>
    </header>
  )
}

export default SecHeader