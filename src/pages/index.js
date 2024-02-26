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

export default function Home() {
  return (
    <div>
      <Header />
      <div className="py-16 px-0">
        <PageName />
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
            <JobWal />
            <JobWal />
            {/*block-job-big  */}
            <JobWalBig />
            <JobWalBig />
            <JobWalBig />
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
