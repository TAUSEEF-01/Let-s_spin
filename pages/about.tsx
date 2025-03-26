import styles from "../styles/About.module.css";
import Head from "next/head";
import Image from "next/image";
import myImage from "../images/my_image.jpg";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me - Md. Tauseef-Ur-Rahman</title>
      </Head>
      <main className={styles.main}>
        <h1>About Me</h1>
        <div className={styles.profile}>
          <Image
            src={myImage}
            alt="Md. Tauseef-Ur-Rahman"
            className={styles.profileImage}
            width={150}
            height={150} // Explicitly define width and height
          />
          <h2>Md. Tauseef-Ur-Rahman</h2>
          <p className={styles.university}>🎓 University of Dhaka</p>
          <div className={styles.links}>
            <a
              href="https://github.com/TAUSEEF-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/md-tauseef-ur-rahman-9240bb259"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/mdtauseefur.rahman.98"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/tauseef_01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
