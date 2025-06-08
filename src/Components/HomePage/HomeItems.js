// npm install framer-motion
import React, { useState, useEffect } from "react";
import "./HomeStyle.css";
import { motion, AnimatePresence } from "framer-motion";
// import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import OfficeImg1 from "../Assets/Home/OfficeImg-1.jpg";
import OfficeImg2 from "../Assets/Home/OfficeImg-2.jpg";
import OfficeImg3 from "../Assets/Home/OfficeImg-3.jpg";
import OfficeImg4 from "../Assets/Home/OfficeImg-4.png";
import OfficeImg5 from "../Assets/Home/OfficeImg-5.jpg";
import OfficeImg6 from "../Assets/Home/OfficeImg-6.jpg";
import OfficeImg7 from "../Assets/Home/OfficeImg-7.jpg";
import OfficeImg8 from "../Assets/Home/OfficeImg-8.jpg";
import OfficeImg9 from "../Assets/Home/OfficeImg-9.jpg";
import OfficeImg10 from "../Assets/Home/OfficeImg-10.jpg";

function HomeItems() {
  const missionImages = [
    OfficeImg1,
    OfficeImg2,
    OfficeImg3,
    OfficeImg4,
    OfficeImg5,
    OfficeImg6,
    OfficeImg7,
    OfficeImg8,
    OfficeImg9,
    OfficeImg10,
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % missionImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* <AnimatedBackground /> */}
      <header className="hero-section-Home">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="homepage-header">
            <h1>BANGLADESH AMERICAN CHEMBER OF COMMERCE</h1>
            <p>Empowering Business Through Unity</p>
          </div>
        </motion.div>
      </header>
      <div className="home-mission">
        <h1>OUR MISSION</h1>
      </div>

      <section className="mission-section">
        <motion.div
          className="mission-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            To empower businesses with reliable, innovative technology. We aim
            to:
          </p>

          <ul>
            <li>Deliver robust and proactive cybersecurity solutions.</li>
            <li>Enable scalable and secure cloud architecture.</li>
            <li>Integrate AI for intelligent business automation.</li>
            <li>
              Design reliable networking solutions for seamless communication.
            </li>
            <li>
              Empower our clients with people-focused IT support and
              partnerships.
            </li>
          </ul>
          <p>
            We don’t just build software, we build trust, transformation, and
            future-ready technology.
          </p>
        </motion.div>

        <motion.div
          key={currentImage}
          className="mission-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <img src={missionImages[currentImage]} alt="Office team" />
        </motion.div>
      </section>
    </div>
  );
}

export default HomeItems;
