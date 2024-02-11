import React, { useState, useEffect } from 'react';
import Uppy from '@uppy/core';
import { DashboardModal } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/status-bar/dist/style.css';
import { IoCloudDownloadOutline, IoCloudUploadOutline, IoTrashOutline } from 'react-icons/io5';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import certificateService from 'services/certificateService';
import { GetCertificateResponse } from 'models/responses/certificates/getCertificateResponse';
const cloudinaryConfig = {
  cloudName: 'dquj67sue',
  uploadPreset: 'mafzjs3w',
};

type UploadedFile = {
  id: string;
  name: string;
  fileType: string ;
  fileUrl: string;
};

const MyCertificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [uppy, setUppy] = useState<Uppy | null>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  //const [certificates, setCertificates] = useState<UploadedFile[]>([]); // Yeni state: Kaydedilmiş sertifikalar
  const [certificates, setCertificates] = useState<GetCertificateResponse>({} as GetCertificateResponse);
  useEffect(() => {
    const uppyInstance = new Uppy({
      meta: { type: 'avatar' },
      restrictions: { maxNumberOfFiles: 2 },
      autoProceed: false,
    });

    uppyInstance.on('complete', (result) => {
      const uploadPromises = result.successful
        .filter(file => file.data instanceof File)
        .map(file => uploadToCloudinary(file.data as File));

      Promise.all(uploadPromises)
        .then(uploadedFiles => {
          setFiles(prevFiles => [...prevFiles, ...uploadedFiles]);
          // Backend'e kayıt için ekstra işlemler
          uploadedFiles.forEach(file => {
            certificateService.add({
              name: file.name,
              fileType: "."+file.fileType,
              fileUrl: file.fileUrl,
              studentId: localStorage.studentId,
            }).then(() => {
              console.log('Sertifika başarıyla kaydedildi.');
            }).catch(err => {
              console.log(file.name,file.fileType,file.fileUrl,localStorage.studentId);
              
              console.error('Sertifika kaydedilirken bir hata oluştu:', err);
            });
          });
        });
    });

    fetchCertificates();
    setUppy(uppyInstance);
    return () => uppyInstance.close(); // Clean up Uppy instance on unmount
  }, []);

  const uploadToCloudinary = (file: File): Promise<UploadedFile> => {
    const url = `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`;
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset); // Bu değeri Cloudinary Yönetim Konsolu'ndan alın
  
    return fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Cloudinary yükleme başarısız');
      }
      console.log(response);
      setModalOpen(false);
      return response.json();      
    })
    .then(data => {
      console.log(data);
      return {
        id: data.public_id,
        name: data.original_filename,
        fileType: data.format,
        fileUrl: data.secure_url,
      };
    })
    .catch(err => {
      console.error('Cloudinary yükleme hatası:', err);
      throw err;
    });
  };
  
  const fetchCertificates = () => {
    certificateService.getById(localStorage.studentId)
      .then(response => {
        setCertificates(response.data as GetCertificateResponse); // Backend'den alınan sertifikaları state'e kaydet
      })
      .catch(err => {
        console.error('Sertifikalar çekilirken hata oluştu:', err);
      });
  };

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div>
      <div>
        <h5 className='text-lg mb-2 text-[#9933FF]'>&ensp;Sertifikalarım</h5>
        <div className="bg-[#FBF9FC] rounded-lg px-4 ">
          <div className="p-12 border-2 border-dashed border-[#A486C3] flex flex-col justify-center items-center  rounded-lg">
            <button
              className="border-2 border-dashed border-[#9933FF] rounded-full p-4 text-purple-500 bg-[#F1E3FF]"
              onClick={toggleModal}
            >
              <IoCloudUploadOutline className='text-4xl text-[#9933FF]' />
            </button>
            <h5 className='mt-2'>Dosya Yükle</h5>
          </div>
        </div>

        <div className='mt-4'>
        <h5 className='text-lg mb-2 text-[#9933FF]'>&ensp;Kaydedilmiş Sertifikalarım</h5>
        {certificates.length > 0 && (
          <div className='overflow-hidden overflow-x-auto border border-gray-100 rounded'>
            <table className='min-w-full text-sm divide-y divide-gray-200'>
              <thead>
                <tr className='bg-gray-50'>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>Dosya Adı</th>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>Dosya Türü</th>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>Yükleme Tarihi</th>
                  <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>İşlem</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {certificates.map(certificate => (
                  <tr key={certificate.id}>
                    <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>{certificate.name}</td>
                    <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>{certificate.fileType}</td>
                    <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>{new Date().toLocaleDateString()}</td>
                    <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                      <a href={certificate.fileUrl} target="_blank" rel="noopener noreferrer">
                        <IoCloudDownloadOutline className='inline-block w-5 h-5 mr-2 text-blue-500' />
                      </a>
                        <button onClick={() => {/* Silme işlevi buraya */ }}>
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
