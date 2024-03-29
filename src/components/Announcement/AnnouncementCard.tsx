import { GetAllAnnouncementResponse } from "models/responses/announcements/getAllAnnouncementResponse";
import React, { useEffect, useState } from "react";
import AnnouncementService from "services/announcementService";
import Card, { ACard } from "utils/Platform/Card";
import Pagination from "./Pagination";

type Props = {
	searchQuery?: string;
	sortBy?: string;
	selectedInstitution?: string;
	selectedOrganization?: string;
	isPlatform?: boolean;
};

type CardData = {
	kurum: string;
	type: string;
	title: string;
	description?: string;
	createdDate: string;
	buttonText?: string;
};

const AnnouncementCard = (props: Props) => {

	const [currentPage, setCurrentPage] = useState(1);
	const [announcement, setAnnouncement] = useState<GetAllAnnouncementResponse | null>(null);
	const cardsPerPage = 9;

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
			(!props.selectedInstitution ||
				(props.selectedInstitution === "tur1" && card.type === "Haber") ||
				(props.selectedInstitution === "tur2" && card.type === "Duyuru")) &&
			(!props.selectedOrganization ||
				(card.kurum === "İstanbul Kodluyor" &&
					props.selectedOrganization === "kurum1")) &&
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


	const renderCards = (sliced: boolean) => {
		return (
			paginatedCards.length > 0 ? (
				paginatedCards.map((card: any, index: any) => (
					(sliced || index < 3) && (
						<ACard
							key={index}
							description={card.description}
							type={card.type}
							companyName={card.kurum}
							title={card.title}
							createdDate={card.createdDate}
							buttonText={card.buttonText}
						/>
					)
				))
			) : (
				<p className="text-center text-gray-500">
					Bir duyuru bulunmamaktadır.
				</p>
			)
		);
	}


	return (
		<div>
			<div className={`flex flex-nowrap justify-center overflow-auto mt-3 ${props.isPlatform ? 'max-w-6xl' : '!flex-wrap'}`}>
				{renderCards(!props.isPlatform!)}
			</div>
			{!props.isPlatform && <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
		</div>
	);
};

export default AnnouncementCard;