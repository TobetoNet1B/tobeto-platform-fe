import React, { useState, useEffect } from 'react';
import Uppy from '@uppy/core';
import { DashboardModal } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/status-bar/dist/style.css';
import { IoCloudDownloadOutline, IoCloudUploadOutline, IoTrashOutline } from 'react-icons/io5';

type UploadedFile = {
  id: string;
  name: string;
  type: string | undefined;
  uploadURL: string;
  data: Blob | File;
};

const MyCertificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [uppy, setUppy] = useState<Uppy | null>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  useEffect(() => {
    const uppyInstance = new Uppy({
      meta: { type: 'avatar' },
      restrictions: { maxNumberOfFiles: 2 },
      autoProceed: false,
    });

    uppyInstance.on('complete', (result) => {
      // Yükleme tamamlandığında dosyaları state'e ekle
      setFiles(result.successful.map(file => ({
        id: file.id,
        name: file.name,
        type: file.type,
        uploadURL: file.uploadURL,
        data: file.data,
      })));
    });

    setUppy(uppyInstance);

    return () => uppyInstance.close(); // Clean up Uppy instance on unmount
  }, []);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="">

      <div>
        <h5 className='text-lg mb-2 text-[#9933FF]'>&ensp;Sertifikalarım</h5>
        <div className="bg-[#FBF9FC] rounded-lg px-4 ">
          <div className="p-12 border-2 border-dashed border-[#A486C3] flex flex-col justify-center items-center  rounded-lg">
            {/* Buton */}
            <button
              className="border-2 border-dashed border-[#9933FF] rounded-full p-4 text-purple-500 bg-[#F1E3FF]"
              onClick={toggleModal}
            >
              <IoCloudUploadOutline className='text-4xl text-[#9933FF]' />
            </button>
            {/* Butonun altındaki metin */}
            <h5 className='mt-2'>Dosya Yükle</h5>
          </div>
        </div>

        {/* Yüklenen Dosyalar Listesi */}
        <div className='mt-4'>
          {files.length > 0 && (
            <div className='overflow-hidden overflow-x-auto border border-gray-100 rounded'>
              <table className='min-w-full text-sm divide-y divide-gray-200'>
                <thead>
                  <tr className='bg-gray-50'>
                    <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>Dosya Adı</th>
                    <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>Dosya Türü</th>
                    <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>Tarih</th>
                    <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>İşlem</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {files.map(file => (
                    <tr key={file.id}>
                      <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>{file.name}</td>
                      <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>{file.type}</td>
                      <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>{new Date().toLocaleDateString()}</td>
                      <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                        <a href={file.uploadURL} download={file.name}>
                          <IoCloudDownloadOutline className='inline-block w-5 h-5 mr-2 text-blue-500' />
                        </a>
                        <button onClick={() => {/* Silme işlevi */ }}>
                          <IoTrashOutline className='inline-block w-5 h-5 text-red-500' />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>


        {/* Uppy Modal */}
        {uppy && (
          <DashboardModal
            uppy={uppy}
            closeModalOnClickOutside
            open={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            proudlyDisplayPoweredByUppy={false}
            locale={{
              strings: {
                dropPasteFiles: 'Sürükleyip bırak, yapıştır veya %{browse}',
                browseFiles: 'gözat',
              },
            }}
          />
        )}
      </div>

    </div>
  );
};

export default MyCertificates;
