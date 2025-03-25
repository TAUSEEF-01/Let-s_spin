import { useEffect, useState } from "react";
import SpinWheel from "../components/SpinWheel";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Record visit
    fetch("/api/visit", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setVisitCount(data.count));
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Spin The Wheel!</h1>
        <SpinWheel />
        <p>Total Visits: {visitCount}</p>
      </main>
    </div>
  );
}
