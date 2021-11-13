import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "react-responsive-modal";
import styles from "./nav.module.css";
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

  const myRef = React.useRef(null);

  return (
    <div>
      <div ref={myRef} />
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
          overlay: `${styles.customOverlay}`,
          modal: `${styles.customModal}`,
          overlayAnimationIn: `${styles.customEnterOverlayAnimation}`,
          overlayAnimationOut: `${styles.customLeaveOverlayAnimation}`,
          modalAnimationIn: `${styles.customEnterModalAnimation}`,
          modalAnimationOut: `${styles.customLeaveModalAnimation}`,
        }}
        animationDuration={400}
        container={myRef.current}
      >
        <Box
          sx={{
            display: { xs: "block", md: "block" },
            width: { xs: "80vw", md: "55vw" },
            height: "100vh",
          }}
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
      </Modal>

      {/* 2nd modal of resource */}
      <Modal
        open={openSecondFact}
        onClose={() => setOpenSecondFact(false)}
        center
        closeIcon={closeIcon2}
        classNames={{
          overlay: `${styles.customOverlay2}`,
          modal: `${styles.customModal2}`,
          overlayAnimationIn: `${styles.customEnterOverlayAnimation2}`,
          overlayAnimationOut: `${styles.customLeaveOverlayAnimation2}`,
          modalAnimationIn: `${styles.customEnterModalAnimation2}`,
          modalAnimationOut: `${styles.customLeaveModalAnimation2}`,
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
          overlay: `${styles.customOverlay2}`,
          modal: `${styles.customModal2}`,
          overlayAnimationIn: `${styles.customEnterOverlayAnimation2}`,
          overlayAnimationOut: `${styles.customLeaveOverlayAnimation2}`,
          modalAnimationIn: `${styles.customEnterModalAnimation2}`,
          modalAnimationOut: `${styles.customLeaveModalAnimation2}`,
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
