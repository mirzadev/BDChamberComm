// npm install framer-motion
import React, { useState, useEffect } from "react";
import "./HomeStyle.css";
import { motion, AnimatePresence } from "framer-motion";
import StatsSection from "../PerformanceCount/StatisticSection";
// import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import OfficeImg1 from "../../Assets/Home/OfficeImg-1.jpg";
import OfficeImg2 from "../../Assets/Home/OfficeImg-2.jpg";
import OfficeImg3 from "../../Assets/Home/OfficeImg-3.jpg";
import OfficeImg4 from "../../Assets/Home/OfficeImg-4.png";
import OfficeImg5 from "../../Assets/Home/OfficeImg-5.jpg";
import OfficeImg6 from "../../Assets/Home/OfficeImg-6.jpg";
import OfficeImg7 from "../../Assets/Home/OfficeImg-7.jpg";
import OfficeImg8 from "../../Assets/Home/OfficeImg-8.jpg";
import OfficeImg9 from "../../Assets/Home/OfficeImg-9.jpg";
import OfficeImg10 from "../../Assets/Home/OfficeImg-10.jpg";
import image1 from "../../Assets/Home/economicGrowth.png";
import image2 from "../../Assets/Home/communityBonding.png";
import image3 from "../../Assets/Home/CulturalPride.png";
import presidentImage from "../../Assets/Home/atique_president.jpg";
import presidentSignature from "../../Assets/Home/president_signature.png";

function HomeItems() {
  const homeImages = [
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
      setCurrentImage((prev) => (prev + 1) % homeImages.length);
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

      <section className="home-section">
        <motion.div
          className="home-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Bangladesh American Chamber of Commerce</h2>
          <p>
            The Bangladesh American Chamber of Commerce is a collective of
            businesses, professionals, and individuals committed to advancing
            commercial ties between Bangladesh and the United States. Our
            mission is to foster bilateral trade and enhance intercultural
            understanding, serving as a vital channel for communication and
            information on emerging opportunities for interested stakeholders.
          </p>

          <p>
            We actively support initiatives that strengthen business
            collaboration, investment, and innovation across sectors. Through
            strategic partnerships and networking events, we empower our members
            to succeed in a dynamic global marketplace. The Chamber stands as a
            trusted advocate for growth, progress, and mutual prosperity between
            both nations.
          </p>
        </motion.div>

        <motion.div
          key={currentImage}
          className="home-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <img src={homeImages[currentImage]} alt="Office team" />
        </motion.div>
      </section>
      <section className="president-message-section">
        <div className="message-wrapper">
          <div className="president-image">
            <img src={presidentImage} alt="Atiquer Rahman, President" />
            <div className="president-name">Atiquer Rahman, President</div>
          </div>
          <div className="president-text">
            <h2>A Message from the President</h2>
            <p>
              The Bangladesh American Chamber of Commerce is a for-profit
              corporation and an affiliate of the Association of Bi-National
              Chambers of Commerce. We are dedicated to creating trade
              opportunities and strengthening regional, national, and industrial
              commercial relationships between the United States and Bangladesh.
            </p>
            <p>
              Our mission is to empower members to foster and promote trade
              while enriching the economic and cultural ties that unite
              Bangladesh and the United States.
            </p>
            <div className="signature-block">
              <img src={presidentSignature} alt="Atiquer Rahman, President" />
              <strong>Atiquer Rahman</strong>
              <span className="president-designation">
                President, Bangladesh American Chamber of Commerce
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="culture-section">
        <h2>Our Core Values</h2>
        <p>
          At the Bangladesh American Chamber of Commerce, we are dedicated to
          building strong economic bridges and celebrating cultural unity. We
          champion the growth of our members through shared values, purposeful
          networking, and meaningful collaboration.
        </p>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-img">
              <img
                src={image1}
                alt="Economic Empowerment"
                className="section-img"
                height="100"
                width="100"
              />
            </div>
            <div className="value-text">
              <h3>Economic Growth</h3>
              <p>
                We support businesses and entrepreneurs to thrive by promoting
                trade, investment, and innovation between the U.S. and
                Bangladesh.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-img">
              <img
                src={image2}
                alt="Community Networking"
                className="section-img"
                height="120"
                width="120"
              />
            </div>
            <div className="value-text">
              <h3>Community Bonding</h3>
              <p>
                Our strength lies in our network. We foster trusted connections
                among professionals, leaders, and organizations with shared
                goals.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-img">
              <img
                src={image3}
                alt="Cultural Exchange"
                className="section-img"
                height="100"
                width="100"
              />
            </div>
            <div className="value-text">
              <h3>Cultural Pride</h3>
              <p>
                We honor our heritage and encourage cultural exchange, creating
                mutual respect and deeper understanding between our communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="statistic-header">
        <h2>Our Impact at a Glance</h2>
      </div>
      <StatsSection />
    </div>
  );
}

export default HomeItems;
