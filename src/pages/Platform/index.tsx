import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./platform.css";
import ApplyCard from "../../components/Platform/Main/ApplyCard";
import EducationShowcase from "../../components/Platform/Main/EducationShowcase";
import { SlArrowRight } from "react-icons/sl";
import AnnouncementCard from "../../components/Platform/Main/AnnouncementCards/AnnouncementCard";
import AnnouncementCard2 from "../../components/Platform/Main/AnnouncementCards/AnnouncementCard2";
import AnnouncementCard3 from "../../components/Platform/Main/AnnouncementCards/AnnouncementCard3";
import MyExams from "../../components/Platform/Main/MyExams";
import MySurveys from "components/Platform/Main/MySurveys";
import FooterBoxes from "components/Platform/Footer/FooterBoxes";
import FooterBar from "components/Platform/Footer/FooterBar";

export default function PlatformMain() {
  const [selectedLink, setSelectedLink] = useState<string>("Başvurularım");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [containerHeight, setContainerHeight] = useState<number>(100);
  useEffect(() => {
    handleLinkClick(selectedLink);
  }, []);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);

    if (link === "Eğitimlerim") {
      setContainerHeight(1010);
    } else if (link === "Duyuru ve Haberlerim") {
      setContainerHeight(800);
      } 
      else if (link === "Anketlerim") {
        setContainerHeight(825);
      }
      else {
      setContainerHeight(700);
    }
  }
  const navigate = useNavigate();

  const toEgitimlerim = () => {
    navigate("/egitimlerim");
  };

  const toDuyurularim = () => {
    navigate("/duyurularim");
  };

  return (
    <div>
      <div className="entry-container">
        <div className="text-container">
          <h1 className="welcome-message">
            <span
              className="text-purple-600"
              style={{ fontSize: 37, fontWeight: "bold" }}
            >
              {" "}
              TOBETO{" "}
            </span>
            <span className="text-green-700" style={{ fontSize: 35 }}>
              {" "}
              'ya hoş geldin{" "}
            </span>
          </h1>
          <h1
            className="text-green-700"
            style={{ fontSize: 35, marginLeft: 460 }}
          >
            PAIR 3
          </h1>
        </div>
        <img
          className="ball"
          src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
          alt=""
        />
      </div>

      <h1
        id="text1"
        className="text-2xl font-medium text-gray-900 dark:text-white"
      >
        Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
        yanında!
      </h1>
      <br />
      <br />

      <div className="body-container" style={{ height: containerHeight }}>
        <img
          className="ikLogo"
          src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
          alt=""
        />
        <h1 className="freeCourse text-2xl font-medium text-gray-900 dark:text-white">
          Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
        </h1>
        <h1 className="freeCourse  text-4xl font-extrabold text-gray-900 dark:text-white">
          Aradığın
          <span
            style={{
              fontFamily: "Verdana",
              paddingLeft: "10px",
              fontStyle: "italic",
            }}
            className="text-4xl font-extrabold text-gray-400"
          >
            "
          </span>{" "}
          İş
          <span
            style={{
              fontFamily: "Verdana",
              paddingRight: "10px",
              fontStyle: "italic",
            }}
            className="text-4xl font-extrabold text-gray-400"
          >
            "
          </span>
          Burada!
        </h1>

        <div className="localBar">
          <Link
            id="localLink1"
            className={`localLink text-lg text-gray-900 dark:text-white ${
              selectedLink === "Başvurularım" ? "selected" : ""
            }`}
            to={""}
            onClick={() => handleLinkClick("Başvurularım")}
          >
            Başvurularım
          </Link>
          <Link
            id="localLink2"
            className={`localLink text-lg text-gray-900 dark:text-white ${
              selectedLink === "Eğitimlerim" ? "selected" : ""
            }`}
            to={""}
            onClick={() => handleLinkClick("Eğitimlerim")}
          >
            Eğitimlerim
          </Link>
          <Link
            id="localLink3"
            className={`localLink text-lg text-gray-900 dark:text-white ${
              selectedLink === "Duyuru ve Haberlerim" ? "selected" : ""
            }`}
            to={""}
            onClick={() => handleLinkClick("Duyuru ve Haberlerim")}
          >
            Duyuru ve Haberlerim
          </Link>
          <Link
            id="localLink4"
            className={`localLink text-lg text-gray-900 dark:text-white ${
              selectedLink === "Anketlerim" ? "selected" : ""
            }`}
            to={""}
            onClick={() => handleLinkClick("Anketlerim")}
          >
            Anketlerim
          </Link>
        </div>

        {selectedLink === "Başvurularım" && <ApplyCard />}

        {selectedLink === "Eğitimlerim" && (
          <>
            <EducationShowcase
              searchQuery={searchQuery}
              sortBy={sortBy}
              selectedOrganization={selectedOrganization}
            />
            <div className="showMoreContainer">
              <button className="showMoreBtn" onClick={toEgitimlerim}>
                <SlArrowRight />
              </button>
              <p className="showMoreText" onClick={toEgitimlerim}>
                Daha Fazla Göster
              </p>
            </div>
          </>
        )}
        <div style={{ display: "flex" }}>
          {selectedLink === "Duyuru ve Haberlerim" && <AnnouncementCard />}
          {selectedLink === "Duyuru ve Haberlerim" && <AnnouncementCard2 />}
          {selectedLink === "Duyuru ve Haberlerim" && <AnnouncementCard3 />}
        </div>
        {selectedLink === "Duyuru ve Haberlerim" && (
          <div className="showMoreContainer">
            <button className="showMoreBtn" onClick={toDuyurularim}>
              <SlArrowRight />
            </button>
            <p className="showMoreText" onClick={toDuyurularim}>Daha Fazla Göster</p>
          </div>
        )}
        {selectedLink === "Anketlerim" &&  <MySurveys/>}
      </div>
      <br />
      <MyExams />
      <FooterBoxes/>
      <FooterBar/>
    </div>
  );
}
