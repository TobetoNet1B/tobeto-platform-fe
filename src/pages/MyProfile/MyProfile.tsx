import React from 'react'
import { HiMiniPencil } from "react-icons/hi2";
type Props = {}

const MyProfile = (props: Props) => {
    return (
        <div className='container'>
            <div className="row mt-6">
                <div className="flex justify-end">
                    <span className="cv-edit-icon">
                    <HiMiniPencil />
                    </span>
                    <div className="dropdown"></div>
                </div>
            </div>
        </div >
    )
}

export default MyProfile

