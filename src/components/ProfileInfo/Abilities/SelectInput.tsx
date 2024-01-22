import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { RiArrowDownSLine, RiCloseLine } from 'react-icons/ri';
import { RxDividerVertical } from "react-icons/rx";

type SelectInputProps = {
  options: string[];
  onChange: (selectedOption: string) => void;
  onRemove: (selectedOption: string) => void;
  selected: string[];
};

const SelectInput: React.FC<SelectInputProps> = ({ options, onChange, onRemove, selected }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Eğer input değeri boşsa tüm seçenekleri göster
    if (selectedOption === '') {
      setFilteredOptions(options);
    } else {
      // Değilse, input değerine göre filtrele
      const match = options.filter((option) =>
        option.toLowerCase().includes(selectedOption.toLowerCase())
      );
      setFilteredOptions(match);
    }
  }, [selectedOption, options]);

  const handleOptionClick = (option: string) => {
    setSelectedOption('');
    onChange(option);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleInputClick = () => {
    // Input alanına tıklandığında tüm seçenekleri göster
    setFilteredOptions(options);
    setIsDropdownOpen(true);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  const clearInput = () => {
    setSelectedOption('');
    setFilteredOptions([]);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const showCreateOption = selectedOption && !options.includes(selectedOption);

  return (
    <div className="relative inline-block text-left w-full" ref={inputRef}>
      <div className="flex flex-wrap items-center gap-2 border-[1.5px] rounded-md focus-within:ring-2 focus-within:border-[blue-600]">
        {selected.map((ability, index) => (
          <span key={index} className="flex items-center ml-1 -mr-1 gap-2 px-2 py-1 bg-[#E6E6E6] text-sm font-normal rounded-sm text-black">
            {ability}
            <button className="font-bold" onClick={() => onRemove(ability)}>×</button>
          </span>
        ))}
        <input
          type="text"
          value={selectedOption}
          onChange={handleInputChange}
          onClick={handleInputClick}
          className="py-2 px-2 border-0 font-normal focus:ring-0 rounded-sm flex-grow min-w-[5rem]"
          placeholder="Seçiniz"
          // Input'un esnek bir genişliğe sahip olması ve minimum genişlikte olması sağlandı
        />
        {selectedOption && (
          <button onClick={clearInput} className="p-2">
            <RiCloseLine className="text-gray-500 -mr-6" size={20} />
          </button>
        )}
        <RxDividerVertical className="text-gray-300 -mr-6" size={30} />
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="p-2">
          <RiArrowDownSLine className="text-gray-500" size={20} />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="origin-top-right overflow-x-scroll max-h-60 absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {filteredOptions.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className={classNames(
                  'block px-4 py-2 text-md font-normal text-black cursor-pointer hover:bg-[#DEEBFF] hover:text-black',
                  {
                    'bg-blue-500 text-black': option === selectedOption,
                  }
                )}
                role="menuitem"
              >
                {option}
              </div>
            ))}
            {showCreateOption && (
              <div
                onClick={() => handleOptionClick(`${selectedOption}`)}
                className="block px-4 py-2 text-md font-normal text-black cursor-pointer bg-[#DEEBFF] text-black"
                role="menuitem"
              >
                Create "{selectedOption}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
