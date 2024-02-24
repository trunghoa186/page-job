import React from "react";
import style from "@/styles/header.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  {
    path: "#",
    label: "求人を探す",
  },
  {
    path: "#",
    label: "求人一覧",
  },
  {
    path: "#",
    label: "よくある質問",
  },
  {
    path: "#",
    label: "お仕事マッチについて",
  },
  {
    path: "#",
    label: "掲載のお問い合わせ",
  },
];

function Header(props) {
  return (
    <div
      className={`${style.header_bg} header fixed top-0 z-50 w-full flex items-center`}
    >
      <div className="container mx-auto lg:mx-32 xl:mx-36 flex items-baseline">
        <AppBar component="nav">
          <Container disableGutters>
            <Toolbar>
              <Box flexGrow={1}>
                <Image
                  src="/images/icons/brand.svg"
                  height={32}
                  width={200}
                  alt="brand-icon"
                />
              </Box>
              <Stack
                display={{ xs: "none", md: "flex" }}
                direction="row"
                gap={4}
              >
                {navItems.map((item, index) => (
                  <Button key={index} sx={{ color: "#fff" }}>
                    {item.label}
                  </Button>
                ))}
              </Stack>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
}

export default Header;
