import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { Button, Modal } from "flowbite-react";
import { toast } from "react-toastify";
import { GetAllAnnouncementResponse } from "models/responses/announcements/getAllAnnouncementResponse";
import { UpdateAnnouncementRequest } from "models/requests/announcements/updateAnnouncementRequest";
import announcementService from "services/announcementService";
import { Link } from "react-router-dom";
type Props = {};

const AnnouncementList = (props: Props) => {
  const [announcement, setAnnouncement] = useState<GetAllAnnouncementResponse | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);
  const [formData, setFormData] = useState<UpdateAnnouncementRequest>({
    id: "",
    title: "",
    description: ""
  });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const fetchAnnouncement = async () => {
    try {
      const result = await announcementService.getAll(0, 10);
      setAnnouncement(result.data as GetAllAnnouncementResponse);
    } catch (error) {
      console.error("Error fetching classroom:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const openModal = (announcement: UpdateAnnouncementRequest) => {
    setSelectedAnnouncement(announcement);
    setFormData(announcement);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedAnnouncement(null);
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const openDeleteModalHandler = (announcement: any) => {
    setSelectedAnnouncement(announcement);
    setOpenDeleteModal(true);
  };

  const closeDeleteModalHandler = () => {
    setSelectedAnnouncement(null);
    setOpenDeleteModal(false);
  };

  const handleDelete = async () => {
    console.log(selectedAnnouncement?.id);
    try {
      await announcementService.delete(selectedAnnouncement?.id);
      fetchAnnouncement();
      setOpenDeleteModal(false);
    } catch (error) {
      toast.error('Duyuru silinemedi');
    }
  };
  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await announcementService.update(formData);
 
      closeModal();
      fetchAnnouncement();
    } catch (error) {
      toast.error('Duyuru güncellenemedi.');
    }
  };
  return (
    <>
     <Link to="/admin/AnnouncementAdd">
  <button
    type="button"
    className="ml-3 text-white bg-[#1C64F2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    Ekle
  </button>
</Link>
      <div className="ml-3 mt-5 w-11/12 shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Başlık
        </th>
        <th scope="col" className="px-6 py-3">
          Açıklama
        </th>
        <th scope="col" className="px-6 py-3">
          İşlemler
        </th>
      </tr>
    </thead>
    <tbody>
      {announcement?.items.map((announcement) => (
        <tr
          key={announcement.id}
          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {announcement.title}
          </td>
          <td className="px-6 py-4">
            {announcement.description}
          </td>
          <td className="px-6 py-4 space-x-2 w-[120px]">
            <button
              onClick={() => openModal(announcement)}
              className="rounded-full bg-[#9933FF] text-white p-1 hover:bg-[#7F22CC] focus:outline-none focus:ring focus:border-blue-300 mb-2"
            >
              <GoPencil size={15} />
            </button>
            <button
              onClick={() => openDeleteModalHandler(announcement)}
              className="rounded-full bg-[#FF4D4D] text-white p-1 hover:bg-[#CC4646] focus:outline-none focus:ring focus:border-blue-300"
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
            <h2 className="text-lg font-semibold mb-4">Duyuru Güncelle</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Başlık
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Açıklama
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
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
              Seçilen duyuruyu silmek istediğinize emin misiniz ?
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

export default AnnouncementList;
