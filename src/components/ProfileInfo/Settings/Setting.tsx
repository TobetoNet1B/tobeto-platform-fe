import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal } from 'flowbite-react';
import { BsExclamationCircle } from "react-icons/bs";

const Setting: React.FC = () => {
  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required('Doldurulması zorunlu alan*'),
    newPassword: Yup.string()
      .min(6, 'Şifre en az 6 karakter olmalıdır')
      .required('Doldurulması zorunlu alan*'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), undefined], ' Girilen şifreler eşleşmiyor kontrol ediniz..')
      .required('Doldurulması zorunlu alan*'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Handle form submission, e.g., password change logic
    console.log(values);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    // Perform account deletion logic
    setIsDeleteModalOpen(false);
  };

  const cancelDeleteAccount = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="">
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="grid grid-cols-3 gap-4 mt-5 ">
        <div>
          <label htmlFor="oldPassword" className="text-sm font-medium  block mb-1 text-[#828282]">
            Eski Şifre*
          </label>
          <Field
            type="password"
            id="oldPassword"
            name="oldPassword"
            placeholder="Eski Şifre"
            className="p-2 border rounded w-full"
          />
          <ErrorMessage name="oldPassword" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <label htmlFor="newPassword" className="text-sm font-medium  block mb-1 text-[#828282]">
          Yeni Şifre*
          </label>
          <Field
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Yeni Şifre"
            className="p-2 border rounded w-full"
          />
          <ErrorMessage name="newPassword" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="text-sm font-medium  block mb-1 text-[#828282]">
          Yeni Şifre Tekrar*
          </label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Yeni Şifre Tekrar"
            className="p-2 border rounded w-full "
          />
          <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="col-span-3 mt-5 flex justify-between">
            <button
              type="submit"
              className="flex-1 bg-[#8C2EE8] text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Şifre Değiştir
            </button>

            <button
              onClick={handleDeleteAccount}
              className="flex-1 ml-4 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            >
              Üyeliği Sonlandır
            </button>
          </div>
       
      </Form>
    </Formik>
    <Modal show={isDeleteModalOpen} onClose={cancelDeleteAccount}>
    <BsExclamationCircle size={40} className='m-3 text-[#8C2EE8]' />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Hesabınızı silmek istediğinize emin misiniz?</h2>
          <p className="mb-4">Hesabınızı silme işleminden sonrasında bilgileriniz geri alınamaz şekilde silinecektir.</p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={cancelDeleteAccount}
              className="bg-[#828282] w-1/2 text-white py-2 px-4 rounded-full hover:bg-[#8C2EE8] focus:outline-none focus:ring focus:border-green-300"
            >
              Hayır
            </button>

            <button
              onClick={confirmDeleteAccount}
              className="bg-[#828282] w-1/2 text-white py-2 px-4 rounded-full hover:bg-[#8C2EE8] focus:outline-none focus:ring focus:border-red-300"
            >
              Evet
            </button>
          </div>
        </div>
      </Modal>
  </div>
  );
};

export default Setting;
