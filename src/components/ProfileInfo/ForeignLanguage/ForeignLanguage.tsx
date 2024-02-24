import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GetStudentForeignLanguageResponse } from "models/responses/student-foreign-languages/getStudentForeignLanguageResponse";
import studentForeignLanguageService from "services/studentForeignLanguageService";
import foreignLanguageService from "services/foreignLanguageService";
import { getAllForeignLanguageResponse } from "models/responses/foreign-languages/getAllForeignLanguageResponse";
import { GetAllForeignLanguageLevelResponse } from "models/responses/foreign-language-levels/getAllForeignLanguageLevelResponse";
import foreignLanguageLevelService from "services/foreignLanguageLevelService";
import { AddStudentForeignLanguageRequest } from "models/requests/student-foreign-languages/addStudentForeignLanguageRequest";
type Props = {};

const JobSchema = Yup.object().shape({
  foreignLanguageId: Yup.string().required("Doldurulması zorunlu alan"),
  foreignLanguageLevelId: Yup.string().required("Doldurulması zorunlu alan"),
});

const ForeignLanguage = (props: Props) => {
  const [savedJobs, setSavedJobs] = React.useState<any[]>([]);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [foreignLanguage, setForeignLanguage] = useState<GetStudentForeignLanguageResponse | null>(null);
  const [foreign, setForeign] =useState<getAllForeignLanguageResponse | null>(null);
  const [foreignLevel, setForeignLevel] =useState<GetAllForeignLanguageLevelResponse | null>(null);
  const initialValues = {
    foreignLanguageId: "",
    foreignLanguageLevelId: "",
  };
  const fetchForeignLanguage = async () => {
    try {
      const result = await foreignLanguageService.getAll(0, 10);
      setForeign(result.data as getAllForeignLanguageResponse);
    } catch (error) {
      console.error("Error fetching social media:", error);
    }
  };
  const fetchForeignLevelLanguage = async () => {
    try {
      const result = await foreignLanguageLevelService.getAll(0, 10);
      setForeignLevel(result.data as GetAllForeignLanguageLevelResponse);
    } catch (error) {
      console.error("Error fetching social media:", error);
    }
  };
  const fetchStudentForeignLanguage = async () => {
    try {
      const result = await studentForeignLanguageService.getById(localStorage.studentId);
      setForeignLanguage(result.data as GetStudentForeignLanguageResponse);
      console.log(result)
    } catch (error) {
      console.error("Error fetching student social media:", error);
    }
  };

  useEffect(() => {
    fetchForeignLevelLanguage();
    fetchForeignLanguage();
    fetchStudentForeignLanguage();
  }, []);

  const handleSave =  async (values: any) => {
    try {
      const {foreignLanguageId,foreignLanguageLevelId } = values;
      const requestDate: AddStudentForeignLanguageRequest = {
        foreignLanguageId,
        foreignLanguageLevelId,
        studentId: localStorage.studentId
      };
  console.log(requestDate)
      await studentForeignLanguageService.add(requestDate); 
      await fetchStudentForeignLanguage(); 
    } catch (error) {
      console.error("Eklenirken bir hata oluştu:", error);
    }
  };

  const handleDelete = async (languageId: string) => {
    try {
      await studentForeignLanguageService.delete(languageId);
      fetchStudentForeignLanguage();
    } catch (error) {
      console.error("Error deleting foreign language:", error);
    }
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
                 id="foreignLanguageId"
                 name="foreignLanguageId"
                 className="w-full p-3 border border-[#E6E5E4] rounded-md"
               >
                 <option value="">Seçiniz*</option>
                 {foreign?.items.map((item) => (
                   <option key={item.id} value={item.id}>
                     {item.name}
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
                 id="foreignLanguageLevelId"
                 name="foreignLanguageLevelId"
                 className="w-full p-3 border border-[#E6E5E4] rounded-md"
               >
                 <option value="">Seçiniz*</option>
                 {foreignLevel?.items.map((item) => (
                   <option key={item.id} value={item.id}>
                     {item.name}
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
        {Array.isArray(foreignLanguage) && foreignLanguage.map((lang: GetStudentForeignLanguageResponse, index: number) => (
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
                <p className="text-[11px] font-semibold">{lang.foreignLanguage.name}</p>
                <p className="text-[11px]">{lang.foreignLanguageLevel.name}</p>
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
                        onClick={() => handleDelete(lang.id)}
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
