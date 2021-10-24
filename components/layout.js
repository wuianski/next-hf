import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Nav from "./nav";
import Link from "next/link";

export default function Layout({ children }) {
  //console.log(children);
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Link href="/">
        <div className={styles.logoFixed}>
          <Image src="/IMGs/logo_w.png" alt="logo" width={185} height={75} />
        </div>
      </Link>
      {/*<Nav />*/}
      <main className={styles.main}>{children}</main>
    </>
  );
}
