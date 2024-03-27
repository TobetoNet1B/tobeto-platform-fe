import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AddCountryRequest } from 'models/requests/countries/addCountryRequest';
import countryService from 'services/countryService';
import { RiDeleteBin5Line } from 'react-icons/ri';

type Props = {}

const CountryAdd = (props: Props) => {
	const [countryName, setCountryName] = useState('');
	const [countries, setCountries] = useState<Array<{ id: string, name: string }>>([]);

	useEffect(() => {
		fetchCountries();
	}, []);

	const fetchCountries = async () => {
		try {
			const response = await countryService.getAll(0, 10);
			setCountries(response.data.items); // Varsayılan olarak response'un bir data özelliği olduğunu varsayıyorum
			console.log(response);

		} catch (error) {
			toast.error('Ülkeler yüklenirken bir hata oluştu!');
			console.error(error);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCountryName(event.target.value);
	};

	const handleSave = async () => {
		try {
			const updateData: AddCountryRequest = { name: countryName };
			await countryService.add(updateData);
			toast.success('Başarıyla kaydedildi.');
			fetchCountries(); // Listeyi güncellemek için ülkeleri tekrar çek
			setCountryName(''); // Input alanını temizle
		} catch (error) {
			toast.error('Kayıt sırasında bir hata oluştu!');
			console.error(error);
		}
	};

	const handleDelete = async (countryId: string) => {
		try {
			await countryService.delete(countryId);
			toast.success('Ülke başarıyla silindi.');
			fetchCountries(); // Listeyi güncelleyin
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
				<h1 className="text-center font-extrabold text-2xl flex-grow">Ülke Ekleme</h1>
			</div>

			<div className="mt-6">
				<label htmlFor="countryName" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Ülke Adı</label>
				<input
					type="text"
					id="countryName"
					value={countryName}
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
				<h3 className="text-lg font-semibold">Kayıtlı Ülkeler</h3>
				<ul className="list-disc ">
					{countries.map((country) => (
						<li key={country.id} className="mt-2 mx-2 flex justify-between items-center">
							{country.name}
							<button
								onClick={() => handleDelete(country.id)}
								className="mx-2 text-red-500 hover:text-red-700"
							>
								<RiDeleteBin5Line size={15} />
							</button>
						</li>
					))}
				</ul>
			</div>
			<ToastContainer />
		</div>
	);
};

export default CountryAdd;
