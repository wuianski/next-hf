import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <div className={styles.logoFixed}>
        <Image src="/IMGs/logo.png" alt="logo" width={185} height={75} />
      </div>
      <main className={styles.main}>{children}</main>
    </>
  );
}
