import "../styles/globals.css";
/** react-responsive-modal css (menu) **/
import "react-responsive-modal/styles.css";
/** navModal has to import after react-responsive-modal **/
import "../styles/navModal.css";
/** react-slick css (slider) **/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
/** framer-motion **/
import { AnimatePresence } from "framer-motion";
/** react-awesome-slider css (full oage slider) **/
import "react-awesome-slider/dist/styles.css";

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
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
