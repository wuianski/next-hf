import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Nav from "./nav";
import Link from "next/link";

export default function LayoutIndex({ children }) {
  //console.log(children);
  return (
    <>
      {/*<Head>
        <title>Layouts Example</title>
      </Head>*/}

      {/*<Nav />*/}
      <main className={styles.main}>{children}</main>
    </>
  );
}
