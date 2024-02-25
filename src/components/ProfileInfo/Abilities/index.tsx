import React, { useEffect, useState } from 'react';
import SelectInput from './SelectInput'; // SelectInput component'ini import et
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import abilityService from 'services/abilityService';
import { GetAbilityResponse } from 'models/responses/abilities/getAbilityResponse';

const Abilities = () => {
  const [selectedAbilities, setSelectedAbilities] = useState<string[]>([]);
  const [tempSelectedAbilities, setTempSelectedAbilities] = useState<string[]>([]);
  const [newAbility, setNewAbility] = useState<string>('');
  const [showCreateOption, setShowCreateOption] = useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [abilityToDelete, setAbilityToDelete] = useState<string | null>(null);

  const [abilities, setAbilities] = useState<GetAbilityResponse>({} as GetAbilityResponse);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAbilities();
  }, []);

  const fetchAbilities = async () => {
    setIsLoading(true); 
    const response = await abilityService.getById(localStorage.studentId);
    setAbilities(response.data as GetAbilityResponse); 
    setIsLoading(false); 
  };

  console.log("****************");
  console.log(abilities);
  console.log("****************");


  const abilitiesList = [
    "Muhasebe",
    "Aktif öğrenme",
    "Aktif Dinleme",
    "Uyum Sağlama",
    "Yönetim ve idare",
    "Reklam",
    "Algoritmalar",
    "Android (işletim Sistemi)",
    "Apache Ambari",
    "Uygulama Mağazası (IOS)",
    "Apple Sağlık Kiti",
    "Apple IOS",
    "Apple Xcode",
    "Uygulamalı Makine Öğrenimi",
    "Büyük Veri",
    "Blok Zinciri",
    "Bootstarp (Front-End Framework)",
    "Marka Yönetimi",
    "İletişim",
    "Pazarlama",
    "Building and Construction",
  ];
  
  const handleAbilitySelect = (ability: string) => {
    if (!tempSelectedAbilities.includes(ability)) {
      setTempSelectedAbilities([...tempSelectedAbilities, ability]);
    }
  };

  
  const handleSaveAbilities = async () => {
    const allAbilities = [...selectedAbilities, ...tempSelectedAbilities];

    for (const abilityName of allAbilities) {
        const request = { name: abilityName , studentId: localStorage.studentId};
        await abilityService.add(request);
    }

    await fetchAbilities();

    setTempSelectedAbilities([]);
    setNewAbility('');
  };

  const removeTempAbility = (ability: string) => {
    setTempSelectedAbilities(tempSelectedAbilities.filter((a) => a !== ability));
  };

  const handleDeleteAbility = async  () => {
    if (abilityToDelete) {
      await abilityService.delete(abilityToDelete); 
      await fetchAbilities(); 
      setAbilityToDelete(null);
      setShowConfirmationModal(false);
  }
  };

  const closeConfirmationModalHandler = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className=''>
      <div className=''>
        <h2>Yetkinlik</h2>
        <SelectInput
          options={abilitiesList}
          onChange={handleAbilitySelect}
          onRemove={removeTempAbility} 
          selected={tempSelectedAbilities}
        />
        <div className='relative z-0 mt-8'> 
          <Button color="green" onClick={handleSaveAbilities} className="z-0 bg-[#9933FF] border-[#9933FF] focus:ring-0 rounded-3xl text-white font-bold hover:bg-[#822BD9] hover:border-[#822BD9] enabled:hover:bg-[#822BD9]">
            Kaydet
          </Button>
        </div>
      </div>


      <div className='mt-4'>
        {
          isLoading ? (
            <div>Yükleniyor...</div>  
          ) : (
            <ul className='flex-col'>
              {abilities.map((ability) => (
                <li key={ability.id} className="w-full my-2 py-2 px-3 shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="flex-grow text-black font-medium py-1">{ability.name}</span>
                    <button
                      onClick={() => {
                        setAbilityToDelete(ability.id);
                        setShowConfirmationModal(true);
                      }}
                      className="rounded-full bg-[#FF4D4D] text-white p-1 hover:bg-[#CC4646] focus:outline-none focus:ring focus:border-blue-300 "
                    >
                      <RiDeleteBin5Line size={15} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )
        }
      </div>

      <Modal
        show={showConfirmationModal}
        size="md"
        onClose={closeConfirmationModalHandler}
        popup
      >
        <Modal.Header className="bg-white" />
        <Modal.Body className="bg-white ">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-red-700" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Seçilen yetkinliği silmek istediğinize emin misiniz?
            </h3>
            <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
              Daha sonra tekrardan listeden istediğiniz yetkinliği ekleyebilirsiniz.
            </p>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteAbility}>
                {"Evet"}
              </Button>
              <Button color="gray" onClick={closeConfirmationModalHandler}>
                Hayır
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Abilities;
