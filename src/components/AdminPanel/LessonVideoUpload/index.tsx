import React, { useEffect, useRef, useState } from 'react';
import courseService from 'services/courseService';
import Select from 'react-select';
import speakerService from 'services/speakerService';
import { Field, ErrorMessage, useFormik, FormikProvider } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { AddLessonsRequest } from 'models/requests/lessons/addLessonsRequest';
import lessonService from 'services/lessonService';

const cloudinaryConfig = {
  cloudName: 'dquj67sue',
  uploadPreset: 'mafzjs3w',
};

const LessonVideoUpload = () => {
	const [courses, setCourses] = useState<{ value: string; label: string; }[]>([]);
	const [selectedCourse, setSelectedCourse] = useState<{ value: string; label: string; } | null>(null);

	const [speakers, setSpeakers] = useState<{ value: string; label: string; }[]>([]);
	const [selectedSpeaker, setSelectedSpeaker] = useState<{ value: string; label: string; } | null>(null);

	const fileInputRefImg = useRef<HTMLInputElement>(null);
	const fileInputRefLesson = useRef<HTMLInputElement>(null);

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
		const file = e.target.files ? e.target.files[0] : null;
		if (file) {
			uploadToCloudinary(file).then((url: string) => {
				formik.setFieldValue(field, url);
			}).catch(error => {
				console.error('Dosya yükleme hatası:', error);
				toast.error('Dosya yükleme hatası!');
			});
		}
	};

	const uploadToCloudinary = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('upload_preset', cloudinaryConfig.uploadPreset);
			formData.append('cloud_name', cloudinaryConfig.cloudName);

			fetch(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/auto/upload`, {
				method: 'POST',
				body: formData
			})
				.then(response => response.json())
				.then(data => {
					if (data.secure_url) {
						resolve(data.secure_url);
					} else {
						reject('Cloudinary yükleme hatası.');
						toast.error('Cloudinary yükleme hatası!');
					}
				})
				.catch(err => {
					console.error('Cloudinary yükleme hatası:', err);
					toast.error('Cloudinary yükleme hatası!');
					reject(err);
				});
		});
	};

	useEffect(() => {
		const fetchCoursesAndSpeakers = async () => {
			try {
				const courseResult = await courseService.getAll(0, 20);
				setCourses(courseResult.data.items.map(course => ({
					value: course.id,
					label: course.name
				})));

				const speakerResult = await speakerService.getAll(0, 20);
				setSpeakers(speakerResult.data.items.map(speaker => ({
					value: speaker.id,
					label: `${speaker.firstName} ${speaker.lastName}`
				})));
			} catch (error) {
				console.error("Error fetching data:", error);
				toast.error('Error fetching data!');
			}
		};

		fetchCoursesAndSpeakers();
	}, []);

	const handleCourseChange = (selectedOption: { value: string; label: string; } | null) => {
		setSelectedCourse(selectedOption);
		if (selectedOption) {
			console.log("Selected course ID:", selectedOption.value);
			formik.setFieldValue('courseId', selectedOption.value); 
		} else {
			toast.error('courseId alınamadı!');

		}
	};

	const handleSpeakerChange = (selectedOption: { value: string; label: string; } | null) => {
		setSelectedSpeaker(selectedOption);
		if (selectedOption) {
			console.log("Selected speaker ID:", selectedOption.value);
			formik.setFieldValue('speakerId', selectedOption.value);
		} else {
			toast.error('speakerId alınamadı!');
		}
	};

	const formik = useFormik({
		initialValues: {
			course: '',
			speaker: '',
			name: '',
			description: '',
			lessonUrl: '',
			imgUrl: '',
			lessonType: '',
			duration: 0,
			courseId: '',
			speakerId: '',
		},
		onSubmit: async (values) => {
			try {
				const updateData: AddLessonsRequest = {
					...values
				};
				await lessonService.add(updateData);
				toast.success('Lesson başarıyla eklendi!');
				console.log(values);
			}
			catch (error) {
				toast.error('Lesson eklenirken bir hata oluştu!');
				console.error(error);
				console.log(values);
				
			}
		}
	});

	const triggerFileSelectPopup = (ref: React.RefObject<HTMLInputElement>) => {
		if (ref.current) {
			ref.current.click();
		}
	};

	return (
		<div>

			<FormikProvider value={formik}
			>
				<form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto">
				<h1 className='font-bold text-2xl my-4 text-center'>Add Lesson Video Panel</h1>
					<div className='mb-4'>
						<label htmlFor='course'>Course</label>
						<Field name='course'>
							{({ field, form }: { field: any, form: any }) => (
								<Select
									id='course'
									value={selectedCourse}
									onChange={(selectedOption) => {
										handleCourseChange(selectedOption);
										form.setFieldValue('course', selectedOption);
									}}
									options={courses}
									isSearchable={false}
								/>
							)}
						</Field>
						<ErrorMessage name='course' component='div' className='text-red-500' />
					</div>

					<div className='mb-4'>
						<label htmlFor='speaker'>Speaker</label>
						<Field name='speaker'>
							{({ field, form }: { field: any, form: any }) => (
								<Select
									id='speaker'
									value={selectedSpeaker}
									onChange={(selectedOption) => {
										handleSpeakerChange(selectedOption);
										form.setFieldValue('speaker', selectedOption);
									}}
									options={speakers}
									isSearchable={false}
								/>
							)}
						</Field>
						<ErrorMessage name='speaker' component='div' className='text-red-500' />
					</div>

					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700">Name</label>
						<Field type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
						<ErrorMessage name="name" component="div" className="text-red-500" />
					</div>

					<div className="mb-4">
						<label htmlFor="description" className="block text-gray-700">Description</label>
						<Field type="text" id="description" name="description" className="mt-1 p-2 w-full border rounded-md" />
						<ErrorMessage name="description" component="div" className="text-red-500" />
					</div>


					<div className="mb-4">
						<button type="button" onClick={() => triggerFileSelectPopup(fileInputRefImg)}>ImgUrl</button>
						{formik.values.imgUrl && <img src={formik.values.imgUrl} alt="Uploaded" style={{ width: '100px', color: "green" }} />}
						<input
							type="file"
							ref={fileInputRefImg}
							style={{ display: 'none' }}
							onChange={(e) => handleFileUpload(e, 'imgUrl')}
						/>
					</div>

					<div className="mb-4">
						<button type="button" onClick={() => triggerFileSelectPopup(fileInputRefLesson)}>LessonUrl</button>
						{formik.values.lessonUrl && <video src={formik.values.lessonUrl} style={{ width: '100px', color: "green" }} controls />}
						<input
							type="file"
							ref={fileInputRefLesson}
							style={{ display: 'none' }}
							onChange={(e) => handleFileUpload(e, 'lessonUrl')}
						/>
					</div>

					<div className="mb-4">
						<label htmlFor="lessonType" className="block text-gray-700">Lesson Type</label>
						<Field type="text" id="lessonType" name="lessonType" className="mt-1 p-2 w-full border rounded-md" />
						<ErrorMessage name="lessonType" component="div" className="text-red-500" />
					</div>

					<div className="mb-4">
						<label htmlFor="duration" className="block text-gray-700">Duration</label>
						<Field type="number" id="duration" name="duration" className="mt-1 p-2 w-full border rounded-md" />
						<ErrorMessage name="duration" component="div" className="text-red-500" />
					</div>

					<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
				</form>
				<ToastContainer/>
			</FormikProvider>


		</div>
	);
};

export default LessonVideoUpload;
