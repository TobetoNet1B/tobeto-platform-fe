import { Link } from 'react-router-dom';

type Props = {}

const AdminMain = (props: Props) => {
  return (
    <div className=''>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="alert alert-info">
            <strong>Hoş Geldin Ebu Bekir Sıddık! </strong>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 text-center pt-2 sm:grid-cols-2 xs:grid-cols-1">
          <div className="card w-80 h-40 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://cdn-icons-png.freepik.com/256/3095/3095583.png" alt="Contact" /></figure>
            <div className="card-body">
              <div className="card-actions top-0 left-0 -m-6">
                <Link to={"contact/admininboxmessage"} className="btn btn-primary">E-Mail</Link>
              </div>
            </div>
          </div>

          <div className="card w-80 h-40 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://cdn-icons-png.freepik.com/256/1077/1077063.png" alt="User" /></figure>
            <div className="card-body">
              <div className="card-actions top-0 left-0 -m-6">
                <Link to={"LessonVideoUpload"} className="btn btn-primary">Kullanıcılar</Link>
              </div>
            </div>
          </div>

          <div className="card w-80 h-40 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/classroom-2887087-2396456.png" alt="Classroom" /></figure>
            <div className="card-body">
              <div className="card-actions top-0 left-0 -m-6">
                <Link to={""} className="btn btn-primary">Sınıf</Link>
              </div>
            </div>
          </div>

          <div className="card w-80 h-40 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/classroom-2887087-2396456.png" alt="Student" /></figure>
            <div className="card-body">
              <div className="card-actions top-0 left-0 -m-6">
                <Link to={"Student"} className="btn btn-primary">Öğrenci Listesi</Link>
              </div>
            </div>
          </div>

          <div className="card w-80 h-40 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/classroom-2887087-2396456.png" alt="StudentInfo" /></figure>
            <div className="card-body">
              <div className="card-actions top-0 left-0 -m-6">
                <Link to={"StudentInfo"} className="btn btn-primary">Öğrenci Bilgi Ekleme</Link>
              </div>
            </div>
          </div>
          <div className="card w-80 h-40 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://img.icons8.com/pastel-glyph/64/notice--v2.png" alt="notice--v2"/></figure>
            <div className="card-body">
              <div className="card-actions top-0 left-0 -m-6">
                <Link to={"Announcement"} className="btn btn-primary">Duyurular</Link>
              </div>
            </div>
          </div>
          <div className="card w-80 h-40 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://cdn-icons-png.flaticon.com/512/1187/1187595.png" alt="Blog" /></figure>
            <div className="card-body">
              <div className="card-actions top-0 left-0 -m-6">
                <Link to={""} className="btn btn-primary">Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMain