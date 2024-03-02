import React, { useEffect, useState } from 'react';
import courseService from 'services/courseService';
import Select from 'react-select';
import speakerService from 'services/speakerService';
import { Formik, Form, Field, ErrorMessage } from 'formik';


interface LessonFormValues {
	course: string;
	speaker: string;
	name: string;
	description: string;
	lessonUrl: string;
	imgUrl: string;
	lessonType: string;
	duration: number;
}

const LessonVideoUpload = () => {
	const [courses, setCourses] = useState<{ value: string; label: string; }[]>([]);
	const [selectedCourse, setSelectedCourse] = useState<{ value: string; label: string; } | null>(null);

	const [speakers, setSpeakers] = useState<{ value: string; label: string; }[]>([]);
	const [selectedSpeaker, setSelectedSpeaker] = useState<{ value: string; label: string; } | null>(null);

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const result = await courseService.getAll(0, 20);
				setCourses(result.data.items.map(course => ({
					value: course.id,
					label: course.name
				})));
			} catch (error) {
				console.error("Error fetching courses:", error);
			}
		};
		fetchCourses();

		const fetchSpeakers = async () => {
			try {
				const result = await speakerService.getAll(0, 20);
				setSpeakers(result.data.items.map(speaker => ({
					value: speaker.id,
					label: speaker.firstName + " " + speaker.lastName
				})));
			} catch (error) {
				console.error("Error fetching courses:", error);
			}
		};
		fetchSpeakers();
	}, []);

	const handleCourseChange = (selectedOption: { value: string; label: string; } | null) => {
		setSelectedCourse(selectedOption);
		if (selectedOption) {
			console.log("Selected course ID:", selectedOption.value);
		}
	};

	const handleSpeakerChange = (selectedOption: { value: string; label: string; } | null) => {
		setSelectedSpeaker(selectedOption);
		if (selectedOption) {
			console.log("Selected speaker ID:", selectedOption.value);
		}
	};

	const initialValues: LessonFormValues = {
		course: '',
		speaker: '',
		name: '',
		description: '',
		lessonUrl: '',
		imgUrl: '',
		lessonType: '',
		duration: 0
	};

	const handleSubmit = (values: LessonFormValues) => {
		// Form gönderildiğinde yapılacak işlemler buraya gelecek
		console.log(values);
	};


	return (
		<div>

			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				<Form className="max-w-lg mx-auto">

					<div>
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

					<div>
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
						<label htmlFor="lessonUrl" className="block text-gray-700">Lesson URL</label>
						<Field type="text" id="lessonUrl" name="lessonUrl" className="mt-1 p-2 w-full border rounded-md" />
						<ErrorMessage name="lessonUrl" component="div" className="text-red-500" />
					</div>

					<div className="mb-4">
						<label htmlFor="imgUrl" className="block text-gray-700">Image URL</label>
						<Field type="text" id="imgUrl" name="imgUrl" className="mt-1 p-2 w-full border rounded-md" />
						<ErrorMessage name="imgUrl" component="div" className="text-red-500" />
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
				</Form>
			</Formik>



		</div>
	);
};

export default LessonVideoUpload;
