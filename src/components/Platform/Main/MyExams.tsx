import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export default function MyExams() {
  return (
    <div style={{ boxShadow: "0 2px 13px 13px rgba(192, 192, 192, 0.25)" }}
     className="flex flex-col items-start max-w-[1150px] h-48 rounded-[1.5%] mx-auto shadow-box ">
      <p className="font-bold mr-[4rem] mt-[1rem] ml-8">Sınavlarım</p>
      <div  className="w-[560px] h-[105px] mt-3 rounded-[8px] bg-white shadow-xl ml-8 px-[14px] py-[8px] transition duration-600 cursor-pointer hover:scale-100 cfeExam">
        <p className="text-base font-extrabold">
          Herkes için Kodlama 1B Değerlendirme Sınavı
          <FontAwesomeIcon
            icon={faSquareCheck}
            size="2xl"
            style={{ marginLeft: "8rem", color: "#8156f5" }}
          />
        </p>
        <p
          style={{ marginTop: "2px" }}
          className="text-sm font-medium text-gray-400"
        >
          Herkes İçin Kodlama - 1B
        </p>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <FontAwesomeIcon
            icon={faStopwatch}
            size="lg"
            style={{ color: "#9973f2" }}
          />
          <p style={{ marginLeft: "5px" }} className="text-base font-bold">
            45 Dakika
          </p>
        </div>
      </div>
    </div>
  );
}
