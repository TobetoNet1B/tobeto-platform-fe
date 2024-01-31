import React from 'react'
import { MdCalendarMonth } from "react-icons/md";
function AnnouncementCard2() {
  return (
    <div className="announcementCard2" style={{ position: 'relative', width: '300px', height: '150px',  padding: '10px' }}>
      
    <p style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '8pt', cursor: 'default', margin: '0' }}>Duyuru</p>
    <p style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '8pt', margin: '0' }}>İstanbul Kodluyor</p>

    <p style={{ textAlign:'start', margin: 'auto', marginTop:'2rem', fontSize: '10pt', fontWeight:'bold' }}>30 Ocak Online Hoşgeldin Buluşması-5</p>


    <p style={{ display:'flex', position: 'absolute', bottom: '10px', left: '10px', fontSize: '8pt', cursor: 'default' }}><MdCalendarMonth />03.01.2024</p>
    <p style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '8pt', cursor: 'pointer', margin: '0' }}>Devamını Oku</p>




 
</div>

  )
}

export default AnnouncementCard2