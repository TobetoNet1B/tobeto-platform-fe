import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function MySurveys() {
  return (
    <div className='mySurveys'>
               <FontAwesomeIcon style={{}} size='2xl' icon={faMagnifyingGlass} />
        <p style={{marginTop:'15px'}} className='text-purple-800 font-medium'>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
 
    </div>
  )
}
