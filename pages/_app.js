import "../styles/globals.css";
import "react-responsive-modal/styles.css";
import "../styles/navModal.css";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
