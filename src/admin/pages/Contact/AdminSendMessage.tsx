import { BsPaperclip } from "react-icons/bs"
import { FaFaceGrin } from "react-icons/fa6"
import { HiPrinter } from "react-icons/hi"
import { HiOutlinePhoto } from "react-icons/hi2"
import { IoSend } from "react-icons/io5"
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import tobetoSendMessageService from "services/tobetoSendMessageService"
import { ToastContainer, toast } from "react-toastify"
import { AddTobetoSendMessageRequest } from "models/requests/tobeto-send-message/addTobetoSendMessageRequest"

type Props = {}

const AdminSendMessage = (props: Props) => {
  const validationSchema = Yup.object({
    receiverEmail: Yup.string().email('Geçerli bir e-posta adresi girin').required('Alıcı e-posta adresi gereklidir.'),
    receiverName: Yup.string().required("Alıcı ad soyad gereklidir."),
    subject: Yup.string().required('Konu gereklidir.'),
    content: Yup.string().required('Mesaj gereklidir.'),
  });

  const initialValues: AddTobetoSendMessageRequest = {
    subject: '',
    content: '',
    senderName: 'Pair3 Tobeto',
    senderEmail: 'info@tobeto.celebi.dev',
    receiverName: '',
    receiverEmail: '',
  };

  const handleSubmit = async (values: AddTobetoSendMessageRequest, { resetForm }: any) => {
    try {
      await tobetoSendMessageService.add(values);
      toast.success('Mesajınız başarıyla gönderildi!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Bir hata oluştu, lütfen tekrar deneyin.');
    }
    resetForm();
  };

  return (
    <div className="lg:w-4/5 flex h-full flex-col border-l border-stroke dark:border-strokedark">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ isSubmitting }) => (
          <Form className="overflow-auto w-full p-4">
            <div className="text-black">
              <div className="mb-2">
                <Field type="text" name="receiverEmail" id="receiverEmail" className="input input-bordered input-primary w-full" placeholder="Alıcı E-Mail Adresi" />
                <ErrorMessage name="receiverEmail" component="div" className="text-red-500" />
              </div>
              <div className="mb-2">
                <Field type="text" name="receiverName" id="receiverName" className="input input-bordered input-primary w-full" placeholder="Alıcı Ad Soyad" />
                <ErrorMessage name="receiverName" component="div" className="text-red-500" />
              </div>
              <div className="mb-2">
                <Field type="text" name="subject" id="subject" className="input input-bordered input-primary w-full" placeholder="Konu" />
                <ErrorMessage name="subject" component="div" className="text-red-500" />
              </div>
              <div className="mb-1">
                <Field as="textarea" id="content" name="content" rows={10} className="textarea textarea-bordered textarea-lg textarea-primary w-full" placeholder="Mesajınızı yazınız..." />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  Gönder
                  <IoSend className="w-5 h-5" />
                </button>
              </div>
              <div className="flex pl-2">
                <Link to={""} className="p-1 justify-center rounded cursor-pointer inline-flex m-1 hover:text-gray-400">
                  <FaFaceGrin className="w-8 h-8" />
                </Link>
                <Link to={""} className="p-1 justify-center rounded cursor-pointer inline-flex m-1 hover:text-gray-400">
                  <BsPaperclip className="w-8 h-8" />
                </Link>
                <Link to={""} className="p-1 justify-center rounded cursor-pointer inline-flex m-1 hover:text-gray-400">
                  <HiOutlinePhoto className="w-8 h-8" />
                </Link>
                <Link to={""} className="p-1 justify-center rounded cursor-pointer inline-flex m-1 hover:text-gray-400">
                  <HiPrinter className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </Form>)
        }
      </Formik>
      <ToastContainer />
    </div>
  )
}

export default AdminSendMessage