import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import { Modal } from "react-responsive-modal";


export default function Nav() {
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
          <div className={styles.menuTitleList}>
            <span className={styles.menuTitle}>特別活動</span>
            <span className={styles.menuTitleEn}>Special Events</span>
          </div>
          <div className={`${styles.menuTitleList} ${styles.menuTitleList2}`}>
            <span className={styles.menuTitle}>使命</span>
            <span className={styles.menuTitleEn}>Missions</span>
          </div>
          <div
            className={`${styles.menuTitleList} ${
              openSecondProjects ? styles.highlightL : null
            }`}
            onClick={() => setOpenSecondProjects(true)}
          >
            <span className={styles.menuTitle}>業務</span>
            <span className={styles.menuTitleEn}>Projects</span>
          </div>
          <div className={styles.menuTitleList}>
            <span className={styles.menuTitle}>大事記</span>
            <span className={styles.menuTitleEn}>Chronicle</span>
          </div>
          <div
            className={`${styles.menuTitleList} ${
              openSecondLead ? styles.highlightL : null
            }`}
            onClick={() => setOpenSecondLead(true)}
          >
            <span className={styles.menuTitle}>組織</span>
            <span className={styles.menuTitleEn}>Leadership</span>
          </div>
          <div className={styles.menuTitleList}>
            <span className={styles.menuTitle}>最新消息</span>
            <span className={styles.menuTitleEn}>News</span>
          </div>
          <div
            className={`${styles.menuTitleList} ${
              openSecondFact ? styles.highlightL : null
            }`}
            onClick={() => setOpenSecondFact(true)}
          >
            <span className={styles.menuTitle}>公開資訊</span>
            <span className={styles.menuTitleEn}>Facts</span>
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
        <div>
          <span className={styles.menuTitle}>覓計畫</span>
          <span className={styles.menuTitleEn}>Project Seek</span>
        </div>
        <div>
          <span className={styles.menuTitle}>敏隆講堂</span>
          <span className={styles.menuTitleEn}>Minlong Forum</span>
        </div>
        <div>
          <span className={styles.menuTitle}>素直友會</span>
          <span className={styles.menuTitleEn}>PHP Sunao Community</span>
        </div>
      </Modal>
      <Modal
        open={openSecondLead}
        onClose={() => setOpenSecondLead(false)}
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
        <div>
          <span className={styles.menuTitle}>創辦人</span>
          <span className={styles.menuTitleEn}>Founder</span>
        </div>
        <div>
          <span className={styles.menuTitle}>董事長</span>
          <span className={styles.menuTitleEn}>Chairman</span>
        </div>
        <div>
          <span className={styles.menuTitle}>副董事長</span>
          <span className={styles.menuTitleEn}>Vice Chairman</span>
        </div>
        <div>
          <span className={styles.menuTitle}>董事會</span>
          <span className={styles.menuTitleEn}>Board Members</span>
        </div>
        <div>
          <span className={styles.menuTitle}>組織章程</span>
          <span className={styles.menuTitleEn}>Articles of Organization</span>
        </div>
      </Modal>
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
        <div>
          <span className={styles.menuTitle}>公開資訊</span>
          <span className={styles.menuTitleEn}>FUN FACTS</span>
        </div>
        <div>
          <span className={styles.menuTitle}>贊助</span>
          <span className={styles.menuTitleEn}>Sponsorship</span>
        </div>
        <div>
          <span className={styles.menuTitle}>工作報告</span>
          <span className={styles.menuTitleEn}>Sponsorship</span>
        </div>
        <div>
          <span className={styles.menuTitle}>捐款明細</span>
          <span className={styles.menuTitleEn}>Donation</span>
        </div>
        <div>
          <span className={styles.menuTitle}>財務報表</span>
          <span className={styles.menuTitleEn}>Financial Statements</span>
        </div>
      </Modal>
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
        <div>
          <span className={styles.menuTitle}>關於出版</span>
          <span className={styles.menuTitleEn}>ABOUT PUBLIC</span>
        </div>
        <div>
          <span className={styles.menuTitle}>出版品</span>
          <span className={styles.menuTitleEn}>Past Publication</span>
        </div>
      </Modal>
    </div>
  );
}
