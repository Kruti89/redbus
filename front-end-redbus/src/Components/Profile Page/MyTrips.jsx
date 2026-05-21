import React from "react";
import styles from "./MyTrips.module.css";
import SingleTrip from "./SingleTrip";
import axios from "axios";
import { useSelector } from "react-redux";
const MyTrips = () => {
  const [allBookings, setAllBookings] = React.useState([]);

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  React.useEffect(() => {
    if (currentCustomer) {
      let id = currentCustomer._id;
      console.log("current customer id: ", id);
      fetchData(id);
    }
  }, [currentCustomer]);

  async function fetchData(id) {
    let res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/v1/api/booking/${id}`
    );
    console.log("all bookings of this customer: ", res.data);
    setAllBookings(res.data);
  }

  const renderTripBookings = () => {
    if (allBookings.length === 0) {
      return (
        <div className={styles.emptyState}>
          <h2 className={styles.emptyStateTitle}>No bookings yet</h2>
          <p className={styles.emptyStateSubtitle}>
            Complete a booking and it will appear automatically in My Trips.
            You can also come back later to review upcoming journeys.
          </p>
        </div>
      );
    }

    return allBookings.slice().reverse().map((booking, index) => (
      <SingleTrip key={`${booking._id || index}-${index}`} booking={booking} />
    ));
  };

  return <div className={styles.MyTrips}>{renderTripBookings()}</div>;
};

export default MyTrips;
