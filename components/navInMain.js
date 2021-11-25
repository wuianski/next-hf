import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

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
  //console.log(fullpageApi);
  //const sec2slide1 = fullpageApi.moveTo(2, 1);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function ChildModal() {
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
      setOpen2(true);
    };
    const handleClose2 = () => {
      setOpen2(false);
    };

    return (
      <React.Fragment>
        <Box
          onClick={handleOpen2}
          className={styles.menuTitleList}
          //sx={{ color: "#fff" }}
        >
          <Box component="span" className={styles.menuTitle}>
            公開資訊
          </Box>
          <Box component="span" className={styles.menuTitleEn}>
            Resource
          </Box>
        </Box>
        <Modal
          hideBackdrop
          open={open2}
          onClose={handleClose2}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...subStyle }}>
            <a
              href="#facts"
              onClick={() => {
                setOpen(false);
                setOpen2(false);
              }}
            >
              <div className={styles.menuTitleList}>
                <span className={styles.menuTitle}>公開資訊</span>
                <span className={styles.menuTitleEn}>FUN FACTS</span>
              </div>
            </a>
            <Link href="/reports">
              <div className={styles.menuTitleList}>
                <span className={styles.menuTitle}>財務報表</span>
                <span className={styles.menuTitleEn}>Financial Statements</span>
              </div>
            </Link>
            <Link href="/reports">
              <div className={styles.menuTitleList}>
                <span className={styles.menuTitle}>贊助明細</span>
                <span className={styles.menuTitleEn}>Sponsorship sheet</span>
              </div>
            </Link>
            <Link href="/reports">
              <div className={styles.menuTitleList}>
                <span className={styles.menuTitle}>捐款明細</span>
                <span className={styles.menuTitleEn}>Donation sheet</span>
              </div>
            </Link>
            <Link href="/reports">
              <div className={styles.menuTitleList}>
                <span className={styles.menuTitle}>工作報告</span>
                <span className={styles.menuTitleEn}>work report</span>
              </div>
            </Link>
            <Box onClick={handleClose2} className={styles.menuBack}>
              <Image
                src="/IMGs/menuBack.png"
                alt="icon of menu back"
                width={73}
                height={33}
              />
            </Box>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }

  function ChildModal2() {
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
      setOpen2(true);
    };
    const handleClose2 = () => {
      setOpen2(false);
    };

    return (
      <React.Fragment>
        <Box
          onClick={handleOpen2}
          className={styles.menuTitleList}
          //sx={{ color: "#fff" }}
        >
          <Box component="span" className={styles.menuTitle}>
            出版
          </Box>
          <Box component="span" className={styles.menuTitleEn}>
            Publicaiton
          </Box>
        </Box>
        <Modal
          hideBackdrop
          open={open2}
          onClose={handleClose2}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...subStyle }}>
            <a
              href="#publication"
              //onClick={handleClose2}
              onClick={() => {
                setOpen(false);
                setOpen2(false);
              }}
            >
              <div className={styles.menuTitleList}>
                <span className={styles.menuTitle}>關於出版</span>
                <span className={styles.menuTitleEn}>ABOUT PUBLICATION</span>
              </div>
            </a>
            <Link href="/publications_new" passHref>
              <div
                className={styles.menuTitleList}
                onClick={() => {
                  setOpen(false);
                  setOpen2(false);
                }}
              >
                <span className={styles.menuTitle}>新發表</span>
                <span className={styles.menuTitleEn}>New Release</span>
              </div>
            </Link>
            <Link href="/publications" passHref>
              <div
                className={styles.menuTitleList}
                onClick={() => {
                  setOpen(false);
                  setOpen2(false);
                }}
              >
                <span className={styles.menuTitle}>出版</span>
                <span className={styles.menuTitleEn}>Publication</span>
              </div>
            </Link>
            <Box onClick={handleClose2} className={styles.menuBack}>
              <Image
                src="/IMGs/menuBack.png"
                alt="icon of menu back"
                width={73}
                height={33}
              />
            </Box>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
  /** stack Item setting **/
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
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
            <Item sx={{ width: { xs: "80vw", md: "calc(50% + 60px)" } }}>
              <Box className={styles.menuTitleBlk}>
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
                <a href="#chronicle" onClick={handleClose}>
                  <Box className={styles.menuTitleList}>
                    <Box component="span" className={styles.menuTitle}>
                      大事記
                    </Box>
                    <Box component="span" className={styles.menuTitleEn}>
                      Timeline
                    </Box>
                  </Box>
                </a>
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
                <a href="#leadership" onClick={handleClose}>
                  <Box className={styles.menuTitleList}>
                    <Box component="span" className={styles.menuTitle}>
                      組織
                    </Box>
                    <Box component="span" className={styles.menuTitleEn}>
                      Leadership
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
                <ChildModal />
                <ChildModal2 />
              </Box>
            </Item>
            <Item sx={{ width: { xs: "80vw", md: "38vw" } }}>
              <Box>
                <Box
                  sx={{ height: "auto", display: { xs: "none", md: "block" } }}
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
                  <Box pb={3}>
                    <Box pb={1} sx={{ fontSize: { xs: 13, md: 13, xl: 16 } }}>
                      地址 Address
                    </Box>
                    <Box sx={{ fontSize: { xs: 16, md: 16, xl: 19 } }}>
                      {contact.address_tw}
                    </Box>
                    <Box
                      sx={{
                        fontSize: { xs: 16, md: 16, xl: 19 },
                        whiteSpace: "pre-line",
                      }}
                    >
                      {contact.address_en}
                    </Box>
                  </Box>
                  <Box pb={3}>
                    <Box pb={1} sx={{ fontSize: { xs: 13, md: 13, xl: 16 } }}>
                      上班時間 Opening Hours
                    </Box>
                    <Box
                      sx={{
                        fontSize: { xs: 16, md: 16, xl: 19 },
                        whiteSpace: "pre-line",
                      }}
                    >
                      {contact.opening_time}
                    </Box>
                  </Box>
                  <Box pb={3}>
                    <Box
                      pb={1}
                      sx={{ fontSize: { xs: 13, md: 13, xl: 16 } }}
                      component="span"
                    >
                      電話 TEL
                    </Box>
                    <Box
                      pl={2}
                      sx={{ fontSize: { xs: 16, md: 16, xl: 19 } }}
                      component="span"
                    >
                      {contact.phone}
                    </Box>
                  </Box>
                  <Box pb={3}>
                    <Box
                      pb={1}
                      sx={{ fontSize: { xs: 13, md: 13, xl: 16 } }}
                      component="span"
                    >
                      傳真 FAX
                    </Box>
                    <Box
                      pl={2}
                      sx={{ fontSize: { xs: 16, md: 16, xl: 19 } }}
                      component="span"
                    >
                      {contact.fax}
                    </Box>
                  </Box>
                  <Box sx={{ fontSize: { xs: 10, md: 10, xl: 13 } }}>
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
                    mt={{ xs: 6, md: 20 }}
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
                    mt={6}
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
                    mt={6}
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
                    mt={6}
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
      </Modal>
    </div>
  );
}
