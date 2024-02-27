import NotFound from "pages/NotFound";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
function FooterBoxes() {
  const navigate = useNavigate();

  const toCreateProfile = () => {
    navigate("/profilim/profilimi-duzenle/kisisel-bilgilerim");
  };

  const toEvaluations = () => {
    navigate("/degerlendirmeler");
  };

  const toNotFound = () => {
    navigate("/notfound");
  };

  return (
    <div className="flex w-[1150px] max-h-[500px] mt-10 mx-auto px-[20px] flex-row justify-between">
      <div style={{ boxShadow: "0 40px 80px rgba(24, 32, 79, 0.25)" }} className="footer-box col-span-1 md:col-span-1 mb-6">
        <div
          style={{ borderRadius: "0 30px 40px 40px" }}
          className=" max-w-64 h-64 p-5  bg-gradient-to-tr from-[#b9a2fb] to-[#1d0b8c] "
        >
          <div className="text-center">
            <p
              style={{ margin: "80px 0 80px 0" }}
              className="lg:my-[126px] mx-auto text-2xl  font-extrabold text-white mb-12  footer-text"
            >
              Profilini oluştur <br />
              <button
                onClick={toCreateProfile}
                className="w-52 h-9 bg-purple-600 rounded-2xl mt-16 transition duration-300 hover:bg-indigo-700 text-sm font-extrabold text-white"
              >
                Başla
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-box col-span-1 md:col-span-1  box2 ">
        <div
          style={{ borderRadius: "0 30px 40px 40px" }}
          className=" max-w-64 h-64 card rounded-ss-none rounded-[32px] p-5  bg-gradient-to-tr from-[#b9a2fb] to-[#1d0b8c] "
        >
          <div className="text-center">
            <p
              style={{ margin: "48px 0 80px 0" }}
              className="lg:my-[126px] mx-auto text-2xl  font-extrabold text-white mb-12  footer-text"
            >
              Kendini değerlendir <br />
              <button
                onClick={toEvaluations}
                className="w-52 h-9 bg-purple-600 rounded-2xl mt-16 transition duration-300 hover:bg-indigo-700 text-sm font-extrabold text-white"
              >
                Başla
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-box col-span-1 md:col-span-1 mb-6 box3 ">
        <div
          style={{ borderRadius: "0 30px 40px 40px" }}
          className="  max-w-64 h-64 card rounded-ss-none rounded-[32px] p-5  bg-gradient-to-tr from-[#b9a2fb] to-[#1d0b8c] "
        >
          <div className="text-center">
            <p
              style={{ margin: "48px 0 80px 0" }}
              className="lg:my-[126px] mx-auto text-2xl  font-extrabold text-white mb-12  footer-text"
            >
              Öğrenmeye başla
              <br />
              <button
                onClick={toNotFound}
                className="w-52 h-9 bg-purple-600 rounded-2xl mt-16 transition duration-300 hover:bg-indigo-700 text-sm font-extrabold text-white"
              >
                Başla
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBoxes;
