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
    <AnimatePresence exitBeforeEnter>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "zh_TW",
          url: "https://hongfoundation.org.tw/",
          site_name: "Hong Foundation",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
