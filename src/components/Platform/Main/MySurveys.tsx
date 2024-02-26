import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function MySurveys() {
  return (
    <div className='flex flex-col items-center justify-center max-w-[1200px] m-[20px] rounded-[1.5%] h-[280px] bg-[#e6e6e6]'>
               <FontAwesomeIcon style={{}} size='2xl' icon={faMagnifyingGlass} />
        <p style={{marginTop:'15px'}} className='text-purple-800 font-medium'>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
 
    </div>
  )
}
