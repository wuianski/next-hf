import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

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

const style = {
  position: "absolute",
  width: "100vw",
  height: "100%",
  bgcolor: "#000",
  color: "#fff",
  padding: "60px",
  overflowY: "scroll",
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box onClick={handleOpen}>Open Child Modal</Box>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Box onClick={handleClose}>Close Child Modal</Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function Nav({ contact }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        <Box sx={{ ...style }}>
          <Box onClick={handleClose} className={styles.menuClose}>
            <Image
              src="/IMGs/menuClose.png"
              alt="icon of menu close"
              width={42}
              height={42}
            />
          </Box>
          <Box>
            <Box className={styles.menuTitleList}>
              <Box component="span" className={styles.menuTitle}>
                活動
              </Box>
              <Box component="span" className={styles.menuTitleEn}>
                Events
              </Box>
            </Box>
            <Box className={styles.menuTitleList}>
              <Box component="span" className={styles.menuTitle}>
                使命
              </Box>
              <Box component="span" className={styles.menuTitleEn}>
                Mission
              </Box>
            </Box>
            <Box className={styles.menuTitleList}>
              <Box component="span" className={styles.menuTitle}>
                大事記
              </Box>
              <Box component="span" className={styles.menuTitleEn}>
                Timeline
              </Box>
            </Box>
            <Box className={styles.menuTitleList}>
              <Box component="span" className={styles.menuTitle}>
                計劃
              </Box>
              <Box component="span" className={styles.menuTitleEn}>
                Program
              </Box>
            </Box>
            <Box className={styles.menuTitleList}>
              <Box component="span" className={styles.menuTitle}>
                組織
              </Box>
              <Box component="span" className={styles.menuTitleEn}>
                Leadership
              </Box>
            </Box>
            <Box className={styles.menuTitleList}>
              <Box component="span" className={styles.menuTitle}>
                最新消息
              </Box>
              <Box component="span" className={styles.menuTitleEn}>
                News
              </Box>
            </Box>
            <Box className={styles.menuTitleList}>
              <Box component="span" className={styles.menuTitle}>
                公開資訊
              </Box>
              <Box component="span" className={styles.menuTitleEn}>
                Resource
              </Box>
            </Box>
            <Box className={styles.menuTitleList}>
              <Box component="span" className={styles.menuTitle}>
                出版
              </Box>
              <Box component="span" className={styles.menuTitleEn}>
                publication
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
