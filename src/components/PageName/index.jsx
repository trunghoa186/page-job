import React from "react";
import Styles from "@/styles/pageName.module.css"
import Container from "@mui/material/Container";

const PageName = () => {
  return (
    <div className={`${Styles.pageName} bg-white`}>
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
  );
};

export default PageName;
