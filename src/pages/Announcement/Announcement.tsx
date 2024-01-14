
import AnnouncementCard from "components/Announcement/AnnouncementCard";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "utils/Banner";

type Props = {};

const Announcement = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [isInstitutionSelected, setIsInstitutionSelected] = useState(false);

  const navigate = useNavigate();
  // Function to handle clearing the selected institution
  const clearSelectedInstitution = () => {
    setSelectedInstitution("");
    setSelectedOrganization("");
    setSortBy("");
    setIsInstitutionSelected(false);
    navigate("/duyurularım");
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;
    setSortBy(sortByValue);
    setIsInstitutionSelected(!!event.target.value);
  };
  const handleInstitutionChange = (event: any) => {
    setSelectedInstitution(event.target.value);
    setIsInstitutionSelected(!!event.target.value);
  };
  const handleOrganizationChange = (event: any) => {
    const value = event.target.value;
    setSelectedOrganization(value);
    setIsInstitutionSelected(!!event.target.value);
  };
  return (
    <div className="overflow-y-auto h-screen">
      <Banner
        url="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg"
        spanText="Duyurularım"
      />
      <div className="text-left flex justify-center items-center rounded-xl bg-white p-4 ">
        <div className="flex items-center space-x-2 mr-4 w-full justify-center mb-5">
          <div className=" relative text-gray-600  w-1/4 ">
            <input
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-full shadow-gray-400 bg-white h-10 px-5 pr-16 text-sm focus:outline-none w-full shadow-md"
              type="search"
              name="search"
              placeholder="Arama"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
              <svg
                className="text-gray-600 h-5 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <select
            data-te-select-init
            className="px-3 py-2 mr-4 w-2/12 border border-gray-300 shadow-gray-400 text-slate-600 font-bold rounded-full focus:outline-none focus:border-indigo-500 shadow-md"
            value={selectedInstitution}
            onChange={handleInstitutionChange}
          >
            <option className="" value="" hidden>
              Tür
            </option>
            <option value="tur1">Haber</option>
            <option value="tur2">Duyuru</option>
          </select>
          <select
            data-te-select-init
            className="px-3 py-2 w-2/12 mr-4 border border-gray-300 shadow-gray-400 text-slate-600 font-bold rounded-full focus:outline-none focus:border-indigo-500 shadow-md"
            value={selectedOrganization}
            onChange={handleOrganizationChange}
          >
            <option className="" value="" hidden>
              Organizasyon
            </option>
            <option value="kurum1">İstanbul Kodluyor</option>
          </select>

          <select
            data-te-select-init
            className="px-3 py-2 mr-4 w-2/12 border border-gray-300 shadow-gray-400 font-bold rounded-full focus:outline-none focus:border-indigo-500 shadow-md"
            value={sortBy}
            onChange={handleSortByChange}
          >
            <option className="" value="" hidden>
              Sıralama
            </option>
            <option value="" hidden>
              Sıralama
            </option>
            <option value="date-asc">Tarihe Göre (Eski-Yeni)</option>
            <option value="date-desc">Tarihe Göre (Yeni-Eski)</option>
          </select>
          {isInstitutionSelected && (
            <button
              className="relative flex items-center text-black rounded-full p-2 bg-white focus:outline-none group"
              onClick={clearSelectedInstitution}
            >
              <svg
                className="h-8 w-8 mr-2 text-black group-hover:text-yellow-500"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
              </svg>
              <p className="bg-black text-white p-2 text-[14px] rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Filtreleri Kaldır
              </p>
            </button>
          )}
        </div>
      </div>

      <AnnouncementCard
        searchQuery={searchQuery}
        sortBy={sortBy}
        selectedInstitution={selectedInstitution}
        selectedOrganization={selectedOrganization}
      />
    </div>
  );
};

export default Announcement;