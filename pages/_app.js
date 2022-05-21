import "../styles/globals.css";
/** react-slick css (slider) **/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
/** framer-motion **/
import { AnimatePresence, motion } from "framer-motion";
/** react-awesome-slider css (full oage slider) **/
import "react-awesome-slider/dist/styles.css";
/** next-seo **/
import { DefaultSeo } from "next-seo";

import "overlayscrollbars/css/OverlayScrollbars.css";
import "../styles/os-theme-block-dark.css";
import "../styles/os-theme-block-dark-timeline.css";
import Box from "@mui/material/Box";
import Link from "next/link";
import styles from "../components/layout.module.css";
import Image from "next/image";
import logo_w from "../public/IMGs/logo_w.png";

export default function MyApp({ Component, pageProps, router }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return getLayout(
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "zh_TW",
          url: "https://hongfoundation.org.tw/",
          site_name: "Hong Foundation 洪建全基金會",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      {/* main logo */}
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
            <Image
              src={logo_w}
              placeholder="blur"
              alt="logo"
              width={185}
              height={75}
            />
          </div>
        </Link>
      </Box>
      {/* important to add key for make it work */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="content"
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
