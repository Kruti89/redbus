import React from "react";
import styles from "./HiredBuses.module.css";

import mapImg from "../../assets/map.png";
import ticketImg from "../../assets/ticket.png";
import locationImg from "../../assets/location.png";

import cityImg from "../../assets/city.jpg";
import travelImg from "../../assets/travel.jpg";
import carImg from "../../assets/car.jpg";

const featuredVehicles = [
  {
    src: cityImg,
    alt: "Luxury coach hire",
    caption: "Luxury coach for group travel",
  },
  {
    src: travelImg,
    alt: "Comfortable bus interior",
    caption: "Comfortable seating and premium service",
  },
  {
    src: carImg,
    alt: "Reliable travel service",
    caption: "Reliable driver service for every trip",
  },
];

const HiredBuses = () => {
  return (
    <div className={styles.HiredBuses}>
      <div className={styles.container}>

        {/* HERO */}
        <div className={styles.heroSection}>
          <h1>Bus Hire</h1>
          <p>
            Rent vehicles with a driver from the best operators
          </p>
        </div>

        {/* HEADING */}
        <h2 className={styles.heading}>
          Book in 3 easy steps
        </h2>

        {/* STEPS */}
        <div className={styles.stepsWrapper}>

          {/* STEP 1 */}
          <div className={styles.stepBox}>
            <div className={styles.stepLeft}>
              <img src={locationImg} alt="location" />

              <p>
                Choose the <br />
                <strong>Journey Type</strong>
              </p>
            </div>

            <div className={styles.stepRight}>
              <img src={cityImg} alt="city" />
            </div>
          </div>

          {/* STEP 2 */}
          <div className={styles.stepBox}>
            <div className={styles.stepLeft}>
              <img src={ticketImg} alt="ticket" />

              <p>
                Tell us about your <br />
                <strong>Travel Plans</strong>
              </p>
            </div>

            <div className={styles.stepRight}>
              <img src={travelImg} alt="travel" />
            </div>
          </div>

          {/* STEP 3 */}
          <div className={styles.stepBox}>
            <div className={styles.stepLeft}>
              <img src={mapImg} alt="map" />

              <p>
                Pick the vehicle <br />
                you like and go places
              </p>
            </div>

            <div className={styles.stepRight}>
              <img src={carImg} alt="car" />
            </div>
          </div>

        </div>

        {/* GALLERY */}
        <div className={styles.gallerySection}>
          <h2>Featured Hire Vehicles</h2>

          <div className={styles.galleryGrid}>
            {featuredVehicles.map((vehicle, index) => (
              <div className={styles.photoCard} key={index}>
                <img src={vehicle.src} alt={vehicle.alt} />
                <p>{vehicle.caption}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HiredBuses;