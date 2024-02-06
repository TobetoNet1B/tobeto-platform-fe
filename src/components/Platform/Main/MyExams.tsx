import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export default function MyExams() {
  return (
    <div className="myExams">
      <p style={{ fontWeight: "bold", margin: "1rem 4rem 0 0" }}>Sınavlarım</p>
      <div className="cfeExam">
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
