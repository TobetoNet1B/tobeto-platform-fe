import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { RiDeleteBin5Line } from "react-icons/ri";
type Props = {};

const languageOptions = [
  "İngilizce",
  "Fransızca",
  "İtalyanca",
  "Türkçe",
  "Arapça",
];
const levelOptions = [
  "Temel Seviye(A1-A2)",
  "Orta Seviye(B1-B2)",
  "İleri Seviye(C1-C2)",
  "Anadil",
];
const JobSchema = Yup.object().shape({
  language: Yup.string().required("Doldurulması zorunlu alan"),
  level: Yup.string().required("Doldurulması zorunlu alan"),
});

const ForeignLanguage = (props: Props) => {
  const [savedJobs, setSavedJobs] = React.useState<any[]>([]);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const initialValues = {
    language: "",
    level: "",
  };

  const handleSave = (values: any) => {
    setSavedJobs((prevJobs) => [...prevJobs, { ...values }]);
  };
  const handleDelete = (index: number) => {
    setSavedJobs((prevJobs) => prevJobs.filter((_, i) => i !== index));
    setHoveredIndex(null);
  };
  return (
    <div className="mt-7">
      <div className="max-w-4xl mx-auto text-[#828282] ">
        <Formik
          initialValues={initialValues}
          validationSchema={JobSchema}
          onSubmit={(values) => {
            handleSave(values);
          }}
        >
          <Form className="text-sm">
            <div className="flex mb-4">
              <div className="w-5/12 mr-2">
                <Field
                  as="select"
                  id="language"
                  name="language"
                  className="w-full border border-[#E6E5E4]  p-2 rounded-md"
                >
                  <option value="" disabled>
                    Dil seçiniz*
                  </option>
                  {languageOptions.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="language"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-5/12 ml-2">
                <Field
                  as="select"
                  id="level"
                  name="level"
                  className="w-full border border-[#E6E5E4]   p-2 rounded-md"
                >
                  <option value="" disabled>
                    Seviye Seçiniz*
                  </option>
                  {levelOptions.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="level"
                  component="div"
                  className="text-red-500"
                />
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
        <div className="bg-[#FCF9FC] flex flex-wrap mt-5 w-full justify-center">
          {savedJobs.map((job, index) => (
            <div
            key={index}
            className="m-2 border-2 border-white p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-white rounded-full flex items-center justify-center mx-4 hover:border-red-500 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
              <svg
                className="h-6 w-6 ml-2 text-gray-400 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div className="ml-2">
                <p className="text-[11px] font-semibold">{job.language}</p>
                <p className="text-[11px]">{job.level}</p>
              </div>
              <svg
                className="h-6 w-6 mr-2 text-gray-400 ml-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              {hoveredIndex === index && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="relative">
                    <div className="absolute top-1 right-0 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center cursor-pointer">
                      <RiDeleteBin5Line
                        className="h-4 w-4 text-white"
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default ForeignLanguage;
