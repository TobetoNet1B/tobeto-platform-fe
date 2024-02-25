import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { Modal } from "flowbite-react";
import { GetAllSocialMediaResponse } from "models/responses/social-medias/getAllSocialMediaResponse";
import socialMediaService from "services/socialMediaService";
import studentSocialMediaService from "services/studentSocialMediaService";
import { AddStudentSocialMediaRequest } from "models/requests/student-social-medias/AddStudentSocialMediaRequest";
import { GetStudentSocialMediaResponse } from "models/responses/student-social-medias/getStudentSocialMediaResponse";
import { UpdateStudentSocialMediaRequest } from "models/requests/student-social-medias/UpdateStudentSocialMediaRequest";

const validationSchema = Yup.object().shape({
  socialMediaId: Yup.string().required("Doldurulması zorunlu alan*"),
  socialMediaUrl: Yup.string().required("Doldurulması zorunlu alan*"),
});

const SocialMedia: React.FC = () => {
  const [studentSocialMedia, setStudentSocialMedia] =
    useState<GetStudentSocialMediaResponse | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCardToUpdate, setSelectedCardToUpdate] = useState<
    number | null
  >(null);
  const [selectedSocialMediaName, setSelectedSocialMediaName] =
    useState<string>("");
  const [selectedSocialMediaId, setSelectedSocialMediaId] =
    useState<string>("");
  const [selectedSocialMediaUrl, setSelectedSocialMediaUrl] =
    useState<string>("");
  const [socialMedia, setSocialMedia] =
    useState<GetAllSocialMediaResponse | null>(null);

  const fetchSocialMedia = async () => {
    try {
      const result = await socialMediaService.getAll(0, 10);
      setSocialMedia(result.data as GetAllSocialMediaResponse);
    } catch (error) {
      console.error("Error fetching social media:", error);
    }
  };

  const fetchStudentSocialMedia = async () => {
    try {
      const result = await studentSocialMediaService.getById(
        localStorage.studentId
      );
      setStudentSocialMedia(result.data as GetStudentSocialMediaResponse);
    } catch (error) {
      console.error("Error fetching student social media:", error);
    }
  };

  useEffect(() => {
    fetchSocialMedia();
    fetchStudentSocialMedia();
  }, []);

  const openUpdateModal = (index: number) => {
    const selectedSocialMedia = studentSocialMedia?.socialMedia[index];
    if (selectedSocialMedia) {
      setSelectedSocialMediaId(selectedSocialMedia.id);
      setSelectedSocialMediaUrl(selectedSocialMedia.socialMediaUrl);
      setSelectedSocialMediaName(selectedSocialMedia.name);
      setIsModalOpen(true);
    }
  };

  const closeUpdateModal = () => {
    setSelectedCardToUpdate(null);
    setIsModalOpen(false);
  };

  const handleUpdateSubmit = async (
    values: { socialMediaId: string; socialMediaUrl: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const { socialMediaId, socialMediaUrl } = values;

      const requestData: UpdateStudentSocialMediaRequest = {
        id: selectedSocialMediaId,
        studentId: localStorage.studentId,
        socialMediaId: socialMediaId,
        socialMediaUrl: socialMediaUrl,
      };
      await studentSocialMediaService.update(requestData);
      await fetchStudentSocialMedia();
      resetForm();
      console.log("Veri başarıyla güncellendi!");
    } catch (error) {
      console.error("API isteği başarısız:", error);
    }
  };

  const handleUpdate = (index: number) => {
    openUpdateModal(index);
  };
  const handleSubmit = async (
    values: { socialMediaId: string; socialMediaUrl: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const { socialMediaId, socialMediaUrl } = values;
      const requestData: AddStudentSocialMediaRequest = {
        studentId: localStorage.studentId,
        socialMediaId: socialMediaId,
        socialMediaUrl: socialMediaUrl,
      };
      await studentSocialMediaService.add(requestData);
      await fetchStudentSocialMedia();
      resetForm();
      console.log("Veri başarıyla gönderildi!");
    } catch (error) {
      console.error("API isteği başarısız:", error);
    }
  };
  const handleHover = (index: number | null) => {
    setSelectedCardIndex(index);
  };

  const handleDelete = async (index: number) => {
    try {
      const socialMediaToDelete = studentSocialMedia?.socialMedia[index];
      if (socialMediaToDelete) {
        await studentSocialMediaService.delete(socialMediaToDelete.id);
        await fetchStudentSocialMedia();
        console.log("Social media item deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting social media item:", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ socialMediaId: "", socialMediaUrl: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="text-sm mt-5">
          <div className="flex mb-4">
            <div className="w-1/3 mr-2">
              <Field
                as="select"
                id="socialMediaId"
                name="socialMediaId"
                className="w-full p-3 border border-[#E6E5E4] rounded-md"
              >
                <option value="">Seçiniz*</option>
                {socialMedia?.items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="socialMediaId"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="w-2/3 ml-2">
              <Field
                type="text"
                id="socialMediaUrl"
                name="socialMediaUrl"
                placeholder="https://"
                className="w-full p-3 border border-[#B3A6C0] rounded-md"
              />
              <ErrorMessage
                name="socialMediaUrl"
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

      {studentSocialMedia?.socialMedia.map((item, index) => (
        <div key={index} className="mb-4">
          <h1 className="mt-5 mb-1 text-[18px] text-[#828282]">{item.name}</h1>
          <div
            className={`border rounded-md cursor-pointer flex justify-between items-center h-14 transition duration-300 ease-in-out`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            <div
              className={`flex-1 flex items-center cursor-pointer border rounded-md p-2 max-w-[800px] h-14 overflow-hidden overflow-ellipsis mr-4
 ${
   selectedCardIndex === index
     ? "hover:shadow-[2px_2px_5px_5px_rgba(153,51,255,0.3)] "
     : "hover:border-[#B3A6C0]"
 }
`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <p>{item.socialMediaUrl}</p>
              <p className="hidden">{item.id}</p>
            </div>
            <div className="flex items-around">
              <div className="h-7 w-7 bg-red-500 rounded-full flex items-center justify-center cursor-pointer mr-5">
                <RiDeleteBin5Line
                  onClick={() => handleDelete(index)}
                  className="cursor-pointer text-white text-lg "
                />
              </div>
              <div className="h-6 w-6 bg-black rounded-sm flex items-center justify-center cursor-pointer mr-7">
                <GoPencil
                  onClick={() => handleUpdate(index)}
                  className="cursor-pointer text-white text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <Modal show={isModalOpen} onClose={closeUpdateModal}>
        <div className="p-6 ">
          <h1 className="text-xl font-bold mb-4">Medya Hesabı Güncelleme</h1>
          <Formik
            initialValues={{
              socialMediaId: selectedSocialMediaId,
              socialMediaUrl: selectedSocialMediaUrl,
              socialMediaName: selectedSocialMediaName,
            }}
            validationSchema={validationSchema}
            onSubmit={handleUpdateSubmit}
          >
            {({ values, handleChange }) => (
              <Form className="text-sm mt-5">
                <div className="flex mb-4">
                  <div className="w-1/3 mr-2">
                    <Field
                      as="select"
                      id="socialMediaId"
                      name="socialMediaId"
                      value={selectedSocialMediaId}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#E6E5E4] rounded-md"
                    >
                      <option value="">Seçiniz*</option>
                      {socialMedia?.items.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="socialMediaId"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="w-2/3 ml-2">
                    <Field
                      type="text"
                      id="socialMediaUrl"
                      name="socialMediaUrl"
                      value={values.socialMediaUrl}
                      onChange={handleChange}
                      placeholder="https://"
                      className="w-full p-3 border border-[#B3A6C0]  rounded-md"
                    />
                    <ErrorMessage
                      name="socialMediaUrl"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-[#9933FF] text-white p-2 mr-5 rounded-full"
                  >
                    Güncelle
                  </button>
                  <button
                    type="button"
                    onClick={closeUpdateModal}
                    className="bg-gray-400 text-white p-2 rounded-full hover:bg-red-600"
                  >
                    Kapat
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <p className="text-[#C17DFD] text-[18px]">
        En fazla 3 adet medya seçimi yapılabilir.
      </p>
    </div>
  );
};
export default SocialMedia;