import React, { useState } from "react";
import Card, { ECard } from "utils/Card";

type CardData = {
  image?: string;
  description: string;
  tarih: string;
  buttonText?: string;
  kurum?:string
};

type Props = {
  searchQuery: string;
  sortBy: string;
  selectedOrganization:string;
};

const EducationCard = (props: Props) => {

  const cardData: CardData[] = [
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png",kurum:"İstanbul Kodluyor", description: ".NET & REACT FULLSTACK 1-B", tarih: "2023-09-21 15:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png", description: ".NET & REACT FULLSTACK 1-B", tarih: "2023-09-20 15:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png", description: "JAVA & REACT FULLSTACK 1-B", tarih: "2023-09-28 15:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png",kurum:"İstanbul Kodluyor",  description: "Springboot & REACT FULLSTACK 1-B", tarih: "2023-09-21 10:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png",kurum:"İstanbul Kodluyor",  description: ".NET & React Fullstack | Öğrenme Yolculuğu", tarih: "2023-09-21 15:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png", description: ".NET & REACT FULLSTACK 1-B", tarih: "2021-09-21 15:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png",kurum:"İstanbul Kodluyor",  description: "JAVA & REACT FULLSTACK 1-B", tarih: "2022-09-21 15:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png", description: ".NET & REACT FULLSTACK 1-B", tarih: "2022-08-21 15:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png",kurum:"İstanbul Kodluyor",  description: ".NET & REACT FULLSTACK 1-B", tarih: "2023-05-21 15:20", buttonText: "Eğitime Git" },
    { image: "https://www.allotraining.com/wp-content/uploads/2021/08/c-.net_.png", description: ".NET & REACT FULLSTACK 1-B", tarih: "2023-01-21 15:20", buttonText: "Eğitime Git" },
    // ...
  ];
  const filterCards = (card: CardData) => {
    return (
      (!props.selectedOrganization ||
        (card.kurum === "İstanbul Kodluyor" &&
          props.selectedOrganization === "kurum1")) &&
      (props.searchQuery === "" ||
        card.description.toLowerCase().includes(props.searchQuery.toLowerCase()))
  
    );
  };

  const sortCards = (a: CardData, b: CardData) => {
    const dateA = new Date(a.tarih).getTime();
    const dateB = new Date(b.tarih).getTime();
  
    switch (props.sortBy) {
      case "name-asc":
        return a.description.localeCompare(b.description);
      case "name-desc":
        return b.description.localeCompare(a.description);
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
        <ECard
          key={index}
          image={card.image}
          description={card.description}
          kurum={card.kurum}
          tarih={card.tarih}
          buttonText={card.buttonText}
        />
      ))
    ) : (
      <p className="text-center text-gray-500">
        Size atanan herhangi bir eğitim bulunmamaktadır.
      </p>
    )}
  </div>
  );
};
export default EducationCard;
