import { FC, Fragment, PropsWithChildren } from "react";
import Container from "@mui/material/Container";

import Header from "@/components/layout/header/index";
import Footer from "@/components/layout/footer/index";
import WorkLocationMap from "@/components/WorkLocationMap";
import SearchJobByOptions from "@/components/SearchJobByOptions";
import WorkingTypes from "@/components/WorkingTypes";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="py-16 px-0">
        <div className="pageName bg-white">
          <Container>
            <div className="py-4 flex items-center gap-6">
              <img
                src="/images/icons/icon-home.svg"
                height={20}
                width={20}
                alt="brand-icon"
              />
              <img
                src="/images/icons/big-mark.svg"
                height={20}
                width={20}
                alt="brand-icon"
              />
              <p className="font-semibold">求人 一覧</p>
            </div>
          </Container>
        </div>
        {/* banner */}
        <div className="banner flex flex-col justify-center">
          <div className="banner-child-1">
            <div className="banner-img">
              <img
                src="/images/icons/banner.svg"
                height={206}
                width={413}
                alt="brand-icon"
              />
            </div>
            <p className="banner-child-1-text-big">東京都</p>
            <p className="banner-child-1-text-small">の求人情報</p>
          </div>
          <div className="banner-child-2">
            <div className="banner-child-2-text flex gap-5">
              <p>該当件数 </p>
              <p>
                <span className="banner-text-color">9052</span>件
              </p>
            </div>
            <div>
              <button className="banner-button">都道府県を変更</button>
            </div>
          </div>
        </div>
        {/* search type */}
        <Container className="mt-6">
          <div className="searchType-line pb-9 flex justify-around items-center text-2xl">
            <div className="searchType-box gap-5 flex flex-col justify-center items-center">
              <img
                src="/images/icons/icon-map.svg"
                height={70}
                width={40}
                alt="brand-icon"
              />
              <p>市区町村から探す</p>
            </div>
            <div className="searchType-box gap-5 flex flex-col justify-center items-center">
              <div>
                <img
                  src="/images/icons/carman.svg"
                  height={74}
                  width={194}
                  alt="brand-icon"
                />
              </div>
              <p>路線から探す</p>
            </div>
          </div>
          <div className="searchType-extra flex gap-5 items-center text-2xl">
            <div className="main-color ml-5">
              <img
                src="/images/icons/puzzle.svg"
                height={34}
                width={34}
                alt="brand-icon"
              />
            </div>
            <p className="flex-1">雇用形態から探す</p>
            <img
              src="/images/icons/big-mark.svg"
              height={25}
              width={20}
              alt="brand-icon"
              className="mr-5"
            />
          </div>

          <div className="searchType-extra flex gap-5 items-center text-2xl">
            <div className="main-color ml-5">
              <img
                src="/images/icons/puzzle.svg"
                height={34}
                width={34}
                alt="brand-icon"
              />
            </div>
            <p className="flex-1">絞り込んで探す</p>
            <img
              src="/images/icons/big-mark.svg"
              height={25}
              width={20}
              alt="brand-icon"
              className="mr-5"
            />
          </div>
        </Container>

        {/* Title-job-wall */}
        <div className="title-job-wall flex flex-col text-center ">
          <p className="text-4xl md:text-5xl mt-8 underline text-center">
            東京都の求人
          </p>
          <div className="h-20 text-base md:text-4xl flex ">
            <a className="title-job-wall-a pt-6 h-full w-full" href="#">
              おすすめ順
            </a>
            <a className="title-job-wall-a pt-6 h-full w-full" href="#">
              新着順
            </a>
            <a className="title-job-wall-a pt-6 h-full w-full" href="#">
              自宅に近い順
            </a>
          </div>
        </div>

        {/* job-wall */}
        <div className="job-wall-all">
          <Container>
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
                  <button className="block-job-btn btn-dark-blue">
                    派遣社員
                  </button>
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

            {/*block-job-big  */}

            <div className="block-job-big mb-20">
              <div className="text-center max-w-full w-full block-job-image">
                <img
                  src="/images/icons/icon-new.svg"
                  height={160}
                  width={160}
                  alt="icon-new"
                  className="secondary-image-new"
                />
                <img
                  src="/images/home/image-1.svg"
                  height={435}
                  alt="image-1"
                />
              </div>
              <div className="text-2xl md:text-4xl my-8 searchType-line-1">
                <p className="main-color mb-8">
                  ヒューマンライフケア〇〇輪の訪問 【2024年4月1日オー プン予定】
                  ヘルパー求人
                </p>
                <p className="mb-8">
                  「世田谷区大原」 全員正社員採用の新スタイル事業/ 24年4月オープ
                  ン予定/ 「月給25.6万円~+賞与」 の業界高水準給与/ 介護の理想を
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
                  <p className="basis-4/12 md:basis-3/12 font-semibold">
                    仕事内容
                  </p>
                  <p className="basis-8/12 md:basis-9/12">
                    主に拠点から5分以内の提供範囲にある利用者のご自
                    宅に電動自動車で伺い、身体介護を中心に掃除・洗・・・
                  </p>
                </div>
                <div className="flex">
                  <p className="basis-4/12 md:basis-3/12 font-semibold">
                    応募条件
                  </p>
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
                  <button className="block-job-btn btn-dark-blue">
                    派遣社員
                  </button>
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

            <div className="block-job-big mb-20">
              <div className="text-center max-w-full w-full block-job-image">
                <img
                  src="/images/icons/icon-new.svg"
                  height={160}
                  width={160}
                  alt="icon-new"
                  className="secondary-image-new"
                />
                <img
                  src="/images/home/image-1.svg"
                  height={435}
                  alt="image-1"
                />
              </div>
              <div className="text-2xl md:text-4xl my-8 searchType-line-1">
                <p className="main-color mb-8">
                  ヒューマンライフケア〇〇輪の訪問 【2024年4月1日オー プン予定】
                  ヘルパー求人
                </p>
                <p className="mb-8">
                  「世田谷区大原」 全員正社員採用の新スタイル事業/ 24年4月オープ
                  ン予定/ 「月給25.6万円~+賞与」 の業界高水準給与/ 介護の理想を
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
                  <p className="basis-4/12 md:basis-3/12 font-semibold">
                    仕事内容
                  </p>
                  <p className="basis-8/12 md:basis-9/12">
                    主に拠点から5分以内の提供範囲にある利用者のご自
                    宅に電動自動車で伺い、身体介護を中心に掃除・洗・・・
                  </p>
                </div>
                <div className="flex">
                  <p className="basis-4/12 md:basis-3/12 font-semibold">
                    応募条件
                  </p>
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
                  <button className="block-job-btn btn-dark-blue">
                    派遣社員
                  </button>
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

            <div className="block-job-big mb-20">
              <div className="text-center max-w-full w-full block-job-image">
                <img
                  src="/images/icons/icon-new.svg"
                  height={160}
                  width={160}
                  alt="icon-new"
                  className="secondary-image-new"
                />
                <img
                  src="/images/home/image-1.svg"
                  height={435}
                  alt="image-1"
                />
              </div>
              <div className="text-2xl md:text-4xl my-8 searchType-line-1">
                <p className="main-color mb-8">
                  ヒューマンライフケア〇〇輪の訪問 【2024年4月1日オー プン予定】
                  ヘルパー求人
                </p>
                <p className="mb-8">
                  「世田谷区大原」 全員正社員採用の新スタイル事業/ 24年4月オープ
                  ン予定/ 「月給25.6万円~+賞与」 の業界高水準給与/ 介護の理想を
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
                  <p className="basis-4/12 md:basis-3/12 font-semibold">
                    仕事内容
                  </p>
                  <p className="basis-8/12 md:basis-9/12">
                    主に拠点から5分以内の提供範囲にある利用者のご自
                    宅に電動自動車で伺い、身体介護を中心に掃除・洗・・・
                  </p>
                </div>
                <div className="flex">
                  <p className="basis-4/12 md:basis-3/12 font-semibold">
                    応募条件
                  </p>
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
                  <button className="block-job-btn btn-dark-blue">
                    派遣社員
                  </button>
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
          </Container>
        </div>

        {/* WorkLocationMap */}
        <div className="bg-white py-20">
          <Container>
            <div className="ml-10 mb-11 flex gap-4 text-xl items-center">
              <img
                src="/images/icons/puzzle.svg"
                height={30}
                width={30}
                alt="puzzle"
              />
              <p className="font-semibold">勤務地から探す</p>
            </div>
            <WorkLocationMap />
            <div className="mt-20 ml-10 mb-11 flex gap-4 text-xl items-center">
              <img
                src="/images/icons/puzzle.svg"
                height={45}
                width={50}
                alt="puzzle"
              />
              <p className="font-semibold">雇用形態から探す</p>
            </div>
            <WorkingTypes />

            <div className="mt-20 ml-10 mb-11 flex gap-4 text-xl items-center">
              <img
                src="/images/icons/puzzle.svg"
                height={45}
                width={50}
                alt="puzzle"
              />
              <p className="font-semibold">勤務地から探す</p>
            </div>
            <div className="ml-10 text-center fix-code">
              <SearchJobByOptions />
            </div>
          </Container>
        </div>
        <Container>
          <NewsSection />
        </Container>
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
