import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function Footer(props) {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={4} p={4}>
      <Stack
        direction={{ md: "row" }}
        gap={{ xs: 2, md: 5 }}
        alignItems="center"
      >
        <Typography>利用規約</Typography>
        <Typography>個人情報保護方針</Typography>
        <Typography>プライバシーポリシー</Typography>
        <Typography>運営会社</Typography>
      </Stack>
      <Typography>© お仕事マッチ</Typography>
    </Stack>
  );
}

export default Footer;
