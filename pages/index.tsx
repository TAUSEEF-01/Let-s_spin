import SpinWheel from "../components/SpinWheel";
import styles from "../styles/Home.module.css";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <script
          type="text/javascript"
          src="https://www.freevisitorcounters.com/auth.php?id=65f1f1b26ab9a0d76a5a32e806187b58ffc13cda"
        ></script>
        <script
          type="text/javascript"
          src="https://www.freevisitorcounters.com/en/home/counter/1319725/t/7"
        ></script>
      </Head>
      <main className={styles.main}>
        <h1>Spin The Wheel!</h1>
        <SpinWheel />
        <div className={styles.counter}>
          <a
            href="https://www.free-counters.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            powered by Free-Counters.org
          </a>
        </div>
      </main>
    </div>
  );
}
