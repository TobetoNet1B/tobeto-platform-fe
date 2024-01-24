import React from "react";

type Props = {};

const PreLoader = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={"https://lms.tobeto.com/tobeto/eep/Images/TemplateImages/tobeto/Logo.png?rand=1626180397"} alt="Preloader" className="w-[150px] h-[150px] object-contain object-center animate-preloaderAnimation" />
    </div>
  );
};

export default PreLoader;
