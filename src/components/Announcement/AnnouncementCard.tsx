import React, { useState } from "react";
import Card, { ACard } from "utils/Card";

type Props = {
  searchQuery: string;
  sortBy: string;
  selectedInstitution: string;
  selectedOrganization:string;
};
type CardData = {
  kurum:string;
  type:string;
  name:string;
  description?: string;
  tarih: string;
  buttonText?: string;
};

const AnnouncementCard = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;


  const cardData: CardData[] = [
    { kurum:"İstanbul Kodluyor",description:"Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.  Sevgiler,",type:"Duyuru", name: "Ocak Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",description:"Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.  Sevgiler,",type:"Duyuru", name: "Ocak Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",description:"Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.  Sevgiler,",type:"Duyuru", name: "Ocak Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",description:"Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.  Sevgiler,",type:"Duyuru", name: "Ocak Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",description:"Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir. Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.  Sevgiler,",type:"Duyuru", name: "Ocak Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Şubat Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-20 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Şubat Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-20 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Şubat Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-20 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Şubat Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-20 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Şubat Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-20 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Şubat Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-20 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Şubat Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-20 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Mesleki Gelişim Eğitimleri Yerleştirmeleri Hk.", tarih: "2023-09-21 14:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Mesleki Gelişim Eğitimleri Yerleştirmeleri Hk.", tarih: "2023-09-21 14:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Mesleki Gelişim Eğitimleri Yerleştirmeleri Hk.", tarih: "2023-09-21 14:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",type:"Duyuru", name: "Mesleki Gelişim Eğitimleri Yerleştirmeleri Hk.", tarih: "2023-09-21 14:20", buttonText: "Devamını Gör" },

  ];
  const filterCards = (card: CardData) => {
    return (
      (!props.selectedInstitution || (props.selectedInstitution === "tur1" && card.type === "Haber") || (props.selectedInstitution === "tur2" && card.type === "Duyuru")) &&
      (!props.selectedOrganization || card.kurum ==="İstanbul Kodluyor"&& props.selectedOrganization==="kurum1") &&
      (props.searchQuery === "" ||
      card.name.toLowerCase().includes(props.searchQuery.toLowerCase()))
    );
  };
 
  const sortCards = (a: CardData, b: CardData) => {
    const dateA = new Date(a.tarih).getTime();
    const dateB = new Date(b.tarih).getTime();
  
    switch (props.sortBy) {
      case "date-asc":
        return dateA - dateB;
      case "date-desc":
        return dateB - dateA;
      default:
        return 0;
    }
  };
  const filteredAndSortedCards = cardData
  .filter(filterCards)
  .sort(sortCards);
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
    <div>
    <div className="flex flex-wrap justify-center overflow-auto mt-3">
      {paginatedCards.length > 0 ? (
        paginatedCards.map((card, index) => (
          <ACard
          key={index}
          description={card.description}
          type={card.type}
          companyName={card.kurum}
          name={card.name}
          createdDate={card.tarih}
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
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
          </svg>
        </button>
        {Array.from({ length: totalPages }).map((_, page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page + 1)}
            className={`px-3 py-2 mx-1 rounded-md ${
              currentPage === page + 1 ? 'bg-black text-white' : 'bg-white text-black'
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
            width="12"
            height="12"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
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

export default AnnouncementCard;