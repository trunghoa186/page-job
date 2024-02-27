import React from "react";

const JobWal = ({image , titleAll , contentTop , title1 , title2 , title3 , content1 , content2, content3}) => {
  return (
    <div className="block-job-big mb-20">
      <div className="text-center max-w-full w-full block-job-image">
        <img
          src="/images/icons/icon-new.svg"
          height={160}
          width={160}
          alt="icon-new"
          className="secondary-image-new"
        />
        <img src={image} height={435} alt={image} />
      </div>
      <div className="text-2xl md:text-4xl my-8 searchType-line-1">
        <p className="main-color mb-8">
        {titleAll}
          
        </p>
        <p className="mb-8 indent-5">
        {contentTop}
          
        </p>
      </div>
      <div className="text-xl md:text-4xl searchType-line-1 flex flex-col gap-8">
        <div className="flex flex-row">
          <p className="basis-4/12 md:basis-3/12 font-semibold">{title1}</p>
          <p className="basis-8/12 md:basic-9/12">
            {content1}
          </p>
        </div>
        <div className="flex flex-row">
          <p className="basis-4/12 md:basis-3/12 font-semibold">{title2}</p>
          <p className="basis-8/12 md:basis-9/12">{content2}
            
          </p>
        </div>
        <div className="flex">
          <p className="basis-4/12 md:basis-3/12 font-semibold">{title3}</p>
          <p className="basis-8/12 md:basis-9/12">{content3}
            
          </p>
        </div>
        <div className="flex mb-8">
          <p className="basis-4/12 md:basis-3/12 font-semibold">住所</p>
          <p className="basis-8/12 md:basis-9/12">
            東京都世田谷区大原○丁目○○ ステーションプラザ ○○ 京王線
            ○○駅から徒歩で約2分
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 mt-3">
        <div className="flex text-2xl gap-4 justify-center md:justify-start">
          <button className="block-job-btn btn-blue">正社員</button>
          <button className="block-job-btn btn-green">契約社員</button>
          <button className="block-job-btn btn-dark-blue">派遣社員</button>
        </div>
        <button className="max-w-60 text-2xl block-job-btn btn-orange">
          アルバイト・パート
        </button>
      </div>
      <div className=" mt-6 text-2xl sm:text-4xl flex flex-col lg:flex-row gap-6 lg:gap-0 justify-around">
        <div className="block-job-btn-big px-10 py-4 sm:px-24 sm:py-10">
          <button className="w-full ">★キープする</button>
        </div>
        <div className="block-job-btn-big px-10 py-4 sm:px-24 sm:py-10">
          <button className="w-full">求人詳細を見る</button>
        </div>
      </div>
    </div>
  );
};

export default JobWal;
