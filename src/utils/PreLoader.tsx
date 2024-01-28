import React, { useEffect, useState } from "react";

type Props = {};

const PreLoader = (props: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div >{loading ? (
      <div className="flex justify-center items-center h-screen">
        <img src={"https://lms.tobeto.com/tobeto/eep/Images/TemplateImages/tobeto/Logo.png?rand=1626180397"} alt="Preloader" className="w-[150px] h-[150px] object-contain object-center animate-preloaderAnimation" />
      </div>) : (
      <div className="flex justify-center mt-20 items-center flex-col">
        <div className="skeleton w-4/5 mb-2 h-32"></div>
        <div className="skeleton w-4/5 h-[500px]"></div>
      </div>
    )}


    </div>
  );
};

export default PreLoader;
