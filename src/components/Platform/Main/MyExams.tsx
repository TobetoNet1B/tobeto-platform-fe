import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { GetStudentPlatformResponse } from "models/responses/students/getStudentPlatformResponse";

type Props = {
studentPlatform:GetStudentPlatformResponse["studentExams"]
}

const MyExams = (props: Props) => {
  return (
    <div style={{ boxShadow: "0 2px 13px 13px rgba(192, 192, 192, 0.25)" }}
     className="flex flex-col items-start max-w-[1150px] h-48 rounded-[1.5%] mx-auto shadow-box ">
      <p className="font-bold mr-[4rem] mt-[1rem] ml-8">Sınavlarım</p>
      {props.studentPlatform?.map((exam) => ( // Map through studentPlatform array
        <div
          key={exam.id}
          className="w-[560px] h-[105px] mt-3 rounded-[8px] bg-white shadow-xl ml-8 px-[14px] py-[8px] transition duration-600 cursor-pointer hover:scale-100 cfeExam"
        >
          <p className="text-base font-extrabold">{exam.name}</p> {/* Use exam.name */}
          <p style={{ marginTop: "2px" }} className="text-sm font-medium text-gray-400">
            {exam.description}
          </p> {/* Use exam.description */}
          <div style={{ display: "flex", marginTop: "15px" }}>
            <FontAwesomeIcon icon={faStopwatch} size="lg" style={{ color: "#9973f2" }} />
            <p style={{ marginLeft: "5px" }} className="text-base font-bold">
              {exam.time} Dakika
            </p> {/* Use exam.time */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyExams;