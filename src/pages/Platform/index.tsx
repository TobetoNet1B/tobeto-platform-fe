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
import FooterBoxes from "components/Platform/Main/FooterBoxes";
import { GetStudentPlatformResponse } from "models/responses/students/getStudentPlatformResponse";
import StudentPlatformService from "services/studentPlatformService";
import { useDispatch } from "react-redux";
import { setFirstName, setImgUrl, setLastName } from "store/user/userSlice";

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

  const [studentPlatform, setStudentPlatform] = useState<GetStudentPlatformResponse>({} as GetStudentPlatformResponse);
  useEffect(() => {
    let studentPlatformService = StudentPlatformService;
    studentPlatformService
      .getByUserPlatformId(localStorage.userId)
      .then((result) => {
        setStudentPlatform(result.data as GetStudentPlatformResponse);
        localStorage.setItem('studentId', result.data.id);
      });
  }, []);
  console.log(studentPlatform);

	let firstName = studentPlatform.user?.firstName
	let lastName =  studentPlatform.user?.lastName
	let imgUrl = studentPlatform.imgUrl

	const dispatch = useDispatch()  

	useEffect(() => {
	dispatch(setFirstName(firstName))
	dispatch(setLastName(lastName)) 
	dispatch(setImgUrl(imgUrl)) 
	}, [firstName,lastName])


  return (
    <div>
      <div className="flex items-center justify-center
">
        <div className="text-center mr-20">
          <h1 className="mt-8 ml-96">
            <span
              className="text-purple-600"
              style={{ fontSize: 37, fontWeight: "bold" }}
            >

              TOBETO
            </span>
            <span className="text-green-700" style={{ fontSize: 35 }}>

              'ya hoş geldin
            </span>
          </h1>
          <h1
            className="text-green-700 text-4xl ml-96"

          >
            {firstName.toUpperCase() + " " + lastName.toUpperCase()}
          </h1>
        </div>
        <img
          className="w-40 h-40 mt-8 ml-40"
          src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
          alt=""
        />
      </div>

      <h1

        className="flex justify-center text-2xl font-medium text-gray-900 dark:text-white"
      >
        Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
        yanında!
      </h1>
      <br />
      <br />

      <div className="body-container" style={{ height: containerHeight }}>
        <img
          className="w-72 h-72 mx-auto pt-16"
          src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
          alt=""
        />
        <h1 className="flex justify-center items-center p-5 text-2xl font-medium text-gray-900 dark:text-white">
          Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
        </h1>
        <h1 className="flex justify-center items-center p-5 text-4xl font-semibold text-gray-900 dark:text-white">
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

        <div className="mt-7 ml-7">
          <Link
            className={`mt-7 ml-5 text-lg relative text-gray-900 dark:text-white ${selectedLink === "Başvurularım" ? "selected" : ""
              }`}
            to={""}
            onClick={() => handleLinkClick("Başvurularım")}
          >
            <span className="relative z-10">Başvurularım</span>
            {selectedLink === "Başvurularım" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 mt-2"></span>
            )}
          </Link>

          <Link
            className={`mt-5 ml-5 text-lg relative text-gray-900 dark:text-white ${selectedLink === "Eğitimlerim" ? "selected" : ""
              }`}
            to={""}
            onClick={() => handleLinkClick("Eğitimlerim")}
          >
            <span className="relative z-10">Eğitimlerim</span>
            {selectedLink === "Eğitimlerim" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 mt-2"></span>
            )}
          </Link>

          <Link
            className={`mt-5 ml-5 text-lg relative text-gray-900 dark:text-white ${selectedLink === "Duyuru ve Haberlerim" ? "selected" : ""
              }`}
            to={""}
            onClick={() => handleLinkClick("Duyuru ve Haberlerim")}
          >
            <span className="relative z-10">Duyuru ve Haberlerim</span>
            {selectedLink === "Duyuru ve Haberlerim" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 mt-2"></span>
            )}
          </Link>
          <Link
            className={`mt-5 ml-5 text-lg relative text-gray-900 dark:text-white ${selectedLink === "Anketlerim" ? "selected" : ""
              }`}
            to={""}
            onClick={() => handleLinkClick("Anketlerim")}
          >
            <span className="relative z-10">Anketlerim</span>
            {selectedLink === "Anketlerim" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 mt-2"></span>
            )}
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
            <div className="flex flex-col items-center">
              <button style={{ boxShadow: "0px 0px 10px 2px gray" }} className="showMoreBtn flex justify-center items-center w-9 h-9 rounded-full border-0.5 border-gray-300 bg-transparent text-gray-600 shadow-box focus:outline-none cursor-pointer my-4 mx-auto" onClick={toEgitimlerim}>
                <SlArrowRight />
              </button>
              <p className="text-gray-500 cursor-pointer font-bold text-xs" onClick={toEgitimlerim}>
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
          <div className="flex flex-col items-center">
            <button style={{ boxShadow: "0px 0px 10px 2px gray" }} className="showMoreBtn flex justify-center items-center w-9 h-9 rounded-full border-0.5 border-gray-300 bg-transparent text-gray-600 shadow-box focus:outline-none cursor-pointer my-4 mx-auto" onClick={toDuyurularim}>
              <SlArrowRight />
            </button>
            <p className="text-gray-500 cursor-pointer font-bold text-xs" onClick={toDuyurularim}>Daha Fazla Göster</p>
          </div>
        )}
        {selectedLink === "Anketlerim" && <MySurveys />}
      </div>
      <br />
      <MyExams studentPlatform={studentPlatform.studentExams} />
      <FooterBoxes />
    </div>
  );
}
