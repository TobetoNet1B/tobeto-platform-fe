import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  imgUrl?: string;
  description?: string;
  createdDate: string;
  buttonText?: string;
  companyName?: string;
  name?: string;
  type?: string;
  title?: string;
  id?: string;
};
export const ECard = (props: Props) => {
  const isDescriptionOverflowing = props.name && props.name.length > 30;
  const baseMarginBottom = 4;
  const maxMarginBottom = isDescriptionOverflowing ? 1 : baseMarginBottom;
  const formattedDate = new Date(props.createdDate).toLocaleDateString();
  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 m-2">
      <div
        className={`h-full max-w-md bg-white rounded-xl shadow-md overflow-hidden hover:shadow-[5px_5px_5px_5px_rgba(153,51,255,0.6)] flex flex-col justify-between`}
      >
        {props.imgUrl && (
          <div>
            <img
              className="h-48 w-full object-cover rounded-t-2xl p-1"
              src={props.imgUrl}
              alt={props.name}
            />
          </div>
        )}
        <div
          className={`pl-4 pt-3 pb-${maxMarginBottom} cm`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          <div className="tracking-wide text-sm font-semibold text-[#767676]">
            {props.name}
          </div>
          <p className="block mt-1 text-sm leading-tight font-medium text-black">
            {formattedDate}
          </p>
        </div>
        <div className="pb-4"></div>
        <p className="hidden">{props.companyName}</p>
        <div className="p-4">
          {props.buttonText && (
            <Link to={`/moduleset/${props.id}`}>
              <button className="w-full px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-[#9933ff]">
                {props.buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default ECard;

export const ACard = (props: Props) => {
  const isDescriptionOverflowing = props.title && props.title.length > 50;
  const baseMarginBottom = 5;
  const maxMarginBottom = isDescriptionOverflowing ? 1 : baseMarginBottom;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formattedDate = new Date(props.createdDate).toLocaleDateString();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative h-4/6 sm:w-1/2 md:w-1/3 xl:w-[390px] ml-2 mr-3 pr-3 pb-7 overflow-auto">
      <div className="h-full max-w-md shadow-lg shadow-[#e2e2e2] bg-[#FFFFFF] rounded-xl border-l-8 border-l-[#01956E] overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="mt-1 ml-4 text-sm leading-tight font-medium text-green-800">
              {props.type}
            </div>
          </div>
          <div className="text-right">
            <p
              className={`block mt-1 mr-3 text-sm leading-tight font-medium text-green-800`}
            >
              {props.companyName}
            </p>
          </div>
        </div>

        <div
          className={`pl-4 pt-3 pb-${maxMarginBottom} cm`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          <div className="tracking-wide text-sm font-semibold text-[#767676]">
            {props.title}
          </div>
        </div>
        <div className="pb-5"></div>
        <div
          className="p-4 mb-1 flex items-center justify-between"
          style={{ marginTop: isDescriptionOverflowing ? 2 : 0 }}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            <p className="block ml-2 mt-1 text-sm leading-tight font-medium text-[#767676]">
              {formattedDate}
            </p>
          </div>
          {props.buttonText && (
            <span className="text-[#767676]">
              <button onClick={toggleModal}>{props.buttonText}</button>
            </span>
          )}
          {isModalOpen && (
            <>
              <div
                className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
                onClick={toggleModal}
              ></div>
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl">
                <div className="bg-white p-8 rounded-lg w-full h-full overflow-y-auto">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold mb-4">{props.title}</h2>
                    <button
                      onClick={toggleModal}
                      className="text-gray-500 hover:text-gray-700 mb-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  {props.description && (
                    <p className="text-md">{props.description}</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
