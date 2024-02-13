import React, { useEffect, useState } from "react";
import StudentModuleService from "services/studentModuleService";
import Card, { ECard } from "utils/Card";
import { GetStudentModuleResponse } from "models/responses/student-modules/getStudentModuleResponse";

type CardData = {
  imgUrl?: string;
  description?: string;
  createdDate: string;
  buttonText?: string;
  companyName?:string
  name:string;
};

type Props = {
  searchQuery: string;
  sortBy: string;
  selectedOrganization:string;
};

const EducationCard = (props: Props) => {

  const [studentModule, setStudentModule] = useState<GetStudentModuleResponse | null>(null);

  useEffect(() => {
    const fetchStudentModule = async () => {
      try {
        const result = await StudentModuleService.getById(localStorage.studentId);
        setStudentModule(result.data as GetStudentModuleResponse);
        console.log(result.data)
      } catch (error) {
        console.error("Error fetching student module:", error);
      }
    };
  
    fetchStudentModule();
  }, []);

  const filterCards = (card: CardData) => {
    return (
      (!props.selectedOrganization ||
        (card.companyName === "İstanbul Kodluyor" &&
          props.selectedOrganization === "kurum1")) &&
      (props.searchQuery === "" ||
        card.name.toLowerCase().includes(props.searchQuery.toLowerCase()))
  
    );
  };

  const sortCards = (a: CardData, b: CardData) => {
    const dateA = new Date(a.createdDate).getTime();
    const dateB = new Date(b.createdDate).getTime();
  
    switch (props.sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "date-asc":
        return dateA - dateB;
      case "date-desc":
        return dateB - dateA;
      default:
        return 0;
    }
  };
  const filteredAndSortedCards = studentModule && studentModule.moduleSets
    ? studentModule.moduleSets.map(module => ({
      imgUrl: module.imgUrl,
      name: module.name,
      createdDate: module.createdDate.toString(),
      buttonText: "Eğitime Git",
      companyName: module.companyName
      
    })).filter(filterCards).sort(sortCards)
    : [];
    console.log("filteredAndSortedCards:", filteredAndSortedCards);
  return (
    <div className="flex flex-wrap justify-center">
      {filteredAndSortedCards.length > 0 ? (
        filteredAndSortedCards.map((card, index) => (
          <ECard
            key={index}
            imgUrl={card.imgUrl}
            name={card.name}
            companyName={card.companyName}
            createdDate={card.createdDate}
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
