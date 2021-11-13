import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import { Modal } from "react-responsive-modal";
import Box from "@mui/material/Box";

export default function Nav({ contact }) {
  const [openFirst, setOpenFirst] = React.useState(false);
  const [openSecondProjects, setOpenSecondProjects] = React.useState(false);
  const [openSecondLead, setOpenSecondLead] = React.useState(false);
  const [openSecondFact, setOpenSecondFact] = React.useState(false);
  const [openSecondPub, setOpenSecondPub] = React.useState(false);
  const closeIcon = (
    <div className={styles.menuClose}>
      <Image
        src="/IMGs/menuClose.png"
        alt="icon of menu close"
        width={42}
        height={42}
      />
    </div>
  );
  const closeIcon2 = (
    <div className={styles.menuBack}>
      <Image
        src="/IMGs/menuBack.png"
        alt="icon of menu back"
        width={73}
        height={33}
      />
    </div>
  );

  return (
    <div>
      <div onClick={() => setOpenFirst(true)} className={styles.menuOpen}>
        <Image
          src="/IMGs/menuOpen_w.png"
          alt="icon of menu open"
          width={40}
          height={28}
        />
      </div>
      <Modal
        open={openFirst}
        onClose={() => setOpenFirst(false)}
        center
        closeIcon={closeIcon}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={400}
      >
        <Box sx={{ display: { xs: "block", md: "flex" }, overflowY: "scroll" }}>
          <Box sx={{ width: { xs: "80vw", md: "55vw" } }}>
            <Box
              className={`${styles.menuTitleBlk} ${
                openSecondLead ? styles.highlightD : null
              } ${openSecondProjects ? styles.highlightD : null} ${
                openSecondFact ? styles.highlightD : null
              } ${openSecondPub ? styles.highlightD : null}`}
            >
              <Link href="/main#events">
                <div
                  className={styles.menuTitleList}
                  onClick={() => setOpenFirst(false)}
                >
                  <span className={styles.menuTitle}>活動</span>
                  <span className={styles.menuTitleEn}>Events</span>
                </div>
              </Link>
              <Link href="/main#mission">
                <div
                  className={`${styles.menuTitleList} ${styles.menuTitleList2}`}
                  onClick={() => setOpenFirst(false)}
                >
                  <span className={styles.menuTitle}>使命</span>
                  <span className={styles.menuTitleEn}>Mission</span>
                </div>
              </Link>
              <Link href="/main#chronicle">
                <div
                  className={styles.menuTitleList}
                  onClick={() => setOpenFirst(false)}
                >
                  <span className={styles.menuTitle}>大事記</span>
                  <span className={styles.menuTitleEn}>Timeline</span>
                </div>
              </Link>
              {/*<div
            className={`${styles.menuTitleList} ${
              openSecondProjects ? styles.highlightL : null
            }`}
            onClick={() => setOpenSecondProjects(true)}
          >
            <span className={styles.menuTitle}>業務</span>
            <span className={styles.menuTitleEn}>Program</span>
          </div>*/}
              <Link href="/main#projects">
                <div
                  className={styles.menuTitleList}
                  onClick={() => setOpenFirst(false)}
                >
                  <span className={styles.menuTitle}>計劃</span>
                  <span className={styles.menuTitleEn}>Program</span>
                </div>
              </Link>
              <Link href="/main#leadership">
                <div
                  className={styles.menuTitleList}
                  onClick={() => setOpenFirst(false)}
                >
                  <span className={styles.menuTitle}>組織</span>
                  <span className={styles.menuTitleEn}>Leadership</span>
                </div>
              </Link>
              <Link href="/main#news">
                <div
                  className={styles.menuTitleList}
                  onClick={() => setOpenFirst(false)}
                >
                  <span className={styles.menuTitle}>最新消息</span>
                  <span className={styles.menuTitleEn}>News</span>
                </div>
              </Link>
              <div
                className={`${styles.menuTitleList} ${
                  openSecondFact ? styles.highlightL : null
                }`}
                onClick={() => setOpenSecondFact(true)}
              >
                <span className={styles.menuTitle}>公開資訊</span>
                <span className={styles.menuTitleEn}>Resource</span>
              </div>
              <div
                className={`${styles.menuTitleList} ${
                  openSecondPub ? styles.highlightL : null
                }`}
                onClick={() => setOpenSecondPub(true)}
              >
                <span className={styles.menuTitle}>出版</span>
                <span className={styles.menuTitleEn}>publication</span>
              </div>
            </Box>
          </Box>
          {/* vvv below r contact info block */}
          <Box
            sx={{
              //display: { xs: "inline-block", md: "block" },
              width: { xs: "80vw", md: "35vw" },
            }}
          >
            {/* vvv below r contact info */}
            <Box
              mt={{ xs: 13, md: 0 }}
              mb={{ xs: 6, md: 0 }}
              sx={{ width: { xs: "80vw", md: "30vw" } }}
            >
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
                  position: { xs: "relative", md: "absolute" },
                  bottom: { xs: "unset", md: "74px" },
                }}
              >
                <Box>
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
                  {/* vvv below r social media info (mobile) */}
                </Box>
              </Box>
            </Box>
            {/* vvv below r social media info (desktop) */}
            <Box
              sx={{
                width: { xs: "60vw", md: "5vw" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                sx={{
                  height: { xs: "0", md: "45vh" },
                }}
              ></Box>
              <Box
                sx={{
                  position: { md: "absolute" },
                  display: { md: "block" },
                  bottom: { md: "74px" },
                  right: { md: "42px" },
                }}
              >
                <a href={contact.email} target="_blank">
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
                      height={12}
                    />
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* 2nd modal of program */}
      {/*
      <Modal
        open={openSecondProjects}
        onClose={() => setOpenSecondProjects(false)}
        center
        closeIcon={closeIcon2}
        classNames={{
          overlay: "customOverlay2",
          modal: "customModal2",
          overlayAnimationIn: "customEnterOverlayAnimation2",
          overlayAnimationOut: "customLeaveOverlayAnimation2",
          modalAnimationIn: "customEnterModalAnimation2",
          modalAnimationOut: "customLeaveModalAnimation2",
        }}
        animationDuration={400}
      >
        <Link href="/main#projects" passHref>
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondProjects(false);
            }}
          >
            <span className={styles.menuTitle}>覓計畫</span>
            <span className={styles.menuTitleEn}>Project Seek</span>
          </div>
        </Link>
        <Link href="/main#projects" passHref>
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondProjects(false);
            }}
          >
            <span className={styles.menuTitle}>敏隆講堂</span>
            <span className={styles.menuTitleEn}>Minlong Forum</span>
          </div>
        </Link>
        <Link href="/main#projects" passHref>
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondProjects(false);
            }}
          >
            <span className={styles.menuTitle}>素直友會</span>
            <span className={styles.menuTitleEn}>PHP Sunao Community</span>
          </div>
        </Link>
      </Modal>
      */}
      {/* 2nd modal of resource */}
      <Modal
        open={openSecondFact}
        onClose={() => setOpenSecondFact(false)}
        center
        closeIcon={closeIcon2}
        classNames={{
          overlay: "customOverlay2",
          modal: "customModal2",
          overlayAnimationIn: "customEnterOverlayAnimation2",
          overlayAnimationOut: "customLeaveOverlayAnimation2",
          modalAnimationIn: "customEnterModalAnimation2",
          modalAnimationOut: "customLeaveModalAnimation2",
        }}
        animationDuration={400}
      >
        <Link href="/main#facts">
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondFact(false);
            }}
          >
            <span className={styles.menuTitle}>公開資訊</span>
            <span className={styles.menuTitleEn}>FUN FACTS</span>
          </div>
        </Link>
        <Link href="/reports">
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondFact(false);
            }}
          >
            <span className={styles.menuTitle}>財務報表</span>
            <span className={styles.menuTitleEn}>Financial Statements</span>
          </div>
        </Link>
        <Link href="/reports">
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondFact(false);
            }}
          >
            <span className={styles.menuTitle}>贊助明細</span>
            <span className={styles.menuTitleEn}>Sponsorship sheet</span>
          </div>
        </Link>
        <Link href="/reports">
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondFact(false);
            }}
          >
            <span className={styles.menuTitle}>捐款明細</span>
            <span className={styles.menuTitleEn}>Donation sheet</span>
          </div>
        </Link>
        <Link href="/reports">
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondFact(false);
            }}
          >
            <span className={styles.menuTitle}>工作報告</span>
            <span className={styles.menuTitleEn}>work report</span>
          </div>
        </Link>
      </Modal>
      {/* 2nd modal of publication */}
      <Modal
        open={openSecondPub}
        onClose={() => setOpenSecondPub(false)}
        center
        closeIcon={closeIcon2}
        classNames={{
          overlay: "customOverlay2",
          modal: "customModal2",
          overlayAnimationIn: "customEnterOverlayAnimation2",
          overlayAnimationOut: "customLeaveOverlayAnimation2",
          modalAnimationIn: "customEnterModalAnimation2",
          modalAnimationOut: "customLeaveModalAnimation2",
        }}
        animationDuration={400}
      >
        <Link href="/main#publication">
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondPub(false);
            }}
          >
            <span className={styles.menuTitle}>關於出版</span>
            <span className={styles.menuTitleEn}>ABOUT PUBLICATION</span>
          </div>
        </Link>
        <Link href="/publications">
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondPub(false);
            }}
          >
            <span className={styles.menuTitle}>出版品</span>
            <span className={styles.menuTitleEn}>Publications</span>
          </div>
        </Link>
      </Modal>
    </div>
  );
}
