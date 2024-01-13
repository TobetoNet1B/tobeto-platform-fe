import { Button, Card, Dropdown, Timeline } from 'flowbite-react';
import React from 'react'
import {
    HiMiniPencil,
    HiMiniUser,
    HiMiniCake,
    HiEnvelope,
    HiMiniPhone,
    HiOutlineGlobeAlt,
    HiOutlineHome
} from "react-icons/hi2";
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
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

type Props = {}

const commitCounts = Array.from({ length: 53 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 10))
);

const experiences = [
    {
        year: 2015,
        title: 'Başlangıç',
        description: 'İlk deneyim',
    },
    {
        year: 2017,
        title: 'Devam',
        description: 'Bir şeyler devam ediyor',
    },
    {
        year: 2019,
        title: 'Gelişme',
        description: 'Daha fazla gelişme',
    },
    {
        year: 2021,
        title: 'Şu An',
        description: 'Şu anki deneyim',
    },
];

const MyProfile = (props: Props) => {
    const data = {
        labels: [
            'Yeni dünyaya hazırlanıyorum',
            'Profesyonel duruşumu geliştiriyorum',
            'Kendimi tanıyor ve yönetiyorum',
            'Yaratıcı ve doğru çözümler geliştiriyorum',
            'Başkaları ile birlikte çalışıyorum',
            'Kendimi sürekli geliştiriyorum',
            'Sonuç ve başarı odaklıyım',
            'Anlıyorum ve anlaşılıyorum',

        ],
        datasets: [{
            label: "",
            data: [4.4, 4.9, 4.4, 4.7, 4.8, 4.9, 4.8, 4.6, 0],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
            spanGaps: true
        }]
    };
    return (
        <div>
            <div className='container h-screen overflow-auto'>
                <div className="row mt-6 mb-2">
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
                    <div className="flex-none w-1/3">
                        <div >
                            <div className='col-12 '>
                                <Card className=" border-gray-50 dark:border-gray-50 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="https://media.licdn.com/dms/image/D4E03AQG6oUIp-LVqUg/profile-displayphoto-shrink_200_200/0/1679575072261?e=1710374400&v=beta&t=mTzzpqe6_elov0W6ViwW5jdahO-0skZ7ROsneN4DFz4"
                                            alt="profil-picture"
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
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
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
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
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
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Yabancı Dillerim
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <Card className="border-gray-50 dark:border-gray-50  bg-white dark:bg-white rounded-3xl">
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
                                    <Card className="border-gray-50 dark:border-gray-50  bg-white dark:bg-white rounded-3xl">
                                        <div className='flex items-center'>
                                            <div className="flex-none">
                                                <HiOutlineGlobeAlt className="text-3xl text-gray-700" />
                                            </div>
                                            <div className="flex-auto">
                                                <div className="text-lg font-semibold text-gray-700">
                                                    &nbsp;Almanca
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
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
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
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Medya Hesaplarım
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <FaLinkedin className="text-5xl text-gray-700" />
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none w-2/3">
                        <div >
                            <div className='col-12'>
                                <Card className=" border-gray-50 dark:border-gray-100 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Tobeto İşte Başarı Modelim
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <Radar data={data} />
                                </Card>
                            </div>
                            <div className='col-12 my-2'>
                                <Card className=" border-gray-50 dark:border-gray-50 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Tobeto Seviye Testlerim
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <div className='flex '>
                                        <div className=" bg-white rounded-md flex-none w-1/2 shadow-md mr-2 my-2 border-white border-2 hover:border-purple-600 hover:border-2">
                                            <div className="p-4">
                                                <h2 className="text-xl font-bold text-gray-500">Herkes İçin Kodlama</h2>

                                                <p className="text-md">Puan: 85</p>
                                            </div>
                                            <div className="p-4 text-right">
                                                <p className="text-sm">Tarih: 13 Ocak 2024</p>
                                            </div>
                                        </div>
                                        <div className=" bg-white rounded-md flex-none w-1/2 shadow-md mr-2 my-2 border-white border-2 hover:border-purple-600 hover:border-2">
                                            <div className="p-4">
                                                <h2 className="text-xl font-bold text-gray-500">Herkes İçin Kodlama</h2>

                                                <p className="text-md">Puan: 85</p>
                                            </div>
                                            <div className="p-4 text-right">
                                                <p className="text-sm">Tarih: 13 Ocak 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className='col-12 my-2'>
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Yetkinlik Rozetlerim
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <div className='flex'>
                                        <img
                                            src="https://tobeto.s3.cloud.ngn.com.tr/45_14110cb69f.jpg"
                                            alt="ik-badge"
                                            className=" mx-2 my-2 rounded-lg  p-3 bg-white"
                                            style={{ width: "13%", height: "13%" }}
                                        />
                                        <img
                                            src="https://tobeto.s3.cloud.ngn.com.tr/47_556f510dd4.jpg"
                                            alt="hik-badge"
                                            className="mx-2 my-2 rounded-lg  p-3 bg-white"
                                            style={{ width: "13%", height: "13%" }}
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className='col-12 my-2'>
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Aktivite Haritam
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <div className="flex items-center justify-center rotate-90 max-h-32">
                                        <div className="grid grid-cols-7 gap-1 flex">
                                            {commitCounts.map((weekCommits, weekIndex) =>
                                                weekCommits.map((count, dayIndex) => (
                                                    <div
                                                        key={`${weekIndex}-${dayIndex}`}
                                                        className={`lg:w-2 lg:h-2  sm:w-1 sm:h-1 ${count > 0 ? 'bg-green-400' : 'bg-gray-200'}`}
                                                    ></div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className='col-12 my-2'>
                                <Card className=" border-gray-50 dark:border-gray-100 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                        Eğitim Hayatım ve Deneyimlerim
                                    </h5>
                                    <hr className="border-violet-300 border-b-2 " />
                                    <div className='p-5'>
                                        <ol className="items-center sm:flex">
                                            <li className="relative mb-6 sm:mb-0">
                                                <div className="flex items-center">
                                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                                </div>
                                                <div className="mt-3 sm:pe-8">
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Asdasd University</h3>
                                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2, 2021</time>
                                                </div>
                                            </li>
                                            <li className="relative mb-6 sm:mb-0">
                                                <div className="flex items-center">
                                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                                </div>
                                                <div className="mt-3 sm:pe-8">
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Asdasd Company</h3>
                                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 23, 2021</time>
                                                </div>
                                            </li>
                                            <li className="relative mb-6 sm:mb-0">
                                                <div className="flex items-center">
                                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                                </div>
                                                <div className="mt-3 sm:pe-8">
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Flowbite Company</h3>
                                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 5, 2022</time>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >

    )
}

export default MyProfile

