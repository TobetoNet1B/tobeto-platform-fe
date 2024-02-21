import Calendar from "../../components/Calendar/Calendar"
import Sidebar from "../../components/Calendar/Sidebar"

type Props = {}

const CalendarPage = (props: Props) => {
	return (
		<div className="grid grid-cols-12 my-5">
			<div className='lg:col-span-3 col-span-12'>
				<Sidebar />
			</div>
			<div className='lg:col-span-9 col-span-12'>
				<Calendar />
			</div>
		</div>
	)
}

export default CalendarPage