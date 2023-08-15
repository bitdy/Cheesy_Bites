import { NewData } from "../../models/newsData";
import "./New.css";

const newsData: Array<NewData> = [
  {
    id: 1,
    imgsrc: "/assets/images/ne 1.jpg",
    username: "UserOne",
    profile: "/assets/images/ne 1.jpg",
    title: "new title",
    pragraph: "lorem ipusm dolor sit",
    type: "sport",
  },
  {
    id: 2,
    imgsrc: "/assets/images/ne 1.jpg",
    username: "UserOne",
    profile: "/assets/images/ne 1.jpg",
    title: "new title",
    pragraph: "lorem ipusm dolor sit",
    type: "sport",
  },
  {
    id: 3,
    imgsrc: "/assets/images/ne 1.jpg",
    username: "UserOne",
    profile: "/assets/images/ne 1.jpg",
    title: "new title",
    pragraph: "lorem ipusm dolor sit",
    type: "sport",
  },
  {
    id: 4,
    imgsrc: "/assets/images/ne 1.jpg",
    username: "UserOne",
    profile: "/assets/images/ne 1.jpg",
    title: "new title",
    pragraph: "lorem ipusm dolor sit",
    type: "sport",
  },
];

const New = () => {
  return (
    <article className="news">
      {newsData.map((news) => (
        <>
        <div className="news_image">
          <img className="" src={news.imgsrc} alt="" />
          <div className="time_user">
            <div className="profile">
              <img className="" src={news.profile} alt="" />
              <div className="username">{news.username}</div>
            </div>
            <div className="time">3 hour later</div>
          </div>
        </div>
        <div className="text"></div>
         <div className="title">{news.title}</div>
         </>
      ))}

     
      <figcaption className="pragraph"></figcaption>
      <div className="new_button">
        <div className="left_side">
          <div className="type_news"></div>
          <div className="time_read"></div>
        </div>
        <div className="right_side">
          <div className="share"></div>
          <div className="saved"></div>
        </div>
      </div>
    </article>
  );
};

export default New;
