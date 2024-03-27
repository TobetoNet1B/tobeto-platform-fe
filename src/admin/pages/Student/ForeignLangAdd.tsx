import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AddForeignLanguageRequest } from 'models/requests/foreign-languages/addForeignLanguageRequest'; // Yolunuz ve dosya isminiz farklı olabilir
import foreignLanguageService from 'services/foreignLanguageService'; // Servisiniz farklı olabilir
import { RiDeleteBin5Line } from 'react-icons/ri';

type Props = {}

const ForeignLanguageAdd = (props: Props) => {
	const [languageName, setLanguageName] = useState('');
	const [languages, setLanguages] = useState<Array<{ id: string, name: string }>>([]);

	useEffect(() => {
		fetchLanguages();
	}, []);

	const fetchLanguages = async () => {
		try {
			const response = await foreignLanguageService.getAll(0, 10); // Metod adı ve parametreleriniz farklı olabilir
			setLanguages(response.data.items); // Yanıt yapınıza göre ayarlama yapabilirsiniz
		} catch (error) {
			toast.error('Diller yüklenirken bir hata oluştu!');
			console.error(error);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLanguageName(event.target.value);
	};

	const handleSave = async () => {
		try {
			const updateData: AddForeignLanguageRequest = { name: languageName }; // Yapınız farklı olabilir
			await foreignLanguageService.add(updateData); // Metod adı farklı olabilir
			toast.success('Başarıyla kaydedildi.');
			fetchLanguages(); // Metod adı farklı olabilir
			setLanguageName(''); // Input alanını temizle
		} catch (error) {
			toast.error('Kayıt sırasında bir hata oluştu!');
			console.error(error);
		}
	};

	const handleDelete = async (languageId: string) => {
		try {
			await foreignLanguageService.delete(languageId); // Metod adı farklı olabilir
			toast.success('Dil başarıyla silindi.');
			fetchLanguages(); // Metod adı farklı olabilir
		} catch (error) {
			toast.error('Silme işlemi sırasında bir hata oluştu!');
			console.error(error);
		}
	};

	return (
		<div className="p-4">
			<div className="flex justify-between items-center py-4">
				<Link to={`/admin/StudentInfo`}> {/* Geri dönüş linki değiştirildi */}
					<button type="button" className="text-white bg-[#1C64F2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
						Geri
					</button>
				</Link>
				<h1 className="text-center font-extrabold text-2xl flex-grow">Yabancı Dil Ekleme</h1>
			</div>

			<div className="mt-6">
				<label htmlFor="languageName" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Dil Adı</label>
				<input
					type="text"
					id="languageName"
					value={languageName}
					onChange={handleInputChange}
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
				<h3 className="text-lg font-semibold">Kayıtlı Diller</h3>
				<ul className="list-disc ">
					{languages.map((language) => (
						<li key={language.id} className="mt-2 mx-2 flex justify-between items-center">
							{language.name}
							<button
								onClick={() => handleDelete(language.id)}
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

export default ForeignLanguageAdd;
