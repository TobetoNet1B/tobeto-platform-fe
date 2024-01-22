import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { Modal } from "flowbite-react";

interface Card {
  socialMedia: string;
  url: string;
}

const initialValues: Card = {
  socialMedia: "",
  url: "",
};

const validationSchema = Yup.object({
  socialMedia: Yup.string().required("Bu alan boş bırakılamaz"),
  url: Yup.string().required("Bu alan boş bırakılamaz"),
});
const SocialMediaOptions = [
  "Instagram",
  "Github",
  "Twitter",
  "LinkedIn",
  "Medium",
];
const SocialMedia: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCardToUpdate, setSelectedCardToUpdate] = useState<
    number | null
  >(null);
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  const openUpdateModal = (index: number) => {
    setSelectedCardToUpdate(index);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedCardToUpdate(null);
    setIsModalOpen(false);
  };

  const handleUpdateModalSubmit = (values: Card) => {
    if (selectedCardToUpdate !== null) {
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards[selectedCardToUpdate] = {
          socialMedia: values.socialMedia,
          url: values.url,
        };
        return updatedCards;
      });

      closeUpdateModal();
    }
  };
  const handleSubmit = (
    values: Card,
    { resetForm }: { resetForm: () => void }
  ) => {
    setCards((prevCards) => [
      ...prevCards,
      {
        socialMedia: values.socialMedia,
        url: values.url,
      },
    ]);
    resetForm();
  };
  const handleHover = (index: number | null) => {
    setSelectedCardIndex(index);
  };
  const handleDelete = (index: number) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const handleUpdate = (index: number) => {
    openUpdateModal(index);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="text-sm mt-5">
          <div className="flex mb-4">
            <div className="w-1/3 mr-2">
              <Field
                as="select"
                id="socialMedia"
                name="socialMedia"
                className="w-full p-3 border border-[#E6E5E4]  rounded-md"
              >
                <option value="">Seçiniz*</option>
                {SocialMediaOptions.map((SocialMediaOptions) => (
                  <option key={SocialMediaOptions} value={SocialMediaOptions}>
                    {SocialMediaOptions}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="socialMedia"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="w-2/3 ml-2">
              <Field
                type="text"
                id="url"
                name="url"
                placeholder="https://"
                className="w-full p-3 border border-[#B3A6C0]  rounded-md"
              />
              <ErrorMessage
                name="url"
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
      {cards.map((card, index) => (
        <div key={index} className="mb-4">
          <h1 className="mt-5 mb-1 text-[18px] text-[#828282]">
            {card.socialMedia}
          </h1>
          <div
            className={`border rounded-md cursor-pointer flex justify-between items-center h-14 transition duration-300 ease-in-out`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
        <div
 className={`flex-1 flex items-center cursor-pointer border rounded-md p-2 max-w-[800px] h-14 overflow-hidden overflow-ellipsis mr-4
 ${selectedCardIndex === index ? "hover:shadow-[2px_2px_5px_5px_rgba(153,51,255,0.3)] " : "hover:border-[#B3A6C0]"}
`}
  onMouseEnter={() => handleHover(index)}
  onMouseLeave={() => handleHover(null)}
>
  <p>{card.url}</p>
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
              socialMedia:
                selectedCardToUpdate !== null
                  ? cards[selectedCardToUpdate].socialMedia
                  : "",
              url:
                selectedCardToUpdate !== null
                  ? cards[selectedCardToUpdate].url
                  : "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleUpdateModalSubmit}
          >
            <Form className="text-sm mt-5">
              <div className="flex mb-4">
                <div className="w-1/3 mr-2">
                  <Field
                    as="select"
                    id="socialMedia"
                    name="socialMedia"
                    className="w-full p-3 border border-[#E6E5E4]  rounded-md"
                  >
                    <option value="">Seçiniz*</option>
                    {SocialMediaOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="socialMedia"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-2/3 ml-2">
                  <Field
                    type="text"
                    id="url"
                    name="url"
                    placeholder="https://"
                    className="w-full p-3 border border-[#B3A6C0]  rounded-md"
                  />
                  <ErrorMessage
                    name="url"
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
