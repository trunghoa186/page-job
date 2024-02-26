import React from "react";

const JobWal = () => {
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
        <img src="/images/home/image-1.svg" height={435} alt="image-1" />
      </div>
      <div className="text-2xl md:text-4xl my-8 searchType-line-1">
        <p className="main-color mb-8">
          ヒューマンライフケア〇〇輪の訪問 【2024年4月1日オー プン予定】
          ヘルパー求人
        </p>
        <p className="mb-8">
          「世田谷区大原」 全員正社員採用の新スタイル事業/ 24年4月オープ ン予定/
          「月給25.6万円~+賞与」 の業界高水準給与/ 介護の理想を
          あなたと形にしたい
        </p>
      </div>
      <div className="text-xl md:text-4xl searchType-line-1 flex flex-col gap-8">
        <div className="flex flex-row">
          <p className="basis-4/12 md:basis-3/12 font-semibold">給与</p>
          <p className="basis-8/12 md:basic-9/12">
            正職員 月給 256,000円~320,000円
          </p>
        </div>
        <div className="flex flex-row">
          <p className="basis-4/12 md:basis-3/12 font-semibold">仕事内容</p>
          <p className="basis-8/12 md:basis-9/12">
            主に拠点から5分以内の提供範囲にある利用者のご自
            宅に電動自動車で伺い、身体介護を中心に掃除・洗・・・
          </p>
        </div>
        <div className="flex">
          <p className="basis-4/12 md:basis-3/12 font-semibold">応募条件</p>
          <p className="basis-8/12 md:basis-9/12">
            ◎年齢・64歳までの方(定年年齢未満の募集) ◎必須資
            格(下記いずれかの福祉資格) 介護福祉士実務者・・・
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
