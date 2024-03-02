
type Props = {
	totalPages: number;
	currentPage: number;
	setCurrentPage: any;
}

const Pagination = (props: Props) => {

	const handlePageChange = (page: number) => {
		props.setCurrentPage(page);
	};

	const handleNextPage = () => {
		if (props.currentPage < props.totalPages) {
			props.setCurrentPage(props.currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (props.currentPage > 1) {
			props.setCurrentPage(props.currentPage - 1);
		}
	};

	return (
		<>
			{props.totalPages > 1 && (
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
					{Array.from({ length: props.totalPages }).map((_, page) => (
						<button
							key={page}
							onClick={() => handlePageChange(page + 1)}
							className={`px-3 py-1 mx-1 rounded-md ${props.currentPage === page + 1 ? 'bg-[#01956E] text-white' : 'bg-white text-black'
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
		</>
	)
}

export default Pagination