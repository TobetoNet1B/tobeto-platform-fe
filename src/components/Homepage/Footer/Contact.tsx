import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AddTobetoContactRequest } from 'models/requests/tobeto-contact/addTobetoContactRequest';
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import tobetoContactService from 'services/tobetoContactService';
import { object, string } from 'yup';

type Props = {}

const Contact = (props: Props) => {
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   email: '',
  //   message: ''
  // });

  // const { fullName, email, message } = formData;

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const isFormValid = fullName !== '' && email !== '' && message !== '';

  const initialValues: AddTobetoContactRequest  = {
    fullName: '',
    email: '',
    message: '',
    isReaded: false
  };

  const validationSchema = object({
    email: string().email('Geçersiz e-posta')
  });

  const handleSubmit = async (values: AddTobetoContactRequest) => {
    try {
      console.log(values);
      
      await tobetoContactService.add(values);
      toast.success('Mesajınız başarıyla gönderildi!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  };

  return (
    <div className='bg-white rounded-xl pt-0 mt-20 mb-5 overflow-hidden mx-auto max-w-6xl'>
      <div className="container mx-auto [@media(max-width:640px)]:!max-w-full px-[calc(1.5rem*0.5)] pt-10 xl:max-w-[1140px] relative">
        <div className="flex-wrap mx-[calc(1.5rem*-0.5)] flex">
          <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto lg:w-[50%] order-first relative">
            <div className="relative py-12 px-8 bg-white shadow-[0_20px_80px_-16px_rgba(28,25,23,.04)] rounded-2xl">
              <div className="w-full justify-center flex">
                <span className="badge bg-[#9933ff] font-medium h-7 text-white">İletişime Geçin</span>
              </div>
              <div className="w-full justify-center flex">
                <h3 className="my-6 xl:text-4xl text-[calc(1.35rem+1.2vw)] font-bold">İletişim Bilgileri</h3>
              </div>
              <table className="table">
                <tbody>
                  <tr className="">
                    <td className='font-bold'>Firma Adı:</td>
                    <td>TOBETO</td>
                  </tr>
                  <tr className="">
                    <td className='font-bold'>Firma Unvan: </td>
                    <td>
                      Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret Anonim
                      Şirketi
                    </td>
                  </tr>
                  <tr className="">
                    <td className='font-bold'>Vergi Dairesi:</td>
                    <td>Beykoz</td>
                  </tr>
                  <tr className="">
                    <td className='font-bold'>Vergi No: </td>
                    <td>1050250859</td>
                  </tr>
                  <tr className="">
                    <td className='font-bold'>Telefon:</td>
                    <td>(0216) 331 48 00</td>
                  </tr>
                  <tr className="">
                    <td className='font-bold'>E-Posta: </td>
                    <td>info@tobeto.com</td>
                  </tr>
                  <tr className="">
                    <td className='font-bold'>Adres:</td>
                    <td>
                      Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B
                      Blok Kat:3 34805, Beykoz/İstanbul
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="mt-20 table">
                <tbody>
                  <tr className="">
                    <td className='font-bold'>
                      İstanbul Kodluyor için Telefon:
                    </td>
                    <td>(0216) 969 22 40</td>
                  </tr>
                  <tr className="">
                    <td className='font-bold'>
                      İstanbul Kodluyor için E-Posta:{" "}
                    </td>
                    <td>istanbulkodluyor@tobeto.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 basis-auto w-full lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto lg:w-[50%] order-first relative">
            <div className="relative py-12 px-8 bg-white shadow-[0_20px_80px_-16px_rgba(28,25,23,.04)] rounded-2xl text-center">
              <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form>
                  <span className="badge bg-[#9933ff] font-medium h-7 text-white">Mesaj Bırakın</span>
                  <h3 className="my-6 xl:text-4xl text-[calc(1.35rem+1.2vw)] font-bold">İletişim Formu</h3>
                  <Field name="fullName"  className="block w-full py-4 px-6 text-sm font-normal border-[1px] border-solid border-[#e7e5e4] rounded-md appearance-none !mb-6 input" type="text" placeholder="Adınız Soyadınız" />
                  <Field name="email" className="block w-full py-4 px-6 text-sm font-normal border-[1px] border-solid border-[#e7e5e4] rounded-md appearance-none !mb-6 input" type="email" placeholder="E-Mail" />
                  <ErrorMessage name="email" component="div" />
                  <Field name="message"  className="block w-full py-4 px-6 text-sm font-normal border-[1px] border-solid border-[#e7e5e4] rounded-md appearance-none !mb-6 textarea" as="textarea" cols={30} rows={10} placeholder="Mesajınız" />
                  <div className='text-[11px]'>
                    Yukarıdaki form ile toplanan kişisel verileriniz Enocta tarafından
                    talebinize dair işlemlerin yerine getirilmesi ve paylaşmış olduğunuz
                    iletişim adresi üzerinden tanıtım, bülten ve pazarlama içerikleri
                    gönderilmesi amacıyla
                    <Link to={"https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni"} target="_blank" className="text-bs_link_color">
                      {" "}Aydınlatma Metni{" "}
                    </Link>
                    çerçevesinde işlenebilecektir.
                  </div>
                  <div style={{ margin: "30px auto", display: "flex", justifyContent: "center" }}>
                    <div>
                      <div style={{ width: 304, height: 78 }}>
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            width={304}
                            height={78}
                            role="presentation"
                            name="a-vc77w28osmx9"
                            frameBorder={0}
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdXItghAAAAANPUfYw81TI55i6vggSCUVNIawnM&co=aHR0cHM6Ly90b2JldG8uY29tOjQ0Mw..&hl=tr&type=image&v=vj7hFxe2iNgbe-u95xTozOXW&theme=light&size=normal&badge=bottomright&cb=97q2dx5zg8t9"
                          />
                        </div>
                        <textarea
                          style={{
                            width: 250,
                            height: 40,
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: 0,
                            resize: "none",
                            display: "none"
                          }}
                          defaultValue={""}
                        />
                      </div>
                      <iframe style={{ display: "none" }} />
                    </div>
                  </div>
                  <button type="submit" className={`btn bg-[#9933ff] text-white hover:bg-[#a64dff] ${true ? '' : 'cursor-not-allowed'}`} >
                    Gönder
                  </button>
                  <ToastContainer />
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact