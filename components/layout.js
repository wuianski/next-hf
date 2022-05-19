import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Nav from "./nav";
import Link from "next/link";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  //console.log(children);
  const variants = {
    hidden: { opacity: 0, scale: 1 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 },
  };
  return (
    <>
      {/*<Head>
        <title>Layouts Example</title>
      </Head>*/}

      {/*<Nav />*/}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "130px",
          zIndex: 99,
          backgroundColor: "#fff",
        }}
      >
        <Link href="/">
          <div className={styles.logoFixed} id="logo">
            <Image src="/IMGs/logo_w.png" alt="logo" width={185} height={75} />
          </div>
        </Link>
      </Box>
      <div id="turn">Please rotate your device!</div>
      <div id="container">
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className={styles.main}
        >
          {children}
        </motion.main>
      </div>
    </>
  );
}
