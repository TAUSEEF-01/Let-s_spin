import { useRouter } from "next/router";
import { useRef } from "react";
import styles from "../../styles/Result.module.css";
import html2canvas from "html2canvas";

export default function Result() {
  const router = useRouter();
  const { id } = router.query;
  const resultRef = useRef(null);

  const shareResult = async () => {
    const resultElement = resultRef.current;
    if (!resultElement) return;

    const canvas = await html2canvas(resultElement);
    const image = canvas.toDataURL("image/png");

    const blob = await (await fetch(image)).blob();
    const imageFile = new File([blob], "spin-result.png", {
      type: "image/png",
    });

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ files: [imageFile] })
    ) {
      try {
        await navigator.share({
          title: "My Spin Result",
          text: `I got number ${id} on the spin wheel!`,
          files: [imageFile],
        });
      } catch (err) {
        console.error("Error sharing:", err);
        fallbackShare(image);
      }
    } else {
      fallbackShare(image);
    }
  };

  const fallbackShare = (imageUrl: string) => {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(
      `I got number ${id} on the spin wheel!`
    );

    const socialButtons = document.createElement("div");
    socialButtons.innerHTML = `
      <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.3);z-index:1000;">
        <h3>Share via:</h3>
        <div style="display:flex;gap:10px;margin-top:10px;">
          <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank">Facebook</a>
          <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}" target="_blank">Twitter</a>
          <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(socialButtons);
  };

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.container} animate__animated animate__fadeIn`}>
      <div
        ref={resultRef}
        className={`${styles.result} animate__animated animate__zoomIn`}
      >
        <h1>Your Eid Surprise!</h1>
        <div className={styles.gift}>{decodeURIComponent(id as string)}</div>
      </div>
      <div className={styles.buttons}>
        <button onClick={shareResult}>Share Result</button>
        <button onClick={() => router.push("/")}>Spin Again</button>
      </div>
    </div>
  );
}
