import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "flowbite-react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import YearPicker from "./YearPicker";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AddEducationRequest } from "models/requests/educations/addEducationRequest";
import educationService from "services/educationService";
import { GetEducationResponse } from "models/responses/educations/getEducationResponse";

const departmentLevels = ["Lisans", "Önlisans", "Yüksek Lisans", "Doktora"];

const EducationSchema = Yup.object().shape({
  graduation: Yup.string().required("Doldurulması zorunlu alan*"),
  university: Yup.string().required("Doldurulması zorunlu alan*"),
  department: Yup.string().required("Doldurulması zorunlu alan*"),
  startDate: Yup.date()
    .required("Doldurulması zorunlu alan*")
    .transform((originalValue, originalObject) => {
      if (originalObject && originalObject.ongoing) {
        return null;
      }
      return originalValue;
    })
    .test({
      name: "startDate",
      message: "Doldurulması zorunlu alan*",
      test: function (value, { parent }) {
        return (
          parent.isContinueUniversity ||
          (value !== null && value !== undefined && !isNaN(value.getTime()))
        );
      },
    })
    .min(new Date("1950-01-01"), "Başlangıç Yılı en az 1950 olmalıdır"),
  endDate: Yup.date()
    .nullable()
    .test({
      name: "endDate",
      exclusive: true,
      message: "Bitiş Yılı Başlangıç Yılı'ndan küçük olamaz",
      test: function (endDate) {
        const { isContinueUniversity, startDate } = this.parent;

        if (!isContinueUniversity) {
          return (
            endDate instanceof Date &&
            !isNaN(endDate.getTime()) &&
            endDate >= startDate
          );
        }

        return endDate === null || endDate === undefined || endDate === null;
      },
    }),
});

const MyEducation: React.FC = () => {
  const initialValues = {
    department: "",
    university: "",
    graduation: "",
    startDate: "",
    endDate: "",
    isContinueUniversity: false,
  };


  const [savedEducations, setSavedEducations] = useState<any[]>([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<any>(null);
  const [education, setEducation] = useState<GetEducationResponse | null>(
    null
  );
  const formikContext = useFormikContext<any>();
  const { values } = formikContext || {};

  const fetchStudentEducation = async () => {
    try {
      const result = await educationService.getById(localStorage.studentId);
      setEducation(result.data as GetEducationResponse);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching student education:", error);
    }
  };

  useEffect(() => {
    fetchStudentEducation();
  }, []);

  const openDeleteModalHandler = (education: any) => {
    setSelectedEducation(education);
    setOpenDeleteModal(true);
  };

  const closeDeleteModalHandler = () => {
    setSelectedEducation(null);
    setOpenDeleteModal(false);
  };

  const handleDelete = async () => {
    try {
      await educationService.delete(selectedEducation.id);
      fetchStudentEducation();
      setOpenDeleteModal(false);
    } catch (error) {
      console.error("Error deleting education:", error);
    }
  };
  const handleSubmit = async (values: any, { resetForm }: { resetForm: () => void }) => {
    try {
      const { university, department, graduation, startDate, endDate, isContinueUniversity } = values;
      const addEducationRequest: AddEducationRequest = {
        university,
        department,
        graduation,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : undefined,
        isContinueUniversity,
        studentId: localStorage.studentId
      };
      await educationService.add(addEducationRequest);
      resetForm();
      fetchStudentEducation();
    } catch (error) {
      console.error("Error adding education:", error);
    }
  };
  const OngoingCheckbox: React.FC = () => {
    const { values, setFieldValue } = useFormikContext<any>();

    const handleCheckboxChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { checked } = event.target;
      setFieldValue("isContinueUniversity", checked);

      if (checked) {
        setFieldValue("endDate", "");
      }
    };

    return (
      <div className="flex items-center mt-3">
        <Field
          type="checkbox"
          id="isContinueUniversity"
          name="isContinueUniversity"
          checked={values.isContinueUniversity}
          onChange={handleCheckboxChange}
          className="rounded-md border-[#b3a6c078]"
        />
        <label htmlFor="isContinueUniversity">Devam Ediyorum</label>
      </div>
    );
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto mt-5 text-[#828282]">
        <Formik
           initialValues={{ ...initialValues, studentId: localStorage.studentId }}
           validationSchema={EducationSchema}
           onSubmit={handleSubmit}
        >
          <Form className="text-sm">
            <div className="flex mb-4">
              <div className="w-1/2 mr-6">
                <label htmlFor="department">Eğitim Durumu*</label>
                <Field
                  as="select"
                  id="department"
                  name="department"
                  className="w-full border border-[#B3A6C0] p-2 rounded-md"
                >
                  <option value="">Eğitim Durumu Seçiniz*</option>
                  {departmentLevels.map((level) => (
                    <option key={level} value={level}>
                      {level.toString()}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="department"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="university">Üniversite*</label>
                <Field
                  type="text"
                  id="university"
                  name="university"
                  placeholder="Örnek Üniversite"
                  className="w-full border border-[#B3A6C0]  p-2 rounded-md"
                />
                <ErrorMessage
                  name="university"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-6">
                <label htmlFor="graduation">Bölüm*</label>
                <Field
                  type="text"
                  id="graduation"
                  name="graduation"
                  placeholder="Yazılım"
                  className="w-full border border-[#B3A6C0] p-2 rounded-md"
                />
                <ErrorMessage
                  name="graduation"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="startDate">Başlangıç Yılı*</label>
                <div>
                  <Field
                    component={YearPicker}
                    id="startDate"
                    name="startDate"
                    placeholderText="Başlangıç Yılını Seçiniz"
                  />
                </div>
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
       

            <div className="flex mb-4">
              <div className="w-1/2 mr-6">
                <label htmlFor="endDate">Bitiş Yılı*</label>
                <div>
                  <Field
                  component={YearPicker}
                    id="endDate"
                    name="endDate"
                    placeholderText="Mezuniyet Yılını Seçiniz"
                    disabled={values?.isContinueUniversity}
                  />
                </div>
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="text-red-500"
                />
                <OngoingCheckbox />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#9933FF] text-white p-2 w-24 rounded-full"
            >
              Kaydet
            </button>
          </Form>
        </Formik>
        {education && education && education.map((edu,index) => (
          <div
            key={index}
            className="pt-2 pl-2 mt-10 mb-3 text-left relative bg-[#FF000003]"
            style={{ fontSize: "14px" }}
          >
            <div className="mb-3 flex text-[#9933FF]">
              <MdOutlineCalendarMonth className="mt-1 " />
              <div className="w-1/2 pr-2">
                <div className="mb-1">
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {edu.isContinueUniversity
                    ? "Devam Ediyor"
                    : new Date(edu.endDate).getFullYear()}
                </div>
              </div>
              <div className="w-1/2 pl-2 text-right">
                <p>{edu.department}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-80">
              <div className="mb-4 w-full sm:w-auto">
                <h6 className="text-sm font-semibold">Üniversite</h6>
                <p
                  className="text-black text-sm mt-1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {edu.university}
                </p>
              </div>
              <div className="mb-4 w-full sm:w-auto">
                <h6 className="text-sm font-semibold">Bölüm</h6>
                <p
                  className="text-black text-sm mt-1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {edu.graduation}
                </p>
              </div>
              <div className="mb-4 w-full sm:w-auto">
              <button
                  onClick={() => openDeleteModalHandler(edu)}
                  className="rounded-full bg-[#FF4D4D] mt-3 text-white p-1 hover:bg-[#CC4646] focus:outline-none focus:ring focus:border-blue-300"
                >
                  <RiDeleteBin5Line size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}

        <Modal
          show={openDeleteModal}
          size="md"
          onClose={closeDeleteModalHandler}
          popup
        >
          <Modal.Header className="bg-white" />
          <Modal.Body className="bg-white ">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-red-700" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Seçilen eğitimi silmek istediğinize emin misiniz ?
              </h3>
              <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
                Bu işlem geri alınamaz.
              </p>
              <div className="flex justify-center gap-4 bg-white">
                <Button color="failure" onClick={handleDelete}>
                  {"Evet"}
                </Button>
                <Button color="gray" onClick={closeDeleteModalHandler}>
                  Hayır
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default MyEducation;

