import React, { useEffect, useState } from 'react';
import { GetAllStudentResponse } from 'models/responses/students/getAllStudentResponse';
import { GetStudentResponse } from 'models/responses/students/getStudentResponse';
import studentService from 'services/studentService';

const pageSize = 5;
var page=1;

const StudentList = () => {
	const [students, setStudents] = useState<GetAllStudentResponse | null>(null);
	const [selectedStudent, setSelectedStudent] = useState<GetStudentResponse | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Yeni eklenen state

  useEffect(() => {
    fetchStudents(currentPage);
  }, [currentPage]);

	const fetchStudents = async (page: number) => {
    try {
      const result = await studentService.getAll(page-1, pageSize); // API genellikle 0'dan saymaya başlar
      setStudents(result.data as GetAllStudentResponse);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };


	const fetchStudentDetails = async (studentId: any) => {
		try {
			const result = await studentService.getById(studentId);
			setSelectedStudent(result.data as GetStudentResponse);
			setIsModalOpen(true);
		} catch (error) {
			console.error("Error fetching student details:", error);
		}
	};

	const closeModal = () => setIsModalOpen(false);

	const renderPageNumbers = () => {
    const totalPages = Math.ceil((students?.count ?? 0) / pageSize);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 border rounded ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

	return (
    <div>
      <h1 className="text-center mb-8 font-extrabold text-2xl">Öğrenci Listesi</h1>
      <div className="flex flex-col gap-4 items-center">
        {students?.items.map((student) => (
          <div key={student.id} onClick={() => fetchStudentDetails(student.userId)} className="border border-gray-300 rounded-lg p-4 w-4/5 max-w-md shadow-md cursor-pointer">
            <h2 className="font-bold">{student.user.firstName} {student.user.lastName}</h2>
            <p>Email: {student.user.email}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {renderPageNumbers()}
      </div>
      {isModalOpen && selectedStudent && <StudentDetailsModal student={selectedStudent} onClose={closeModal} />}
    </div>
  );
};

const StudentDetailsModal = ({ student, onClose }: { student: GetStudentResponse, onClose: () => void }) => {
	return (
		<div className="fixed top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 z-50 rounded-lg shadow-lg w-4/5 max-w-2xl">
			<button onClick={onClose} className="absolute top-3 right-3">Kapat</button>
			<h2><div className='font-bold'>Ad Soyad:</div> {student.user.firstName} {student.user.lastName}</h2>
			<p><div className='font-bold'>Email:</div> {student.user.email}</p>
			<p><div className='font-bold'>Doğum Tarihi:</div> {student.birthDate}</p>
			<p><div className='font-bold'>Telefon:</div> {student.phoneNumber}</p>
			<p><div className='font-bold'>Sınavlar:</div> {student.studentExams?.map((studentExams, index) => (<h5 key={index} className=''>{studentExams.examName}-{studentExams.score}</h5>))}</p>
			<p><div className='font-bold'>Deneyimler:</div> {student.experiences?.map((experiences, index) => (<h5 key={index} className=''>{experiences.companyName}</h5>))}</p>
			<p><div className='font-bold'>Yabancı Diller:</div> {student.studentForeignLanguages?.map((studentForeignLanguages, index) => (<h5 key={index} className=''>{studentForeignLanguages.languageName}-{studentForeignLanguages.languageLevel}</h5>))}</p>
			<p><div className='font-bold'>Sınıf:</div> {student.studentClassrooms?.map((studentClassrooms, index) => (<h5 key={index} className=''>{studentClassrooms.className}</h5>))}</p>
			<p><div className='font-bold'>Sosyal Medya:</div> {student.socialMedias?.map((socialMedias, index) => (<h5 key={index} className=''>{socialMedias.name}-{socialMedias.socialMediaUrl}</h5>))}</p>
			<p><div className='font-bold'>Eğitim:</div> {student.educations?.map((educations, index) => (<h5 key={index} className=''>{educations.university}-{educations.department}</h5>))}</p>
			<p><div className='font-bold'>Sertifikalar:</div> {student.certificates?.map((certificates, index) => (<h5 key={index} className=''>{certificates.name}</h5>))}</p>
			<p><div className='font-bold'>Yetenekler:</div> {student.abilities?.map((ability, index) => (<h5 key={index} className=''>{ability.name}</h5>))}</p>
			{/* Diğer detaylar burada listelenebilir */}
		</div>
	);
};

export default StudentList;
