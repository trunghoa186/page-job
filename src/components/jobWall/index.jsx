import React from "react";

const JobWal = ({ image, content1, content2 }) => {
  return (
    <div className="block-job flex flex-col md:flex-row items-center gap-2 mt-8">
      <div className="block-job-image ml-4">
        <img
          src="/images/icons/outstanding.svg"
          height={90}
          width={230}
          alt="brand-icon"
          className="secondary-image"
        />
        <img src={image} height={336} width={504} alt="brand-icon" />
      </div>
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex text-lg gap-2 font-semibold">
          <p className="block-job-btn btn-blue">正社員</p>
          <p className="block-job-btn btn-green">契約社員</p>
          <p className="block-job-btn btn-dark-blue">派遣社員</p>
          <p className="block-job-btn btn-orange">
            アルバイト・パート
          </p>
        </div>
        <p className="text-xl md:text-xl font-semibold">{content1}</p>
        <p className="text-xl md:text-xl">{content2}</p>
      </div>
    </div>
  );
};

export default JobWal;
