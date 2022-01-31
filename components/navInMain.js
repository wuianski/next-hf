import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";

const style = {
  position: "absolute",
  width: "100vw",
  height: "100%",
  bgcolor: "#000",
  color: "#fff",
  paddingLeft: { xs: "20px", md: "60px" },
  paddingRight: { xs: "20px", md: "60px" },
  paddingTop: { xs: "100px", md: "60px" },
  paddingBottom: { xs: "40px", md: "0px" },
  overflowY: "scroll",
};

const subStyle = {
  position: "absolute",
  width: { xs: "100vw", md: "50vw" },
  height: "100%",
  right: 0,
  bgcolor: "#666",
  color: "#fff",
  padding: { xs: "20px", md: "60px" },
  overflowY: "scroll",
};

export default function NavInMain({ contact }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    //...theme.typography.body2,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textAlign: "left",
    color: "#fff",
    background: "none",
    boxShadow: "none",
  }));

  return (
    <div>
      <Box onClick={handleOpen} className={styles.menuOpen}>
        <Image
          src="/IMGs/menuOpen_w.png"
          alt="icon of menu open"
          width={40}
          height={28}
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <Box sx={{ ...style }} className="scrollEle">
            <Box onClick={handleClose} className={styles.menuClose}>
              <Image
                src="/IMGs/menuClose.png"
                alt="icon of menu close"
                width={42}
                height={42}
              />
            </Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 6, md: 1 }}
            >
              {/* menu item */}
              <Item sx={{ width: { xs: "80vw", md: "calc(50% + 60px)" } }}>
                <Box className={styles.menuTitleBlk}>
                  <a href="#mission" onClick={handleClose}>
                    <Box className={styles.menuTitleList}>
                      <Box component="span" className={styles.menuTitle}>
                        使命
                      </Box>
                      <Box component="span" className={styles.menuTitleEn}>
                        Mission
                      </Box>
                    </Box>
                  </a>

                  <Link href="/timeline">
                    <Box className={styles.menuTitleList}>
                      <Box component="span" className={styles.menuTitle}>
                        大事記
                      </Box>
                      <Box component="span" className={styles.menuTitleEn}>
                        Timeline
                      </Box>
                    </Box>
                  </Link>

                  <a href="#projects" onClick={handleClose}>
                    <Box className={styles.menuTitleList}>
                      <Box component="span" className={styles.menuTitle}>
                        計劃
                      </Box>
                      <Box component="span" className={styles.menuTitleEn}>
                        Program
                      </Box>
                    </Box>
                  </a>

                  <a href="#events" onClick={handleClose}>
                    <Box className={styles.menuTitleList}>
                      <Box component="span" className={styles.menuTitle}>
                        活動
                      </Box>
                      <Box component="span" className={styles.menuTitleEn}>
                        Events
                      </Box>
                    </Box>
                  </a>

                  <a href="#news" onClick={handleClose}>
                    <Box className={styles.menuTitleList}>
                      <Box component="span" className={styles.menuTitle}>
                        最新消息
                      </Box>
                      <Box component="span" className={styles.menuTitleEn}>
                        News
                      </Box>
                    </Box>
                  </a>

                  <Link href="/resource">
                    <Box className={styles.menuTitleList}>
                      <Box component="span" className={styles.menuTitle}>
                        公開資訊
                      </Box>
                      <Box component="span" className={styles.menuTitleEn}>
                        Resource
                      </Box>
                    </Box>
                  </Link>

                  <a href="#publication" onClick={handleClose}>
                    <Box className={styles.menuTitleList}>
                      <Box component="span" className={styles.menuTitle}>
                        出版
                      </Box>
                      <Box component="span" className={styles.menuTitleEn}>
                        Publicaiton
                      </Box>
                    </Box>
                  </a>
                </Box>
              </Item>
              {/* contact item */}
              <Item sx={{ width: { xs: "80vw", md: "38vw" } }}>
                <Box>
                  <Box
                    sx={{
                      height: "auto",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Image
                      src="/IMGs/logo_w.png"
                      alt="icon of menu close"
                      width={241}
                      height={97}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: { xs: "unset", md: "absolute" },
                      bottom: { xs: "74px", md: "74px" },
                    }}
                  >
                    <Box pb={2}>
                      <Box
                        sx={{
                          fontFamily: "Helvetica Neue",
                          fontSize: { xs: 16, md: 16, xl: 19 },
                          fontWeight: 500,
                        }}
                      >
                        {contact.address_tw}
                      </Box>
                      <Box
                        sx={{
                          fontFamily: "Helvetica Neue",
                          fontSize: { xs: 16, md: 16, xl: 19 },
                          fontWeight: 500,
                          whiteSpace: "pre-line",
                          lineHeight: "137%",
                        }}
                      >
                        {contact.address_en}
                      </Box>
                    </Box>

                    <Box pb={6}>
                      <Box
                        sx={{
                          fontFamily: "Helvetica Neue",
                          fontSize: { xs: 16, md: 16, xl: 19 },
                          fontWeight: 500,
                        }}
                        component="span"
                      >
                        {contact.phone}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        fontFamily: "Helvetica Neue",
                        fontSize: { xs: 10, md: 10, xl: 13 },
                      }}
                    >
                      2021©財團法人洪建全教育文化基金會 All Rights Reserved.
                    </Box>
                  </Box>
                </Box>
              </Item>
              <Item>
                <Box
                  sx={{
                    position: { xs: "unset", md: "absolute" },
                    bottom: { xs: "74px", md: "74px" },
                    display: { xs: "flex", md: "block" },
                  }}
                >
                  <a href={`mailto:` + contact.email} target="_blank">
                    <Box
                      sx={{ width: 20, height: 20 }}
                      mt={{ xs: 4, md: 10 }}
                      mr={{ xs: 6, md: 0 }}
                    >
                      <Image
                        src="/IMGs/email_icon.png"
                        alt="icon of menu close"
                        layout="responsive"
                        objectFit="contain"
                        objectPosition="center"
                        width={20}
                        height={12}
                      />
                    </Box>
                  </a>
                  <a href={contact.facebook} target="_blank">
                    <Box
                      sx={{ width: 20, height: 20 }}
                      mt={3.5}
                      mr={{ xs: 6, md: 0 }}
                    >
                      <Image
                        src="/IMGs/fb_icon.png"
                        alt="icon of menu close"
                        layout="responsive"
                        objectFit="contain"
                        objectPosition="center"
                        width={20}
                        height={19}
                      />
                    </Box>
                  </a>
                  <a href={contact.youtube} target="_blank">
                    <Box
                      sx={{ width: 20, height: 20 }}
                      mt={4}
                      mr={{ xs: 6, md: 0 }}
                    >
                      <Image
                        src="/IMGs/yt_icon.png"
                        alt="icon of menu close"
                        layout="responsive"
                        objectFit="contain"
                        objectPosition="center"
                        width={20}
                        height={12}
                      />
                    </Box>
                  </a>
                  <a href={contact.instagram} target="_blank">
                    <Box
                      sx={{ width: 20, height: 20 }}
                      mt={3.5}
                      mr={{ xs: 6, md: 0 }}
                    >
                      <Image
                        src="/IMGs/ig_icon.png"
                        alt="icon of menu close"
                        layout="responsive"
                        objectFit="contain"
                        objectPosition="center"
                        width={20}
                        height={18}
                      />
                    </Box>
                  </a>
                </Box>
              </Item>
            </Stack>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}
