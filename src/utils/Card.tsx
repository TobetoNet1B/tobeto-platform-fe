import { Link } from "react-router-dom";

type Props = {
  image?: string;
  tarih: string;
  description: string;
  buttonText?: string;
  baslik?: string;
  kurum?: string;
};
export const Card = (props: Props) => {
  const isDescriptionOverflowing = props.description.length > 30; // Örnek bir uzunluk, istediğiniz uzunluğa göre ayarlayabilirsiniz.
  const marginBottom = isDescriptionOverflowing ? 2 : 5; // Açıklama alanı uzunsa boşluğu azalt

  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 m-2">
      <div className={`h-full max-w-md bg-white rounded-xl shadow-md overflow-hidden hover:shadow-[5px_5px_5px_5px_rgba(153,51,255,0.6)] flex flex-col justify-between`}>
        {props.image && (
          <div>
            <img
              className="h-48 w-full object-cover rounded-t-2xl p-1"
              src={props.image}
              alt={props.description}
            />
          </div>
        )}
        <div className={`pl-5 pt-3 pb-${marginBottom}`}>
          <div className="uppercase tracking-wide text-base font-semibold">
            {props.description}
          </div>
          <p className="block mt-1 text-sm leading-tight font-medium text-black">
            {props.tarih}
          </p>
        </div>
        <p className="hidden">{props.kurum}</p>
        <div className="p-4">
          {props.buttonText && (
            <button className="w-full px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-[#9933ff]">
              {props.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;

export const ACard = (props: Props) => {
  return (
    <div className="h-4/6 sm:w-1/2 md:w-1/3 xl:w-1/4 ml-4 mr-4 p-3 pb-7">
      <div className="h-full max-w-md shadow-lg shadow-[#e2e2e2] bg-[#FFFFFF] rounded-xl  border-l-8 border-l-[#01956E] overflow-hidden ">
        <div className="flex items-center justify-between mb-2 ">
          <div>
            <div className="mt-1 ml-4 text-sm leading-tight font-medium text-green-800 ">
              {props.baslik}
            </div>
          </div>
          <div className="text-right">
            <p className="block mt-1 mr-3 text-sm leading-tight font-medium text-green-800">
              {props.kurum}
            </p>
          </div>
        </div>

        <div className="pl-4 pt-3">
          <div className="uppercase tracking-wide text-sm font-semibold text-[#767676]">
            {props.description}
          </div>
        </div>
        <br />
        <div className="p-4 mb-1 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            <p className="block ml-2 mt-1 text-sm leading-tight font-medium text-[#767676]">
              {props.tarih}
            </p>
          </div>
          {props.buttonText ? (
            <span className=" text-[#767676]">
              <Link to={"/*"}>{props.buttonText}</Link>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
