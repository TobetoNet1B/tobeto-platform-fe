import { GetAllAnnouncementResponse } from "models/responses/announcements/getAllAnnouncementResponse";
import React, { useEffect, useState } from "react";
import AnnouncementService from "services/announcementService";
import Card, { ACard } from "utils/Platform/Card";

type Props = {
  searchQuery?: string;
  sortBy?: string;
  selectedInstitution?: string;
  selectedOrganization?: string;
};

type CardData = {
  kurum: string;
  type: string;
  title: string;
  description?: string;
  createdDate: string;
  buttonText?: string;
};

const AnnouncementCard2 = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const [announcement, setAnnouncement] = useState<GetAllAnnouncementResponse | null>(null);



  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const result = await AnnouncementService.getAll(0, 20);
        setAnnouncement(result.data);

      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    };

    fetchAnnouncement();
  }, []);

  const filterCards = (card: CardData) => {
    return (
      (!props.selectedInstitution || (props.selectedInstitution === "tur1" && card.type === "Haber") || (props.selectedInstitution === "tur2" && card.type === "Duyuru")) &&
      (!props.selectedOrganization || card.kurum === "İstanbul Kodluyor" && props.selectedOrganization === "kurum1") &&
      (props.searchQuery === "" ||
        card.title?.toLowerCase().includes(props.searchQuery!.toLowerCase()))
    );
  };

  const sortCards = (a: CardData, b: CardData) => {
    const dateA = new Date(a.createdDate).getTime();
    const dateB = new Date(b.createdDate).getTime();

    switch (props.sortBy) {
      case "date-asc":
        return dateA - dateB;
      case "date-desc":
        return dateB - dateA;
      default:
        return 0;
    }
  };

  const filteredAndSortedCards = announcement && announcement.items
    ? announcement.items.map(items => ({
      kurum: "İstanbul Kodluyor",
      type: "Duyuru",
      title: items.title,
      description: items.description,
      createdDate: items.createdDate.toString(),
      buttonText: "Devamını Gör"
    })).filter(filterCards).sort(sortCards) : [];

  const totalPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, filteredAndSortedCards.length);
  const paginatedCards = filteredAndSortedCards.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div >
      <div className="flex flex-nowrap justify-start 	 mt-3 max-w-6xl">
        {paginatedCards.length > 0 ? (
          paginatedCards.slice(0, 3).map((card: any, index: any) => (
            <ACard
              key={index}
              description={card.description}
              type={card.type}
              companyName={card.kurum}
              title={card.title}
              createdDate={card.createdDate}
              buttonText={card.buttonText}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Bir duyuru bulunmamaktadır.
          </p>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 mb-2">
          <button
            onClick={handlePrevPage}
            className={`px-3 py-2 mx-1 rounded-full `}
          >
            <svg
              className="h-5 w-5 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
            </svg>
          </button>
          {Array.from({ length: totalPages }).map((_, page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`px-3 py-1 mx-1 rounded-md ${currentPage === page + 1 ? 'bg-[#01956E] text-white' : 'bg-white text-black'
                }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className={`px-2 mx-1 rounded-s`}
          >
            <svg
              className="h-5 w-5 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard2;
