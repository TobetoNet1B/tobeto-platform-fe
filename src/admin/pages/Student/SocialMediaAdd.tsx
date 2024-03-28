import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import socialMediaService from 'services/socialMediaService'; 
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AddSocialMediaRequest } from 'models/requests/social-medias/addSocialMediaRequest';
import { GetAllSocialMediaResponse } from 'models/responses/social-medias/getAllSocialMediaResponse';

type Props = {}

const SocialMediaAdd = (props: Props) => {
	const [socialMediaName, setSocialMediaName] = useState('');
	const [socialMediaIconUrl, setSocialMediaUrl] = useState('');
	const [socialMedias, setSocialMedias] = useState<GetAllSocialMediaResponse | null>(
		null
	);
	useEffect(() => {
		fetchSocialMedias();
	}, []);

	const fetchSocialMedias = async () => {
		try {
			const response = await socialMediaService.getAll(0, 10); 
			setSocialMedias(response.data); 
		} catch (error) {
			toast.error('Sosyal medya bilgileri yüklenirken bir hata oluştu!');
			console.error(error);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
		setState(event.target.value);
	};

	const handleSave = async () => {
		try {
			const updateData: AddSocialMediaRequest = {
				name: socialMediaName,
				iconUrl: socialMediaIconUrl 
			};
			await socialMediaService.add(updateData); 
			toast.success('Başarıyla kaydedildi.');
			fetchSocialMedias(); 
			setSocialMediaName('');
			setSocialMediaUrl(''); 
		} catch (error) {
			toast.error('Kayıt sırasında bir hata oluştu!');
			console.error(error);
		}
	};

	const handleDelete = async (socialMediaId: string) => {
		try {
			await socialMediaService.delete(socialMediaId);
			toast.success('Sosyal medya başarıyla silindi.');
			fetchSocialMedias(); 
		} catch (error) {
			toast.error('Silme işlemi sırasında bir hata oluştu!');
			console.error(error);
		}
	};

	return (
		<div className="p-4">
			<div className="flex justify-between items-center py-4">
				<Link to={`/admin/StudentInfo`}> 
					<button type="button" className="text-white bg-[#1C64F2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
						Geri
					</button>
				</Link>
				<h1 className="text-center font-extrabold text-2xl flex-grow">Sosyal Medya Ekleme</h1>
			</div>

			<div className="mt-6">
				<label htmlFor="socialMediaName" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Sosyal Medya Adı</label>
				<input
					type="text"
					id="socialMediaName"
					value={socialMediaName}
					onChange={(e) => handleInputChange(e, setSocialMediaName)}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>
			<div className="mt-4">
				<label htmlFor="socialMediaIconUrl" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Sosyal Medya İkonu URL'si</label>
				<input
					type="text"
					id="socialMediaIconUrl"
					value={socialMediaIconUrl}
					onChange={(e) => handleInputChange(e, setSocialMediaUrl)}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>
			<button
				type="button"
				onClick={handleSave}
				className="mt-4 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
			>
				Kaydet
			</button>
			<div className="mt-6">
				<h3 className="text-lg font-semibold">Kayıtlı Sosyal Medyalar</h3>
				<ul className="list-disc">
					{socialMedias?.items.map((socialMedia) => (
						<li key={socialMedia.id} className="mt-2 mx-2 flex justify-between items-center">
							<span>{socialMedia.name} - {socialMedia.iconUrl}</span>
							<button
								onClick={() => handleDelete(socialMedia.id)}
								className="mx-2 text-red-500 hover:text-red-700"
							>
								<RiDeleteBin5Line size={20} />
							</button>
						</li>
					))}
				</ul>
			</div>

			<ToastContainer />
		</div>
	);
};

export default SocialMediaAdd;

