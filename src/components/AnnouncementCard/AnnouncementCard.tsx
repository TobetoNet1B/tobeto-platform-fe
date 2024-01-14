import React from "react";
import Card, { ACard } from "utils/Card";

type Props = {
  searchQuery: string;
  sortBy: string;
  selectedInstitution: string;
  selectedOrganization:string;
};
type CardData = {
  kurum:string;
  baslik:string;
  description: string;
  tarih: string;
  buttonText?: string;
};

const AnnouncementCard = (props: Props) => {
  // Dummy data for testing
  const cardData: CardData[] = [
    { kurum:"İstanbul Kodluyor",baslik:"Duyuru", description: "Ocak Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",baslik:"Duyuru", description: "Şubat Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-09-20 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",baslik:"Duyuru", description: "Mart Ayı Tercih Formu Bilgilendirmesi", tarih: "2023-08-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",baslik:"Duyuru", description: "Ocak Ayı Tercih Formu Bilgilendirmesi", tarih: "2021-09-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",baslik:"Duyuru", description: "Ocak Ayı Tercih Formu Bilgilendirmesi", tarih: "2022-09-21 15:20", buttonText: "Devamını Gör" },
    { kurum:"İstanbul Kodluyor",baslik:"Duyuru", description: "Mesleki Gelişim Eğitimleri Yerleştirmeleri Hk.", tarih: "2023-09-21 14:20", buttonText: "Devamını Gör" },

    // ...
  ];
  const filterCards = (card: CardData) => {
    return (
      (!props.selectedInstitution || (props.selectedInstitution === "tur1" && card.baslik === "Haber") || (props.selectedInstitution === "tur2" && card.baslik === "Duyuru")) &&
      (!props.selectedOrganization || card.kurum ==="İstanbul Kodluyor"&& props.selectedOrganization==="kurum1") &&
      (props.searchQuery === "" ||
      card.description.toLowerCase().includes(props.searchQuery.toLowerCase()))
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
  return (
    <div className="flex flex-wrap justify-center">
    {filteredAndSortedCards.length > 0 ? (
      filteredAndSortedCards.map((card, index) => (
        <ACard
          key={index}
          baslik={card.baslik}
          kurum={card.kurum}
          description={card.description}
          tarih={card.tarih}
          buttonText={card.buttonText}
        />
      ))
    ) : (
      <p className="text-center text-gray-500">
        Bir duyuru bulunmamaktadır.
      </p>
    )}
  </div>
  );
};

export default AnnouncementCard;
