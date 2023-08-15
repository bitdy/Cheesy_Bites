import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsSearch } from "react-icons/bs";
import cookies from "js-cookie";
import { LanguagesData } from "../../models/languagesData";
import i18next from "i18next";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import "./TopHeader.css";

const languages: Array<LanguagesData> = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "fa",
    name: "فارسی",
    dir: "rtl",
    country_code: "ir",
  },
];

const TopHeader = () => {
  const [showBtn, setshowBtn] = useState("none");
  const [display, setDisplay] = useState("none");

  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next");
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
  }, [currentLanguage, t]);

  const handleSearchBtn = () => {
    if (showBtn == "none") {
      setshowBtn("block");
    } else {
      setshowBtn("none");
    }
  };
  const handleClick = () => {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  return (
    <div className="container top_header" >
      <div className="row">
        <div className="col-12 col-lg-3 ">
          <div className="header_main_logo">
            {/* <div className="search_box">
              <input type="text" placeholder="search..." style={{display : showBtn}} />
              <BsSearch onClick={() => handleSearchBtn()}/>
            </div> */}
            <div className="input-group">
              <input
                type="text"
                className="cus_input"
                style={{ display: showBtn }}
                placeholder={t("search")}
              />
              <span className="icon-container">
                <div
                  className="icon-container-icon"
                  style={{ cursor: "pointer" }}
                >
                  <BsSearch
                    onClick={() => handleSearchBtn()}
                    color="#000"
                    size={16}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 ">
          <div className="main_logo">
            <img src="/assets/images/main_logo.jpg" alt="" />
          </div>
          {/* <ul className="lang_nvigation">
            {languages.map(({ code, name, country_code }) => (
              <li
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
                key={country_code}
              >
                {name}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="col-12 col-lg-3 ">
          <div className="login_subescript">
            <div className="btn">{t("subscript_money")}</div>
            <div className="btn">{t("login")}</div>
            <div className="btn" onClick={() => handleClick()}>
              <ul className="sub_items" style={{ display: display }}>
                {languages.map(({ code, name, country_code }) => (
                  <li key={country_code}>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                      disabled={currentLanguageCode === code}
                    >
                      <span className="mx-2 ">
                        <img
                          src={"/assets/flags/" + country_code + ".png"}
                          alt=""
                        />
                      </span>
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
              <AiOutlineGlobal size={22} className="pointer" />
              {display == "block" ? (
                <BiChevronUp size={18} className="pointer mx-1" />
              ) : (
                <BiChevronDown size={18} className="pointer mx-1" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
