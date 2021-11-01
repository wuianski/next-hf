import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import { Modal } from "react-responsive-modal";

export default function NavInMain() {
  //console.log(fullpageApi);
  //const sec2slide1 = fullpageApi.moveTo(2, 1);

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
      <div onClick={() => setOpenFirst(true)} className={styles.menuOpenInMain}>
        <Image
          src="/IMGs/menuOpen.png"
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
        <div
          className={`${styles.menuTitleBlk} ${
            openSecondLead ? styles.highlightD : null
          } ${openSecondProjects ? styles.highlightD : null} ${
            openSecondFact ? styles.highlightD : null
          } ${openSecondPub ? styles.highlightD : null}`}
        >
          <a href="#events">
            <div
              className={styles.menuTitleList}
              onClick={() => setOpenFirst(false)}
            >
              <span className={styles.menuTitle}>活動</span>
              <span className={styles.menuTitleEn}>Events</span>
            </div>
          </a>
          <a href="#mission">
            <div
              className={`${styles.menuTitleList} ${styles.menuTitleList2}`}
              onClick={() => setOpenFirst(false)}
            >
              <span className={styles.menuTitle}>使命</span>
              <span className={styles.menuTitleEn}>Mission</span>
            </div>
          </a>
          <a href="#chronicle">
            <div
              className={styles.menuTitleList}
              onClick={() => setOpenFirst(false)}
            >
              <span className={styles.menuTitle}>大事記</span>
              <span className={styles.menuTitleEn}>Timeline</span>
            </div>
          </a>
          {/*<div
            className={`${styles.menuTitleList} ${
              openSecondProjects ? styles.highlightL : null
            }`}
            onClick={() => setOpenSecondProjects(true)}
          >
            <span className={styles.menuTitle}>業務</span>
            <span className={styles.menuTitleEn}>Program</span>
          </div>*/}
          <a href="#projects">
            <div
              className={styles.menuTitleList}
              onClick={() => setOpenFirst(false)}
            >
              <span className={styles.menuTitle}>業務</span>
              <span className={styles.menuTitleEn}>Program</span>
            </div>
          </a>
          <a href="#leadership" passHref>
            <div
              className={styles.menuTitleList}
              onClick={() => setOpenFirst(false)}
            >
              <span className={styles.menuTitle}>組織</span>
              <span className={styles.menuTitleEn}>Leadership</span>
            </div>
          </a>
          <a href="#news">
            <div
              className={styles.menuTitleList}
              onClick={() => setOpenFirst(false)}
            >
              <span className={styles.menuTitle}>最新消息</span>
              <span className={styles.menuTitleEn}>News</span>
            </div>
          </a>
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
        </div>
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
        <a href="/main#projects">
          <div
            className={styles.menuTitleList}
            onClick={() => {
              setOpenFirst(false);
              setOpenSecondProjects(false);
              //fullpageApi.moveTo(2, 1);
            }}
          >
            <span className={styles.menuTitle}>覓計畫</span>
            <span className={styles.menuTitleEn}>Project Seek</span>
          </div>
        </a>
        <a href="#projects">
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
        </a>
        <a href="#projects">
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
        </a>
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
        <a href="#facts">
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
        </a>
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
        <a href="#publication">
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
        </a>
        <Link href="/publication">
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
