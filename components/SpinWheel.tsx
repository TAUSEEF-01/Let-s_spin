// // import { useState, useRef, useEffect } from "react";
// // import styles from "../styles/SpinWheel.module.css";
// // import html2canvas from "html2canvas";

// // const SpinWheel = () => {
// //   const [spinning, setSpinning] = useState(false);
// //   const [selectedOption, setSelectedOption] = useState(null);
// //   const [showModal, setShowModal] = useState(false);
// //   const wheelRef = useRef(null);
// //   const options = [
// //     "Buy you a dress 👗",
// //     "Buy you a pair of shoes 👞👠",
// //     "Give you Eidi (money gift) 💰",
// //     "Make you a delicious dessert 🍮🍰",
// //     "Take you out for an Eid dinner 🍽️",
// //     "Gift you a fragrance/perfume 🌸🧴",
// //     "Host an Eid party for you 🎉",
// //     "Get you a box of sweets 🍬🧁",
// //     "Cook your favorite Eid dish 🍛",
// //     "Plan a fun Eid day out 🎡🚗",
// //   ];

// //   // Add initial random rotation on mount
// //   useEffect(() => {
// //     const initialRotation = Math.floor(Math.random() * 360);
// //     wheelRef.current.style.transform = `rotate(${initialRotation}deg)`;
// //   }, []);

// //   const spin = () => {
// //     if (spinning) return;
// //     setSpinning(true);

// //     const currentRotation = getRotationDegrees(wheelRef.current);
// //     const spinDuration = 4 + Math.random() * 4; // 4-8 seconds total
// //     const fastSpinDuration = 1; // Initial fast spin duration
// //     const totalSpins = 8; // Total number of rotations
// //     const finalDegrees = 360 * totalSpins + Math.floor(Math.random() * 360);

// //     // Fast initial spin
// //     wheelRef.current.style.transition = `transform ${fastSpinDuration}s cubic-bezier(0.2, 0, 0.8, 1)`;
// //     wheelRef.current.style.transform = `rotate(${currentRotation + 720}deg)`; // 2 quick rotations

// //     // Gradual slowdown
// //     setTimeout(() => {
// //       wheelRef.current.style.transition = `transform ${
// //         spinDuration - fastSpinDuration
// //       }s cubic-bezier(0.1, 0, 0.2, 1)`;
// //       wheelRef.current.style.transform = `rotate(${
// //         currentRotation + finalDegrees
// //       }deg)`;
// //     }, fastSpinDuration * 1000);

// //     setTimeout(() => {
// //       setSpinning(false);
// //       const normalizedDegrees = (currentRotation + finalDegrees) % 360;
// //       const segmentAngle = 360 / options.length;
// //       const selectedIndex = Math.floor(
// //         (options.length - normalizedDegrees / segmentAngle) % options.length
// //       );
// //       setSelectedOption(options[selectedIndex]);
// //       setShowModal(true);
// //     }, spinDuration * 1000);
// //   };

// //   // Helper function to get current rotation
// //   const getRotationDegrees = (element) => {
// //     const style = window.getComputedStyle(element);
// //     const matrix = new WebKitCSSMatrix(style.transform);
// //     return Math.round(Math.atan2(matrix.b, matrix.a) * (180 / Math.PI));
// //   };

// //   //   const shareScreenshot = async () => {
// //   //     const canvas = await html2canvas(wheelRef.current);
// //   //     const image = canvas.toDataURL("image/png");

// //   //     // Create a blob from the image data
// //   //     const blob = await (await fetch(image)).blob();
// //   //     const imageFile = new File([blob], "spin-result.png", {
// //   //       type: "image/png",
// //   //     });

// //   //     if (
// //   //       navigator.share &&
// //   //       navigator.canShare &&
// //   //       navigator.canShare({ files: [imageFile] })
// //   //     ) {
// //   //       try {
// //   //         await navigator.share({
// //   //           title: "My Spin Result",
// //   //           text: "Check out my spin result!",
// //   //           files: [imageFile],
// //   //         });
// //   //       } catch (err) {
// //   //         console.error("Error sharing:", err);
// //   //         fallbackShare(image);
// //   //       }
// //   //     } else {
// //   //       fallbackShare(image);
// //   //     }
// //   //   };

// //   //   const fallbackShare = (imageUrl: string) => {
// //   //     const shareUrl = encodeURIComponent(window.location.href);
// //   //     const shareText = encodeURIComponent("Check out my spin result!");

// //   //     const socialButtons = document.createElement("div");
// //   //     socialButtons.innerHTML = `
// //   //       <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.3);z-index:1000;">
// //   //         <h3>Share via:</h3>
// //   //         <div style="display:flex;gap:10px;margin-top:10px;">
// //   //           <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank">Facebook</a>
// //   //           <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}" target="_blank">Twitter</a>
// //   //           <button onclick="this.parentElement.parentElement.remove()">Close</button>
// //   //         </div>
// //   //       </div>
// //   //     `;
// //   //     document.body.appendChild(socialButtons);
// //   //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //   };

// //   return (
// //     <div className={styles.wheelContainer}>
// //       <div className={styles.stand}></div>
// //       <div ref={wheelRef} className={styles.wheel}>
// //         {options.map((option, index) => (
// //           <div
// //             key={option}
// //             className={styles.segment}
// //             style={{
// //               transform: `rotate(${index * (360 / options.length)}deg)`,
// //             }}
// //           >
// //             <span
// //               style={{
// //                 transform: `translate(-50%, 0) rotate(${
// //                   index * (360 / options.length) * -1 - 90
// //                 }deg)`,
// //               }}
// //             >
// //               {option}
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //       <button onClick={spin} disabled={spinning}>
// //         {spinning ? "Spinning..." : "SPIN!"}
// //       </button>
// //       {/* <button onClick={shareScreenshot}>Share Result</button> */}

// //       {showModal && (
// //         <div className={styles.modal}>
// //           <div className={styles.modalContent}>
// //             <h2>Congratulations!</h2>
// //             <p>{selectedOption}</p>
// //             <button onClick={closeModal}>Close</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SpinWheel;








// import { useState, useRef, useEffect } from "react";
// import styles from "../styles/SpinWheel.module.css";

// const SpinWheel = () => {
//   const [spinning, setSpinning] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const wheelRef = useRef(null);
//   const options = [
//     "Buy you a dress 👗",
//     "Buy you a pair of shoes 👞👠",
//     "Give you Eidi (money gift) 💰",
//     "Make you a delicious dessert 🍮🍰",
//     "Take you out for an Eid dinner 🍽️",
//     "Gift you a fragrance/perfume 🌸🧴",
//     "Host an Eid party for you 🎉",
//     "Get you a box of sweets 🍬🧁",
//     "Cook your favorite Eid dish 🍛",
//     "Plan a fun Eid day out 🎡🚗",
//   ];

//   // Add initial random rotation on mount
//   useEffect(() => {
//     const initialRotation = Math.floor(Math.random() * 360);
//     wheelRef.current.style.transform = `rotate(${initialRotation}deg)`;
//   }, []);

//   const spin = () => {
//     if (spinning) return;
//     setSpinning(true);

//     const currentRotation = getRotationDegrees(wheelRef.current);
//     const spinDuration = 4 + Math.random() * 4; // 4-8 seconds total
//     const fastSpinDuration = 1; // Initial fast spin duration
//     const totalSpins = 8; // Total number of rotations
//     const finalDegrees = 360 * totalSpins + Math.floor(Math.random() * 360);

//     // Fast initial spin
//     wheelRef.current.style.transition = `transform ${fastSpinDuration}s cubic-bezier(0.2, 0, 0.8, 1)`;
//     wheelRef.current.style.transform = `rotate(${currentRotation + 720}deg)`; // 2 quick rotations

//     // Gradual slowdown
//     setTimeout(() => {
//       wheelRef.current.style.transition = `transform ${
//         spinDuration - fastSpinDuration
//       }s cubic-bezier(0.1, 0, 0.2, 1)`;
//       wheelRef.current.style.transform = `rotate(${
//         currentRotation + finalDegrees
//       }deg)`;
//     }, fastSpinDuration * 1000);

//     setTimeout(() => {
//       setSpinning(false);
//       const normalizedDegrees = (currentRotation + finalDegrees) % 360;
//       const segmentAngle = 360 / options.length;
//       const selectedIndex = Math.floor(
//         (options.length - normalizedDegrees / segmentAngle) % options.length
//       );
//       setSelectedOption(options[selectedIndex]);
//       setShowModal(true);
//     }, spinDuration * 1000);
//   };

//   // Helper function to get current rotation
//   const getRotationDegrees = (element) => {
//     const style = window.getComputedStyle(element);
//     const matrix = new WebKitCSSMatrix(style.transform);
//     return Math.round(Math.atan2(matrix.b, matrix.a) * (180 / Math.PI));
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className={styles.wheelContainer}>
//       <div className={styles.stand}></div>
//       <div ref={wheelRef} className={styles.wheel}>
//         {options.map((option, index) => (
//           <div
//             key={option}
//             className={styles.segment}
//             style={{
//               transform: `rotate(${index * (360 / options.length)}deg)`,
//             }}
//           >
//             <span
//               style={{
//                 transform: `translate(-33%, 10) rotate(${
//                   -(index * (360 / options.length)) - 90
//                 }deg)`,
//               }}
//             >
//             {index + 1}
//               {/* {option} */}
//             </span>
//           </div>
//         ))}
//       </div>
//       <button onClick={spin} disabled={spinning}>
//         {spinning ? "Spinning..." : "SPIN!"}
//       </button>

//       {showModal && (
//         <div className={styles.modal}>
//           <div className={styles.modalContent}>
//             <h2>Congratulations!</h2>
//             <p>{selectedOption}</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SpinWheel;






import { useState, useRef, useEffect } from "react";
import styles from "../styles/SpinWheel.module.css";

const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const wheelRef = useRef(null);
  const options = [
    "Buy you a dress 👗",
    "Buy you a pair of shoes 👞👠",
    "Give you Eidi (money gift) 💰",
    "Make you a delicious dessert 🍮🍰",
    "Take you out for an Eid dinner 🍽️",
    "Gift you a fragrance/perfume 🌸🧴",
    "Host an Eid party for you 🎉",
    "Get you a box of sweets 🍬🧁",
    "Cook your favorite Eid dish 🍛",
    "Plan a fun Eid day out 🎡🚗",
  ];

  // Add initial random rotation on mount
  useEffect(() => {
    const initialRotation = Math.floor(Math.random() * 360);
    wheelRef.current.style.transform = `rotate(${initialRotation}deg)`;
  }, []);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);

    const currentRotation = getRotationDegrees(wheelRef.current);
    const spinDuration = 4 + Math.random() * 4; // 4-8 seconds total
    const fastSpinDuration = 1; // Initial fast spin duration
    const totalSpins = 8; // Total number of rotations
    const finalDegrees = 360 * totalSpins + Math.floor(Math.random() * 360);

    // Fast initial spin
    wheelRef.current.style.transition = `transform ${fastSpinDuration}s cubic-bezier(0.2, 0, 0.8, 1)`;
    wheelRef.current.style.transform = `rotate(${currentRotation + 720}deg)`; // 2 quick rotations

    // Gradual slowdown
    setTimeout(() => {
      wheelRef.current.style.transition = `transform ${
        spinDuration - fastSpinDuration
      }s cubic-bezier(0.1, 0, 0.2, 1)`;
      wheelRef.current.style.transform = `rotate(${
        currentRotation + finalDegrees
      }deg)`;
    }, fastSpinDuration * 1000);

    setTimeout(() => {
      setSpinning(false);
      const normalizedDegrees = (currentRotation + finalDegrees) % 360;
      const segmentAngle = 360 / options.length;
      const selectedIndex = Math.floor(
        (options.length - normalizedDegrees / segmentAngle) % options.length
      );
      setSelectedOption(options[selectedIndex]);
      setShowModal(true);
    }, spinDuration * 1000);
  };

  // Helper function to get current rotation
  const getRotationDegrees = (element) => {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return Math.round(Math.atan2(matrix.b, matrix.a) * (180 / Math.PI));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.wheelContainer}>
      <div className={styles.stand}></div>
      <div ref={wheelRef} className={styles.wheel}>
      {options.map((option, index) => (
  <div
    key={option}
    className={styles.segment}
    style={{
      transform: `rotate(${index * (360 / options.length)}deg)`,
    }}
  >
    <span
      style={{
        transform: `rotate(${-(360 / options.length) - 90}deg)`,
      }}
    >
      {index + 1}
    </span>
  </div>
))}
        {/* {options.map((option, index) => (
          <div
            key={option}
            className={styles.segment}
            style={{
              transform: `rotate(${index * (360 / options.length)}deg)`,
            }}
          >
            <span
              style={{
                transform: `rotate(${
                  -((360 / options.length)) - 130
                }deg)`,
              }}
            >
              {index + 1}
            </span>
          </div>
        ))} */}
      </div>
      <button onClick={spin} disabled={spinning}>
        {spinning ? "Spinning..." : "SPIN!"}
      </button>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Congratulations!</h2>
            <p>{selectedOption}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;