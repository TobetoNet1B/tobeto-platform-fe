import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { GetAllClassroomResponse } from "models/responses/classrooms/getAllClassroomResponse";
import classroomService from "services/classroomService";
import { UpdateClassroomRequest } from "models/requests/classrooms/updateClassroomRequest";
import { Button, Modal } from "flowbite-react";
import { toast } from "react-toastify";
type Props = {};

const Classrom = (props: Props) => {
  const [classrooms, setClassrooms] = useState<GetAllClassroomResponse | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedClassroom, setSelectedClassroom] = useState<any>(null);
  const [formData, setFormData] = useState<UpdateClassroomRequest>({
    id: "",
    name: "",
    classSize: 0,
  });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const fetchClassroom = async () => {
    try {
      const result = await classroomService.getAll(0, 10);
      setClassrooms(result.data as GetAllClassroomResponse);
    } catch (error) {
      console.error("Error fetching classroom:", error);
    }
  };

  useEffect(() => {
    fetchClassroom();
  }, []);

  const openModal = (classroom: UpdateClassroomRequest) => {
    setSelectedClassroom(classroom);
    setFormData(classroom);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedClassroom(null);
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const openDeleteModalHandler = (classroom: any) => {
    setSelectedClassroom(classroom);
    setOpenDeleteModal(true);
  };

  const closeDeleteModalHandler = () => {
    setSelectedClassroom(null);
    setOpenDeleteModal(false);
  };

  const handleDelete = async () => {
    console.log(selectedClassroom?.id);
    try {
      await classroomService.delete(selectedClassroom?.id);
      fetchClassroom();
      setOpenDeleteModal(false);
    } catch (error) {
      toast.error('Sınıf silinemedi');
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await classroomService.update(formData);
      toast.success('Sınıf başarıyla güncellendi.');
      closeModal();
      fetchClassroom();
    } catch (error) {
      toast.error('Sınıf güncellenemedi.');
    }
  };
  return (
    <>
      <Link to={`/admin/ClassroomAdd`}>
        <button
          type="button"
          className="ml-3 text-white bg-[#1C64F2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Ekle
        </button>
      </Link>
      <div className="ml-3 mt-5 w-11/12 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sınıf Adı
              </th>
              <th scope="col" className="px-6 py-3">
                Sınıf Boyutu
              </th>
              <th scope="col" className="px-6 py-3">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody>
            {classrooms?.items.map((classroom) => (
              <tr
                key={classroom.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {classroom.name}
                </td>
                <td className="px-6 py-4">{classroom.classSize}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openModal(classroom)}
                    className="rounded-full bg-[#9933FF] text-white p-1 hover:bg-[#7F22CC] focus:outline-none focus:ring focus:border-blue-300 mb-2"
                  >
                    <GoPencil size={15} />
                  </button>
                  <button
                    onClick={() => openDeleteModalHandler(classroom)}
                    className="ml-2 rounded-full bg-[#FF4D4D] text-white p-1 hover:bg-[#CC4646] focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <RiDeleteBin5Line size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-lg font-semibold mb-4">Sınıf Güncelle</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sınıf Adı
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="classSize"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sınıf Boyutu
                </label>
                <input
                  type="number"
                  id="classSize"
                  name="classSize"
                  value={formData.classSize}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={closeModal}
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Güncelle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Modal
        show={openDeleteModal}
        size="md"
        onClose={closeDeleteModalHandler}
        popup
      >
        <Modal.Header className="bg-white" />
        <Modal.Body className="bg-white ">
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Seçilen sınıfı silmek istediğinize emin misiniz ?
            </h3>
            <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
              Bu işlem geri alınamaz.
            </p>
            <div className="flex justify-center gap-4 bg-white">
              <Button color="failure" onClick={handleDelete}>
                {"Evet"}
              </Button>
              <Button color="gray" onClick={closeDeleteModalHandler}>
                Hayır
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Classrom;
