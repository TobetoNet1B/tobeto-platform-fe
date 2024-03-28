import { ErrorMessage, Field, Form, Formik } from 'formik'
import { AddAnnouncementRequest } from 'models/requests/announcements/addAnnouncementRequest';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import announcementService from 'services/announcementService';

import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Doldurulması zorunlu alan*"),
  description: Yup.string().required("Doldurulması zorunlu alan*"),
});

const AnnouncementAdd : React.FC = () => {
  const navigate = useNavigate();
  const initialValues = {
    title:"",
    description: "",

  };
  const handleSubmit = async (
    values: { title: string; description: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const { title, description } = values;
      const requestData: AddAnnouncementRequest = {
        title: title,
        description: description,
      };
      await announcementService.add(requestData);
      await toast.success('Duyuru başarıyla eklendi');

      resetForm();
      navigate('/admin/Announcement')
    } catch (error) {
      toast.error('Duyuru eklenemedi');
    }
  };
  return (
    <div>
        <div className="max-w-4xl mt-8 ml-5 mx-auto text-[#5a606b]">
        <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {(formikProps) => (
    <Form className="text-sm ml-3">
      <div>
        <div className="flex mb-3 ">
          <div className="w-1/2 mr-2">
            <label htmlFor="title" className="font-medium">Başlık*</label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Başlık"
              className="input input-bordered w-full"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="description" className="font-medium">Açıklama*</label>
            <Field
              type="text"
              id="description"
              name="description"
              placeholder="Açıklama"
              className="input input-bordered w-full"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className='btn btn-md px-5 rounded-full bg-bs_btn_bg hover:bg-bs_btn_hover_bg text-bs_btn_color'
        >
          Kaydet
        </button>
        <div>
          <Link to="/admin/Announcement">
            <p className="ml-3 mt-5 font-medium text-red-500">Listeye Dön...</p>
          </Link>
        </div>
      </div>
    </Form>
  )}
</Formik>

    </div>
    </div>
  )
}

export default AnnouncementAdd

