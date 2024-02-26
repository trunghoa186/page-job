import React from "react";
import Container from "@mui/material/Container";
import style from "@/styles/searchType.module.css";


const SearchType = () => {
  return (
    <Container className="mt-6">
      <div className={`${style.searchType_line} pb-9 flex justify-around items-center text-2xl`}>
        <div className={`${style.searchType_box} gap-5 flex flex-col justify-center items-center`}>
          <img
            src="/images/icons/icon-map.svg"
            height={70}
            width={40}
            alt="brand-icon"
          />
          <p>市区町村から探す</p>
        </div>
        <div className={`${style.searchType_box} gap-5 flex flex-col justify-center items-center`}>
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
      <div className={`${style.searchType_extra} flex gap-5 items-center text-2xl`}>
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

      <div className={`${style.searchType_extra} flex gap-5 items-center text-2xl`}>
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
  );
};

export default SearchType;
