import React from "react";

const JobWal = ({
  image,
  titleAll,
  contentTop,
  title1,
  title2,
  title3,
  content1,
  content2,
  content3,
}) => {
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
      <div className="text-xl md:text-3xl my-8 searchType-line-1">
        <p className="main-color mb-8 font-semibold">{titleAll}</p>
        <p className="mb-8 indent-5">{contentTop}</p>
      </div>
      <div className="text-xl md:text-2xl searchType-line-1 flex flex-col gap-8">
        <div className="flex flex-row">
          <p className="basis-4/12 md:basis-3/12 font-semibold">{title1}</p>
          <p className="basis-8/12 md:basic-9/12">{content1}</p>
        </div>
        <div className="flex flex-row">
          <p className="basis-4/12 md:basis-3/12 font-semibold">{title2}</p>
          <p className="basis-8/12 md:basis-9/12">{content2}</p>
        </div>
        <div className="flex">
          <p className="basis-4/12 md:basis-3/12 font-semibold">{title3}</p>
          <p className="basis-8/12 md:basis-9/12">{content3}</p>
        </div>
        <div className="flex mb-8">
          <p className="basis-4/12 md:basis-3/12 font-semibold">住所</p>
          <p className="basis-8/12 md:basis-9/12">
            東京都世田谷区大原○丁目○○ ステーションプラザ ○○ 京王線
            ○○駅から徒歩で約2分
          </p>
        </div>
      </div>

      <div className="mt-6 flex text-lg gap-2 font-semibold">
        <p className="block-job-btn btn-blue">正社員</p>
        <p className="block-job-btn btn-green">契約社員</p>
        <p className="block-job-btn btn-dark-blue">派遣社員</p>
        <p className="block-job-btn btn-orange">アルバイト・パート</p>
      </div>
      <div className=" mt-6 text-2xl sm:text-4xl flex flex-col lg:flex-row gap-6 lg:gap-0 justify-around">
          <button className="block-job-btn-big px-10 py-2 sm:px-24 sm:py-4 hover:bg-blue-600">★キープする</button>
          <button className="block-job-btn-big px-10 py-2 sm:px-24 sm:py-4 hover:bg-blue-600">求人詳細を見る</button>
      </div>
    </div>
  );
};

export default JobWal;
