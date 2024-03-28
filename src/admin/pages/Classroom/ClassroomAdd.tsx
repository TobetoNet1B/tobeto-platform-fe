import { ErrorMessage, Field, Form, Formik } from 'formik'
import { AddClassroomRequest } from 'models/requests/classrooms/addClassroomRequest';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import classroomService from 'services/classroomService';
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  classSize: Yup.number().required("Doldurulması zorunlu alan*").min(10,"Sınıf mevcutu en az 10 olmalıdır."),
  name: Yup.string().required("Doldurulması zorunlu alan*"),
});

const ClassroomAdd : React.FC = () => {
  const navigate = useNavigate();
  const initialValues = {
    classSize:0,
    name: "",

  };
  const handleSubmit = async (
    values: { classSize: number; name: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const { classSize, name } = values;
      const requestData: AddClassroomRequest = {
        classSize: classSize,
        name: name,
      };
      await classroomService.add(requestData);

      resetForm();
      toast.success('Sınıf başarıyla eklendi');
      navigate('/admin/Classroom')
    } catch (error) {
      toast.error('Sınıf eklenemedi');
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
      <Form className="text-sm ml-3">
            <div className="flex mb-3 ">
              <div className="w-1/2 mr-2 ">
              <label htmlFor="name" className="font-medium">Sınıf Adı*</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tobeto"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                
                 <label htmlFor="classSize" className="font-medium ">Öğrenci Sayısı*</label>
                <Field
                  type={"number"}
                  id="classSize"
                  name="classSize"
                  placeholder="0"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="classSize"
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
        <Link to={`/admin/Classroom`}>
        <p className="ml-3 mt-5 font-medium text-red-500 ">
          Listeye Dön...
        </p>
      </Link>
        <ToastContainer />
      </Form>
    </Formik>
    </div>
    </div>
  )
}

export default ClassroomAdd

