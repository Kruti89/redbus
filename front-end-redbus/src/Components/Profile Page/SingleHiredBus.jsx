import React from "react";
import styles from "./HiredBuses.module.css";

const HiredBuses = () => {
  return (
    <div className={styles.HiredBuses}>
      <div className={styles.heroSection}>
        <h1>Bus Hire</h1>
        <p>Rent vehicles with a driver from the best operators</p>
      </div>

      <div className={styles.container}>
        <h2 className={styles.heading}>Book in 3 easy steps</h2>

        <div className={styles.stepBox}>
          <div className={styles.stepLeft}>
            <img src="/images/map.png" alt="Journey Type" />
            <p>
              Choose the <br />
              <strong>Journey Type</strong>
            </p>
          </div>

          <div className={styles.stepRight}>
            <img src="/images/map.png" alt="Map" />
          </div>
        </div>

        <div className={styles.stepBox}>
          <div className={styles.stepLeft}>
            <img src="/images/ticket.png" alt="Travel Plans" />
            <p>
              Tell us <br />
              about your <br />
              <strong>Travel Plans.</strong>
            </p>
          </div>

          <div className={styles.stepRight}>
            <img src="/images/ticket.png" alt="Ticket" />
          </div>
        </div>

        <div className={styles.stepBox}>
          <div className={styles.stepLeft}>
            <img src="/images/loction.png" alt="Pick Vehicle" />
            <p>
              <strong>Pick the vehicle</strong> <br />
              you like and <br />
              go places.
            </p>
          </div>

          <div className={styles.stepRight}>
            <img src="/images/loction.png" alt="Location" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiredBuses;