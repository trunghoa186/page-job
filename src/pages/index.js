import { FC, Fragment, PropsWithChildren } from "react";
import Container from "@mui/material/Container";

import WorkLocationMap from "@/components/WorkLocationMap";
import SearchJobByOptions from "@/components/SearchJobByOptions";
import WorkingTypes from "@/components/WorkingTypes";
import NewsSection from "@/components/NewsSection";

import Header from "@/components/layout/header/index";
import Footer from "@/components/layout/footer/index";
import PageName from "@/components/PageName";
import Banner from "@/components/banner";
import SearchType from "@/components/searchType";
import JobWal from "@/components/jobWall";
import JobWalBig from "@/components/jobWallBig";
import TitleSection from "@/components/titleSection";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="py-16 px-0">
        <PageName title="求人 一覧" />
        <Banner />
        <SearchType />
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
            <JobWal content1="保育士(認可保育園/託児所)/資格必須/ブランクあり" content2="東京都東久留米市" image="/images/home/image-1.svg"/>
            <JobWal content1="保育士(認可保育園/託児所)/資格必須/ブランクあり" content2="東京都東久留米市" image="/images/home/image-1.svg"/>
            {/*block-job-big  */}
            <JobWalBig 
              image="/images/home/image-1.svg"
              titleAll="ヒューマンライフケア〇〇輪の訪問 【2024年4月1日オー プン予定】ヘルパー求人"
              contentTop=" 世田谷区大原」 全員正社員採用の新スタイル事業/ 24年4月オープ ン予定/ 「月給25.6万円~+賞与」 の業界高水準給与/ 介護の理想を あなたと形にしたい「" 
              title1="給与"
              content1="正職員 月給 256,000円~320,000円"
              title2="仕事内容"
              content2="主に拠点から5分以内の提供範囲にある利用者のご自 宅に電動自動車で伺い、身体介護を中心に掃除・洗・・・"
              title3="応募条件"
              content3="◎年齢・64歳までの方(定年年齢未満の募集) ◎必須資 格(下記いずれかの福祉資格) 介護福祉士実務者・・・"
              />
            <JobWalBig />
            <JobWalBig />
          </Container>
        </div>

        {/* WorkLocationMap */}
        <div className="bg-white py-20">
          <Container>
            <TitleSection contents="勤務地から探す" />
            <WorkLocationMap />

            <TitleSection contents="雇用形態から探す" />
            <WorkingTypes />

            <TitleSection contents="勤務地から探す" />
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
