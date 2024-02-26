import React from "react";
import Style from "@/styles/banner.module.css"

const Banner = () => {
  return (
    <div className={`${Style.banner} flex flex-col justify-center`}>
      <div className={`${Style.banner_child_1} `}>
        <div className={`${Style.banner_img} `}>
          <img
            src="/images/icons/banner.svg"
            height={206}
            width={413}
            alt="brand-icon"
          />
        </div>
        <p className={`${Style.banner_child_1_text_big} `}>東京都</p>
        <p className={`${Style.banner_child_1_text_small} `}>の求人情報</p>
      </div>
      <div className={`${Style.banner_child_2} `}>
        <div className={`${Style.banner_child_2_text} flex gap-5`}>
          <p>該当件数 </p>
          <p>
            <span className={`${Style.banner_text_color}`}>9052</span>件
          </p>
        </div>
        <div>
          <button className={`${Style.banner_button}`}>都道府県を変更</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
