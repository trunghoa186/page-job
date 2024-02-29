import React from "react";
import Container from "@mui/material/Container";
import style from "@/styles/searchType.module.css";

const SearchType = () => {
  return (
    <Container className="mt-6 max-w-screen-lg">
      <div
        className={`${style.searchType_line} pb-9 flex justify-around items-center text-2xl`}
      >
        <a href="">
          <div
            className={`${style.searchType_box} gap-5 flex flex-col justify-center items-center`}
          >
            <img
              src="/images/icons/icon-map.svg"
              height={70}
              width={40}
              alt="brand-icon"
            />
            <p>市区町村から探す</p>
          </div>
        </a>
        <a href="">
          <div
            className={`${style.searchType_box} gap-5 flex flex-col justify-center items-center`}
          >
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
        </a>
      </div>
      <a href="" 
        className={`${style.searchType_extra} flex gap-5 items-center text-xl hover:bg-blue-100`}
      >
        <div className="main-color ml-5">
          <img
            src="/images/icons/puzzle.svg"
            height={35}
            width={35}
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
      </a>
      <a href="" 
        className={`${style.searchType_extra} flex gap-5 items-center text-xl hover:bg-blue-100`}
      >
        <div className="main-color ml-5">
          <img
            src="/images/icons/puzzle.svg"
            height={35}
            width={35}
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
      </a>
    </Container>
  );
};

export default SearchType;
