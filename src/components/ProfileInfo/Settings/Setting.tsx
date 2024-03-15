import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal } from 'flowbite-react';
import { BsExclamationCircle } from "react-icons/bs";
import { UpdateUserFromAuthRequest } from 'models/requests/users/updateUserFromAuthRequest';
import userService from 'services/userService';
import userFormAuthService from 'services/userFormAuthService';
import { jwtDecode } from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import { DeleteUserRequest } from 'models/requests/users/deleteUserRequest';
import axios from 'axios';
const Setting: React.FC = () => {

  interface CustomJwtPayload {
    [key: string]: any;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"?: string;
  }


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

  const handleSubmit = async (values: typeof initialValues) => {
    const updateData: UpdateUserFromAuthRequest = {
      id: localStorage.userId,
      password: values.oldPassword,
      newPassword: values.newPassword,
    };
    userFormAuthService.update(updateData)
      .then(response => {
        const data = response.data;
        const { token } = data.accessToken;
        localStorage.setItem('token', token);

        const decodedToken: CustomJwtPayload = jwtDecode(token);
        console.log(decodedToken);

        const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        if (userId) {
          localStorage.setItem('userId', userId);
          console.log("User ID found: " + userId);
        }
        console.log(response);
        toast.success('Şifre başarıyla değiştirildi');
      })
      .catch(error => {
        toast.error('Şifre hatalı!');
        console.error(error);
      });
    console.log(values);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteAccount = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Formun gönderilmesini engelle
    setIsDeleteModalOpen(true);
  };
  

  const confirmDeleteAccount = async () => {
    
    deleteUser(localStorage.userId);
    setIsDeleteModalOpen(false);
  };

  const deleteUser = async (userId:string) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:60805/api/Users`,
        data: { id: userId }
      });
      return response.data; // İsteğin sonucunu döndürür
    } catch (error) {
      throw error; // Hata durumunda hatayı yeniden fırlatır, çağıran kod bu hatayı işleyebilir.
    }
  };

  const cancelDeleteAccount = () => {
    setIsDeleteModalOpen(false);
  };



  return (
    <div className="">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="grid grid-cols-3 gap-4 mt-5 ml-5">
          <div>
            <label htmlFor="oldPassword" className="text-sm font-medium  block mb-1 text-[#828282]">
              Eski Şifre*
            </label>
            <Field
              type="password"
              id="oldPassword"
              name="oldPassword"
              placeholder="Eski Şifre"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full "
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
          <ToastContainer />
        </Form>
      </Formik>
      <Modal show={isDeleteModalOpen} onClose={cancelDeleteAccount}>
        <BsExclamationCircle size={50} className='m-3 border-4 border-[#f2e2ff] rounded-full text-[#8C2EE8]' />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Hesabınızı silmek istediğinize emin misiniz?</h2>
          <p className="mb-4 text-[#828282]">Hesabınızı silme işleminden sonrasında bilgileriniz geri alınamaz şekilde silinecektir.</p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={cancelDeleteAccount}
              className="bg-[#b4b3b3] w-1/2 text-white py-2 px-4 rounded-full hover:bg-[#8C2EE8] focus:outline-none focus:ring focus:border-green-300"
            >
              Hayır
            </button>

            <button
              onClick={confirmDeleteAccount}
              className="bg-red-400 w-1/2 text-white py-2 px-4 rounded-full hover:bg-[#8C2EE8] focus:outline-none focus:ring focus:border-red-300"
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
