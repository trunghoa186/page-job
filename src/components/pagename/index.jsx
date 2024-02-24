import React from "react";
import style from "@/styles/pageName.module.css";
import Container from "@mui/material/Container";

function PageName(props) {
  return (
    <div className={`${style.pageName} bg-white` }>
    <Container className="h-12 flex items-center gap-6">
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
    </Container>
    </div>
  );
}

export default PageName;
