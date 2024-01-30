import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";

const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];

const JobSchema = Yup.object().shape({
  companyName: Yup.string().required("Doldurulması zorunlu alan*"),
  position: Yup.string().required("Doldurulması zorunlu alan*"),
  sector: Yup.string().required("Doldurulması zorunlu alan*"),
  city: Yup.string().required("Doldurulması zorunlu alan*"),
  startDate: Yup.string().required("Doldurulması zorunlu alan*"),
  endDate: Yup.string().test({
    name: "endDate",
    test: function (value, context) {
      if (!context.parent.ongoing) {
        return (
          !!value ||
          this.createError({ message: "Doldurulması zorunlu alan*" })
        );
      }
      return true;
    },
  }),
});

const Experience: React.FC = () => {
  const initialValues = {
    companyName: "",
    position: "",
    sector: "",
    city: "",
    startDate: "",
    endDate: "",
    ongoing: false,
    jobDescription: "",
  };

  const [savedJobs, setSavedJobs] = React.useState<any[]>([]);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const formikContext = useFormikContext<any>();
  const { values } = formikContext || {};
  const handleSave = (values: any) => {
    setSavedJobs((prevJobs) => [...prevJobs, { ...values }]);
  };

  const openDetailsModalHandler = (job: any) => {
    setSelectedJob(job);
    setOpenDetailsModal(true);
  };

  const closeDetailsModalHandler = () => {
    setSelectedJob(null);
    setOpenDetailsModal(false);
  };

  const openDeleteModalHandler = (job: any) => {
    setSelectedJob(job);
    setOpenDeleteModal(true);
  };

  const closeDeleteModalHandler = () => {
    setSelectedJob(null);
    setOpenDeleteModal(false);
  };

  const handleDelete = () => {
    setSavedJobs((prevJobs) => prevJobs.filter((job) => job !== selectedJob));
    setSelectedJob(null);
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
        setFieldValue("endDate", "");
      }
    };

    return (
      <div className="flex items-center">
        <Field
          type="checkbox"
          id="ongoing"
          name="ongoing"
          checked={values.ongoing}
          onChange={handleCheckboxChange}
          className="mr-1"
        />
        <label htmlFor="ongoing">Çalışmaya Devam Ediyorum</label>
      </div>
    );
  };

  return (
    <div className="">
      <div className="max-w-4xl mt-5 mx-auto text-[#828282] ">
        <Formik
          initialValues={initialValues}
          validationSchema={JobSchema}
          onSubmit={(values) => {
            handleSave(values);
          }}
        >
          <Form className="text-sm">
            <div className="flex mb-4 ">
              <div className="w-1/2 mr-2">
                <label htmlFor="companyName">Kurum Adı*</label>
                <Field
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Tobeto"
                  className="w-full border border-[#B3A6C0] p-2 rounded-md"
                />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="position">Pozisyon*</label>
                <Field
                  type="text"
                  id="position"
                  name="position"
                  placeholder="FullStack Developer"
                  className="w-full border border-[#B3A6C0]  p-2 rounded-md"
                />
                <ErrorMessage
                  name="position"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="sector">Sektör*</label>
                <Field
                  type="text"
                  id="sector"
                  placeholder="Yazılım"
                  name="sector"
                  className="w-full border border-[#B3A6C0]  p-2 rounded-md"
                />
                <ErrorMessage
                  name="sector"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="city">Şehir Seçiniz*</label>
                <Field
                  as="select"
                  id="city"
                  name="city"
                  className="w-full border border-[#B3A6C0]  p-2 rounded-md"
                >
                  <option value="" disabled>
                    Şehir Seçiniz*
                  </option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="startDate">Başlangıç Tarihi*</label>
                <Field
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="w-full border border-[#B3A6C0]  p-2 rounded-md"
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="endDate">Bitiş Tarihi*</label>
                <Field
                  type="date"
                  id="endDate"
                  name="endDate"
                  className={`w-full border border-[#B3A6C0] p-2 mb-2 rounded-md ${
                    values?.ongoing ? "bg-gray-200" : ""
                  }`}
                  disabled={values?.ongoing}
                />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="text-red-500"
                />
                <OngoingCheckbox />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="jobDescription">İş Açıklaması</label>
              <Field
                as="textarea"
                id="jobDescription"
                name="jobDescription"
                rows={5}
                className="w-full border border-[#B3A6C0] rounded-lg p-2 "
              />
              <ErrorMessage
                name="jobDescription"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="bg-[#9933FF] text-white p-2 w-24 rounded-full"
            >
              Kaydet
            </button>
          </Form>
        </Formik>
        {savedJobs.map((job, index) => (
  <div
    key={index}
    className="pt-2 pl-2 mt-10 mb-3 text-left relative bg-[#FF000003] sm:mb-6 md:mb-8 lg:mb-10"
  >
    <div className="mb-3 flex text-[#9933FF]">
      <MdOutlineCalendarMonth className="mt-1" />
      <div className="ml-1 text-sm">
        {new Date(job.startDate).toLocaleDateString("tr-TR")} -{" "}
        {job.ongoing
          ? "Çalışmaya Devam Ediyor"
          : new Date(job.endDate).toLocaleDateString("tr-TR")}
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-36">
      <div className="mb-4">
        <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold">Kurum</h6>
        <p className="text-black text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm mt-1 whitespace-nowrap">
          {job.companyName}
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold">Pozisyon</h6>
        <p className="text-black text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm mt-1 whitespace-nowrap">
          {job.position}
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold">Sektör</h6>
        <p className="text-black text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm mt-1">{job.sector}</p>
      </div>
      <div className="mb-4">
        <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold">Şehir</h6>
        <p className="text-black text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm mt-1">{job.city}</p>
      </div>
      <div className="mb-4 flex flex-col items-start">
        <button
          onClick={() => openDetailsModalHandler(job)}
          className="rounded-full bg-[#9933FF] text-white p-1 hover:bg-[#7F22CC] focus:outline-none focus:ring focus:border-blue-300 mb-2"
        >
          <BsThreeDots size={15} />
        </button>
        <button
          onClick={() => openDeleteModalHandler(job)}
          className="rounded-full bg-[#FF4D4D] text-white p-1 hover:bg-[#CC4646] focus:outline-none focus:ring focus:border-blue-300 "
        >
          <RiDeleteBin5Line size={15} />
        </button>
      </div>
    </div>
  </div>
))}


        <Modal
          show={openDetailsModal}
          size="md"
          onClose={closeDetailsModalHandler}
          popup
        >
          <Modal.Header className="bg-white">
            <div>
              <label htmlFor="jobDescription" className="text-[#828282]">
                İş Açıklaması
              </label>
            </div>
          </Modal.Header>
          <Modal.Body className="bg-white">
            <div className="">
              {selectedJob && (
                <>
                  <div className="mt-4">
                    <p>{selectedJob.jobDescription}</p>
                  </div>
                </>
              )}
            </div>
          </Modal.Body>
        </Modal>
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
                Seçilen deneyimi silmek istediğinize emin misiniz ?
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

export default Experience;
