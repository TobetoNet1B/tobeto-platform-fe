import { Button, Card, Dropdown } from 'flowbite-react';
import React from 'react'
import { HiMiniPencil, HiMiniUser, HiMiniCake, HiEnvelope, HiMiniPhone, HiOutlineGlobeAlt, HiOutlineHome } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

type Props = {}



const MyProfile = (props: Props) => {
    const data = {
        labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    };
    return (
        <div>
            <div className='container h-screen overflow-auto'>
                <div className="row mt-6">
                    <div className="flex justify-end">
                        <span className="cv-edit-icon">
                            <HiMiniPencil />
                        </span>
                        <Dropdown label="" inline >
                            <Dropdown.Item>Profilimi paylaş</Dropdown.Item>
                            <Dropdown.Item>Profil Linki</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
                <div className='flex'>
                    <div className="col-md-4 col-12">
                        <div className='flex-none w-1/3'>
                            <div className='col-12 '>
                                <Card className=" border-gray-50 dark:border-gray-50 max-w-80 bg-white dark:bg-white shadow-2xl ">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="https://media.licdn.com/dms/image/D4E03AQG6oUIp-LVqUg/profile-displayphoto-shrink_200_200/0/1679575072261?e=1710374400&v=beta&t=mTzzpqe6_elov0W6ViwW5jdahO-0skZ7ROsneN4DFz4"
                                            alt="ik-banner"
                                            className="mb-1 mt-1 rounded-full  p-1"
                                            style={{ width: "50%", height: "auto" }}
                                        />
                                        <div className="mt-4 grid gap-1 lg:mt-6">
                                            <div className="flex">
                                                <div className='p-4'>
                                                    <HiMiniUser />
                                                </div>
                                                <div className="p-1">
                                                    <p className="text-sm font-medium text-gray-500">Ad Soyad</p>
                                                    <p className="text-lg font-bold text-gray-900">Tunahan Yıldırım</p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className='p-4'>
                                                    <HiMiniCake />
                                                </div>
                                                <div className="p-1">
                                                    <p className="text-sm font-medium text-gray-500">Doğum Tarihi</p>
                                                    <p className="text-lg font-bold text-gray-900">08.03.1997</p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className='p-4'>
                                                    <HiEnvelope />
                                                </div>
                                                <div className="p-1">
                                                    <p className="text-sm font-medium text-gray-500">E-Posta Adresi</p>
                                                    <p className="text-lg font-bold text-gray-900">asdasd@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className='p-4'>
                                                    <HiMiniPhone />
                                                </div>
                                                <div className="p-1 ">
                                                    <p className="text-sm font-medium text-gray-500">Telefon Numarası</p>
                                                    <p className="text-lg font-bold text-gray-900">+905325554466</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className='col-12 my-2'>
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-80 bg-white dark:bg-white shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Hakkımda
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <p className="font-normal text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </Card>
                            </div>
                            <div className='col-12 my-2'>
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-80 bg-white dark:bg-white shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Yetkinliklerim
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <h5 className='my-1 text-lg font-medium bg-white text-black   rounded-3xl hover:bg-purple-600 hover:text-white shadow-lg' >
                                        &emsp;Back End (Yazılım Mühendisliği)
                                    </h5>
                                    <h5 className='my-1 text-lg font-medium bg-white text-black    rounded-3xl hover:bg-purple-600 hover:text-white shadow-lg' >
                                        &emsp;javascript
                                    </h5>
                                    <h5 className='my-1 text-lg font-medium bg-white text-black   rounded-3xl hover:bg-purple-600 hover:text-white shadow-lg'>
                                        &emsp;c#
                                    </h5>
                                </Card>
                            </div>
                            <div className='col-12 my-2'>
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-80 bg-white dark:bg-white shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Yabancı Dillerim
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <Card className="border-gray-50 dark:border-gray-50 max-w-80 bg-white dark:bg-white rounded-3xl">
                                        <div className='flex items-center'>
                                            <div className="flex-none">
                                                <HiOutlineGlobeAlt className="text-3xl text-gray-700" />
                                            </div>
                                            <div className="flex-auto">
                                                <div className="text-lg font-semibold text-gray-700">
                                                    &nbsp;İngilizce
                                                </div>
                                                <div className="text-sm text-gray-700">
                                                    &nbsp;Orta Seviye
                                                </div>
                                            </div>
                                            <div className="flex-none ml-auto">
                                                <HiOutlineHome className="text-3xl text-gray-700" />
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className="border-gray-50 dark:border-gray-50 max-w-80 bg-white dark:bg-white rounded-3xl">
                                        <div className='flex items-center'>
                                            <div className="flex-none">
                                                <HiOutlineGlobeAlt className="text-3xl text-gray-700" />
                                            </div>
                                            <div className="flex-auto">
                                                <div className="text-lg font-semibold text-gray-700">
                                                    &nbsp;İngilizce
                                                </div>
                                                <div className="text-sm text-gray-700">
                                                    &nbsp;Orta Seviye
                                                </div>
                                            </div>
                                            <div className="flex-none ml-auto">
                                                <HiOutlineHome className="text-3xl text-gray-700" />
                                            </div>
                                        </div>
                                    </Card>
                                </Card>
                            </div>
                            <div className='col-12 my-2'>
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-80 bg-white dark:bg-white shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Sertifikalarım
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <p className="font-normal text-gray-700">
                                        Henüz bir sertifika yüklemedin.
                                    </p>
                                </Card>
                            </div>
                            <div className='col-12'>
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-80 bg-white dark:bg-white shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Medya Hesaplarım
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <FaLinkedin className="text-5xl text-gray-700" />
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className='flex-none w-2/3'>
                            <div className='col-12'>
                                <div>
                                    <Radar data={data} />
                                </div>
                            </div>
                            <div className='col-12'></div>
                            <div className='col-12'></div>
                            <div className='col-12'></div>
                            <div className='col-12'></div>
                        </div>

                    </div>
                </div>
            </div >
        </div>

    )
}

export default MyProfile

