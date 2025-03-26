import SpinWheel from "../components/SpinWheel";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === "/") {
        window.location.reload(); // Reload the page when returning to the home page
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Load counter scripts dynamically
    const script1 = document.createElement("script");
    script1.src =
      "https://www.freevisitorcounters.com/auth.php?id=65f1f1b26ab9a0d76a5a32e806187b58ffc13cda";
    script1.type = "text/javascript";

    const script2 = document.createElement("script");
    script2.src =
      "https://www.freevisitorcounters.com/en/home/counter/1319725/t/7";
    script2.type = "text/javascript";

    const counterContainer = document.getElementById("visitor-counter");
    if (counterContainer) {
      counterContainer.appendChild(script1);
      counterContainer.appendChild(script2);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Eid Celebration Spinner – Your Surprise Awaits! 🎉🎡</title>
      </Head>
      <main className={`${styles.main} animate__animated animate__fadeIn`}>
        <h1>Eid Celebration Spinner</h1>
        <h2 className={styles.subtitle}>Your Surprise Awaits! 🎉🎡</h2>
        <SpinWheel />
        <Link href="/about" className={styles.aboutLink}>
          About Me
        </Link>
        <div className={styles.visitorCounter}>
          <div
          
            dangerouslySetInnerHTML={{
              __html: `
                <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/1319725/t/7"></script>
              `,
            }}
          />
        </div>
      </main>
    </div>
  );
}
