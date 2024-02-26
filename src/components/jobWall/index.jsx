import React from "react";

const JobWal = () => {
  return (
    <div className="block-job flex flex-col md:flex-row items-center gap-2">
      <div className="block-job-image ml-4">
        <img
          src="/images/icons/outstanding.svg"
          height={90}
          width={230}
          alt="brand-icon"
          className="secondary-image"
        />
        <img
          src="/images/home/image-1.svg"
          height={336}
          width={504}
          alt="brand-icon"
        />
      </div>
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex text-2xl gap-4">
          <button className="block-job-btn btn-blue">正社員</button>
          <button className="block-job-btn btn-green">契約社員</button>
          <button className="block-job-btn btn-dark-blue">派遣社員</button>
        </div>
        <button className="max-w-60 text-2xl block-job-btn btn-orange">
          アルバイト・パート
        </button>
        <p className="text-2xl md:text-4xl">
          保育士(認可保育園/託児所)/資格必須/ブランクあり
        </p>
        <p className="text-xl md:text-2xl">東京都東久留米市</p>
      </div>
    </div>
  );
};

export default JobWal;