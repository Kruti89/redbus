import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./ManageBooking.module.css";

const actionMap = {
  "bus-ticket": {
    title: "Your Bus Ticket",
    description:
      "This is your latest bus ticket. Review the details below or go to My Trips to see all bookings.",
    button: "Open My Trips",
  },
  cancel: {
    title: "Cancel Booking",
    description:
      "Cancel your booking from My Trips or contact support if you need help.",
    button: "Go to My Trips",
  },
  reschedule: {
    title: "Reschedule Booking",
    description:
      "Change your travel date or time by rescheduling your booking from My Trips.",
    button: "Go to My Trips",
  },
  "show-ticket": {
    title: "Show My Ticket",
    description:
      "Your ticket is ready. Use this screen to view and share your boarding pass.",
    button: "Open Ticket",
  },
  "email-sms": {
    title: "Email / SMS Ticket",
    description:
      "Send your ticket to your email or phone via SMS for quick access.",
    button: "Send Ticket",
  },
};

const ManageBooking = () => {
  const { action } = useParams();
  const history = useHistory();
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  const details = action ? actionMap[action] : null;

  return (
    <div className={styles.page}>
      <div className={styles.heroCard}>
        <div className={styles.heroInfo}>
          <span className={styles.smallTitle}>Manage Booking</span>
          <h1>Control your trip with confidence</h1>
          <p>
            Pick any booking action below to open a friendly booking workflow with
            useful trip details and instant support.
          </p>
          {!action && (
            <button
              className={styles.primaryButton}
              onClick={() => history.push("/manage-booking/bus-ticket")}
            >
              Get started
            </button>
          )}
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80"
            alt="Verified driver"
          />
          <div className={styles.heroBadge}>Verified Driver</div>
        </div>
      </div>

      <div className={styles.content}>
        {!action ? (
          <div className={styles.cardsGrid}>
            {Object.entries(actionMap).map(([key, item]) => (
              <div
                key={key}
                className={styles.actionCard}
                onClick={() => history.push(`/manage-booking/${key}`)}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.detailPanel}>
            <div className={styles.detailCard}>
              <span className={styles.tag}>{details.title}</span>
              <h2>{details.title}</h2>
              <p>{details.description}</p>

              <div className={styles.actionRow}>
                <button
                  className={styles.primaryButtonSmall}
                  onClick={() => history.push("/my-profile")}
                >
                  {details.button}
                </button>
                <button
                  className={styles.secondaryButton}
                  onClick={() => history.push("/manage-booking")}
                >
                  Back to actions
                </button>
              </div>
            </div>

            <div className={styles.bookingMeta}>
              <h3>Booking summary</h3>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>Passenger</span>
                <span className={styles.metaValue}>
                  {currentCustomer?.name || "Guest user"}
                </span>
              </div>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>Booking ID</span>
                <span className={styles.metaValue}>RB-{Math.floor(
                  100000 + Math.random() * 900000
                )}</span>
              </div>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>Status</span>
                <span className={styles.metaValue}>Confirmed</span>
              </div>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>Driver</span>
                <span className={styles.metaValue}>Verified partner</span>
              </div>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>Support</span>
                <span className={styles.metaValue}>24x7 help</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBooking;
