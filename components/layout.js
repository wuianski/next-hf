import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Nav from "./nav";
import Link from "next/link";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

import logo_w from "../public/IMGs/logo_w.png";

export default function Layout({ children }) {
  //console.log(children);
  // const variants = {
  //   hidden: { opacity: 0, scale: 1 },
  //   enter: { opacity: 1, scale: 1 },
  //   exit: { opacity: 0, scale: 1 },
  // };
  return (
    <>
      {/*<Nav />*/}

      {/* <div id="turn">Please rotate your device!</div> */}
      <div id="container">
        {/* <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className={styles.main}
        > */}
        {children}
        {/* </motion.main> */}
      </div>
    </>
  );
}
