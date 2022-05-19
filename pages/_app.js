import "../styles/globals.css";
/** react-slick css (slider) **/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
/** framer-motion **/
import { AnimatePresence } from "framer-motion";
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
      {/* <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      > */}
      <Component {...pageProps} key={router.route} />
      {/* </AnimatePresence> */}
    </>
  );
}
