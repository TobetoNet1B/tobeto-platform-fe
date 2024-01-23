import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "flowbite-react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import YearPicker from "./YearPicker";
import { MdOutlineCalendarMonth } from "react-icons/md";
const educationLevels = ["Lisans", "Önlisans", "Yüksek Lisans", "Doktora"];

const EducationSchema = Yup.object().shape({
  educationLevel: Yup.string().required("Eğitim Durumu boş bırakılamaz"),
  university: Yup.string().required("Üniversite boş bırakılamaz"),
  department: Yup.string().required("Bölüm boş bırakılamaz"),
  startYear: Yup.date()
  .required("Başlangıç Yılı boş bırakılamaz")
  .transform((originalValue, originalObject) => {
    if (originalObject && originalObject.ongoing) {
      return null;
    }
    return originalValue;
  })
  .test({
    name: 'startYear',
    message: 'Başlangıç Yılı boş bırakılamaz',
    test: function (value, { parent }) {
      return parent.ongoing || (value !== null && value !== undefined && !isNaN(value.getTime()));
    },
  })
  .min(new Date('1950-01-01'), 'Başlangıç Yılı en az 1950 olmalıdır'),
  endYear: Yup.date()
  .nullable()
  .test({
    name: 'endYear',
    exclusive: true,
    message: "Bitiş Yılı Başlangıç Yılı'ndan küçük olamaz",
    test: function (endYear) {
      const { ongoing, startYear } = this.parent;

      if (!ongoing) {
        return endYear instanceof Date && !isNaN(endYear.getTime()) && endYear >= startYear;
      }

      return endYear === null || endYear === undefined || endYear === null;
    },
  }),

});

const MyEducation: React.FC = () => {
  const initialValues = {
    educationLevel: "",
    university: "",
    department: "",
    startYear: null ,
    endYear: null ,
    ongoing: false,
  };

  const [savedEducations, setSavedEducations] = useState<any[]>([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<any>(null);

  const formikContext = useFormikContext<any>();
  const { values } = formikContext || {};

  const handleSave = (values: any) => {
    setSavedEducations((prevEducations) => [...prevEducations, { ...values }]);
  };

  const openDeleteModalHandler = (education: any) => {
    setSelectedEducation(education);
    setOpenDeleteModal(true);
  };

  const closeDeleteModalHandler = () => {
    setSelectedEducation(null);
    setOpenDeleteModal(false);
  };

  const handleDelete = () => {
    setSavedEducations((prevEducations) =>
      prevEducations.filter((education) => education !== selectedEducation)
    );
    setSelectedEducation(null);
    setOpenDeleteModal(false);
  };

  const OngoingCheckbox: React.FC = () => {
    const { values, setFieldValue } = useFormikContext<any>();

    const handleCheckboxChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { checked } = event.target;
      setFieldValue("ongoing", checked);

      if (checked) {
        setFieldValue("endYear", "");
      }
    };

    return (
      <div className="flex items-center mt-3">
      <Field
        type="checkbox"
        id="ongoing"
        name="ongoing"
        checked={values.ongoing}
        onChange={handleCheckboxChange}
        className="rounded-md border-[#b3a6c078]"
      />
      <label htmlFor="ongoing">Devam Ediyorum</label>
    </div>
    );
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto text-[#828282]">
        <Formik
           initialValues={initialValues}
           validationSchema={EducationSchema}
           onSubmit={(values) => {
             handleSave(values);
          }}
        >
          <Form className="text-sm">
            <div className="flex mb-4">
              <div className="w-1/2 mr-6">
                <label htmlFor="educationLevel">Eğitim Durumu*</label>
                <Field
                  as="select"
                  id="educationLevel"
                  name="educationLevel"
                  className="w-full border border-[#B3A6C0] p-2 rounded-md"
                >
                  <option value="" >
                    Eğitim Durumu Seçiniz*
                  </option>
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="educationLevel"
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
                <label htmlFor="department">Bölüm*</label>
                <Field
                  type="text"
                  id="department"
                  name="department"
                  placeholder="Yazılım"
                  className="w-full border border-[#B3A6C0] p-2 rounded-md"
                />
                <ErrorMessage
                  name="department"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="startYear">Başlangıç Yılı*</label>
                <div>
                  <Field
                    component={YearPicker}
                    id="startYear"
                    name="startYear"
                    placeholderText="Başlangıç Yılını Seçiniz"
                  />
                </div>
                <ErrorMessage
                  name="startYear"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2  mr-6">
                <label htmlFor="endYear">Bitiş Yılı*</label>
                <div >
                  <Field
                    component={YearPicker}
                    id="endYear"
                    name="endYear"
                    placeholderText="Mezuniyet Yılını Seçiniz"
                    disabled={values?.ongoing}
                  />
                </div>
                <ErrorMessage
                  name="endYear"
                  component="div"
                  className="text-red-500"
                />
                <OngoingCheckbox />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#9933FF] text-white p-2 rounded"
            >
              Kaydet
            </button>
          </Form>
        </Formik>
        {savedEducations.map((education, index) => (
       <div
       key={index}
       className="pt-2 pl-2 mt-10 mb-3 text-left relative bg-[#FF000003]"
       style={{ fontSize: "14px" }} 
     >
            <div className="mb-3 flex text-[#9933FF]">
              <MdOutlineCalendarMonth className="mt-1 " />
              <div className="w-1/2 pr-2">
                <div className="mb-1">
                  {new Date(education.startYear).getFullYear()} -{" "}
                  {education.ongoing
                    ? "Devam Ediyor"
                    : new Date(education.endYear).getFullYear()}
                </div>
              </div>
              <div className="w-1/2 pl-2 text-right">
                <p>{education.educationLevel}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-80">
            <div className="mb-4 w-full sm:w-auto">
              <h6 className="text-sm font-semibold">Üniversite</h6>
              <p className="text-black text-sm mt-1" style={{ whiteSpace: "nowrap" }}>
                {education.university}
              </p>
            </div>
            <div className="mb-4 w-full sm:w-auto">
              <h6 className="text-sm font-semibold">Bölüm</h6>
              <p className="text-black text-sm mt-1" style={{ whiteSpace: "nowrap" }}>
                {education.department}
              </p>
            </div>
            <div className="mb-4 w-full sm:w-auto">
              <button
                onClick={() => openDeleteModalHandler(education)}
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
