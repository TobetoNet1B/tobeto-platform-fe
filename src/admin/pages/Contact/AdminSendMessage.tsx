import React from 'react'

type Props = {}

const AdminSendMessage = (props: Props) => {
  return (
    <div>
      <div className="email-right-box">
  <div className="toolbar" role="toolbar">
    <div className="btn-group m-b-20">
      <button type="button" className="btn btn-light">
        <i className="fa fa-archive" />
      </button>
      <button type="button" className="btn btn-light">
        <i className="fa fa-exclamation-circle" />
      </button>
      <button type="button" className="btn btn-light">
        <i className="fa fa-trash" />
      </button>
    </div>
    <div className="btn-group m-b-20">
      <button
        type="button"
        className="btn btn-light dropdown-toggle"
        data-toggle="dropdown"
      >
        <i className="fa fa-folder" /> <b className="caret m-l-5" />
      </button>
      <div className="dropdown-menu">
        <span className="dropdown-header">Taşı</span>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Social
        </a>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Promosyon
        </a>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Güncellem
        </a>
        <a className="dropdown-item" href="javascript: void(0);">
          Forum
        </a>
      </div>
    </div>
    <div className="btn-group m-b-20">
      <button
        type="button"
        className="btn btn-light dropdown-toggle"
        data-toggle="dropdown"
      >
        <i className="fa fa-tag" /> <b className="caret m-l-5" />
      </button>
      <div className="dropdown-menu">
        <span className="dropdown-header">Kategoriler:</span>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Updates
        </a>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Sosyak
        </a>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Promosyon
        </a>
        <a className="dropdown-item" href="javascript: void(0);">
          Forum
        </a>
      </div>
    </div>
    <div className="btn-group m-b-20">
      <button
        type="button"
        className="btn btn-light dropdown-toggle"
        data-toggle="dropdown"
      >
        Daha Fazla <span className="caret m-l-5" />
      </button>
      <div className="dropdown-menu">
        <span className="dropdown-header">More Option :</span>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Mark as Unread
        </a>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Add to Tasks
        </a>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Add Star
        </a>{" "}
        <a className="dropdown-item" href="javascript: void(0);">
          Mute
        </a>
      </div>
    </div>
  </div>
  <div className="compose-content mt-5">
    <form method="post">
      <div className="form-group">
        <input
          type="text"
          className="form-control bg-transparent"
          asp-for="ReceiverMail"
          placeholder=" Alıcı Mail Adresi"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control bg-transparent"
          asp-for="Title"
          placeholder=" Konu"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control bg-transparent"
          asp-for="ReceiverName"
          placeholder=" Alıcı Adı Soyadı"
        />
      </div>
      <div className="form-group">
        <textarea
          className="textarea_editor form-control bg-light"
          rows={15}
          placeholder="Mesajınızı Yazınız..."
          asp-for="Content"
          defaultValue={""}
        />
      </div>
      <div className="text-left m-t-15">
        <button className="btn btn-primary m-b-30 m-t-15 f-s-14 p-l-20 p-r-20 m-r-10">
          <i className="fa fa-paper-plane m-r-5" /> Gönder
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default AdminSendMessage