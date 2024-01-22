import React, { useState } from 'react';
import SelectInput from './SelectInput'; // SelectInput component'ini import et
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Abilities = () => {
  const [selectedAbilities, setSelectedAbilities] = useState<string[]>([]);
  const [tempSelectedAbilities, setTempSelectedAbilities] = useState<string[]>([]);
  const [newAbility, setNewAbility] = useState<string>('');
  const [showCreateOption, setShowCreateOption] = useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [abilityToDelete, setAbilityToDelete] = useState<string | null>(null);


  const abilitiesList = [
    "Ateş Toplama",
    "Su Manipülasyonu",
    "Hava Kontrolü",
    "Toprak Bükmek",
    "Telepati",
    "Süper Hız",
    "Görünmezlik",
    "Telekinezi",
    "Şifa Gücü",
    "Ses Manipülasyonu",
    "Zihin Okuma",
    "Şekil Değiştirme",
    "Enerji Patlaması",
    "Zaman Dondurma",
    "Elektrik Üretme"
  ];
  // Geçici olarak yetenekleri seçme işlemi
  const handleAbilitySelect = (ability: string) => {
    if (!tempSelectedAbilities.includes(ability)) {
      setTempSelectedAbilities([...tempSelectedAbilities, ability]);
    }
  };

  // Seçimleri kalıcı olarak kaydetme işlemi
  const handleSaveAbilities = () => {
    setSelectedAbilities([...selectedAbilities, ...tempSelectedAbilities]);
    setTempSelectedAbilities([]); // Geçici listeyi temizle
  };

  // Seçimi geçici listeden kaldırma işlevi
  const removeTempAbility = (ability: string) => {
    setTempSelectedAbilities(tempSelectedAbilities.filter((a) => a !== ability));
  };

  const handleNewAbilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAbility(event.target.value);
  };

  const handleCreateNewAbility = () => {
    if (newAbility.trim() !== '') {
      setSelectedAbilities([...selectedAbilities, newAbility]);
      setNewAbility('');
      setShowCreateOption(false);
    }
  };

  const handleDeleteAbility = () => {
    if (abilityToDelete) {
      setSelectedAbilities(selectedAbilities.filter((ability) => ability !== abilityToDelete));
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
        {/* SelectInput component'ini güncellenmiş prop'larla kullan */}
        <SelectInput
          options={abilitiesList}
          onChange={handleAbilitySelect}
          onRemove={removeTempAbility} // Kaldırma işlevini SelectInput'a iletiyoruz
          selected={tempSelectedAbilities}
        />
        {/* Kaydet butonu */}
        <div className='relative z-0 mt-8'> {/* "Kaydet" butonu için relative ve z-index eklendi */}
          <Button color="green" onClick={handleSaveAbilities} className="z-0 bg-[#9933FF] border-[#9933FF] focus:ring-0 rounded-3xl text-white font-bold hover:bg-[#822BD9] hover:border-[#822BD9] enabled:hover:bg-[#822BD9]">
            Kaydet
          </Button>
        </div>
      </div>
      <div className='mt-4'>
        <ul className='flex-col'>
          {selectedAbilities.map((selectedAbility) => (
            <li key={selectedAbility} className="w-full my-2 py-2 px-3 shadow-lg">
              <div className="flex justify-between items-center">
                <span className="flex-grow text-black font-medium py-1">{selectedAbility}</span>
                <button
                  onClick={() => {
                    setAbilityToDelete(selectedAbility);
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
