import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "./RPool.module.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBookingDetails } from "../../Redux/BookBus/action";

const RPool = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const [tripType, setTripType] = useState("outstation");
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
    passengers: 1,
  });
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const loadRides = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/buses`);
        setRides(Array.isArray(response.data) ? response.data : []);
      } catch (fetchError) {
        setError("Unable to load rides from the server.");
        console.error(fetchError);
      } finally {
        setLoading(false);
      }
    };

    loadRides();
  }, [backendUrl]);

  const formatDate = (dateValue) => {
    if (!dateValue) return "Unknown date";
    const dateObj = new Date(dateValue);
    if (isNaN(dateObj)) return dateValue;
    return dateObj.toISOString().split("T")[0];
  };

  const getSeatCount = (ride) => {
    if (ride.availableSeats != null) return ride.availableSeats;
    if (ride.seats != null) return ride.seats;
    if (ride.totalSeats != null) return ride.totalSeats;
    return "N/A";
  };

  const getPrice = (ride) => {
    if (ride.price != null) return `₹${ride.price}`;
    if (ride.fare != null) return `₹${ride.fare}`;
    return "Price not available";
  };

  const getFromCity = (ride) => {
    return (
      ride.from ||
      ride.departureLocation?.name ||
      ride.departureDetails?.city ||
      ride.routes?.departureLocation?.name ||
      ride.origin ||
      ride.source ||
      "Unknown"
    );
  };

  const getToCity = (ride) => {
    return (
      ride.to ||
      ride.arrivalLocation?.name ||
      ride.arrivalDetails?.city ||
      ride.routes?.arrivalLocation?.name ||
      ride.destination ||
      ride.target ||
      "Unknown"
    );
  };

  const parseTime = (time) => {
    if (!time) return 0;
    if (typeof time === "number") return time;
    if (typeof time === "string") {
      const parts = time.split(":");
      return Number(parts[0]) || 0;
    }
    return 0;
  };

  const placeholderImage =
    "data:image/png;base64,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";

  const getImage = () => {
    return placeholderImage;
  };

  const getBookingPayload = (ride) => {
    const fromCity = getFromCity(ride);
    const toCity = getToCity(ride);
    const seatCount = Number(formData.passengers || 1);
    const baseFare = Number(ride.price || ride.fare || 0);

    return {
      customerId:
        currentCustomer?._id || currentCustomer?.googleId || currentCustomer?.email || null,
      passengerDetails: Array.from({ length: seatCount }, (_, idx) => ({
        name: currentCustomer?.name || `Passenger ${idx + 1}`,
        gender: "Other",
        age: 18,
      })),
      email: currentCustomer?.email || "guest@example.com",
      phoneNumber: currentCustomer?.phoneNumber || "0000000000",
      fare: baseFare * seatCount,
      status: "upcoming",
      bookingDate: new Date().toISOString().split("T")[0],
      busId: ride._id || null,
      seats: Array.from({ length: seatCount }, (_, idx) => idx + 1),
      departureDetails: {
        city: fromCity,
        location: ride.departureLocation?.name || ride.from || fromCity,
        time: parseTime(ride.departureTime || ride.departureDetails?.time),
        date: formatDate(ride.date),
      },
      arrivalDetails: {
        city: toCity,
        location: ride.arrivalLocation?.name || ride.to || toCity,
        time: parseTime(ride.arrivalTime || ride.arrivalDetails?.time),
        date: formatDate(ride.date),
      },
      duration: ride.duration || "N/A",
      isBusinessTravel: false,
      isInsurance: false,
      isCovidDonated: false,
    };
  };

  const handleBookRide = async (ride) => {
    if (!isLoggedIn) {
      alert("Please log in first to book a ride.");
      history.push("/login", { redirectTo: "/booking-form" });
      return;
    }

    const payload = getBookingPayload(ride);
    dispatch(updateBookingDetails(payload));
    alert("Ride selected and booking details saved. Redirecting to booking page...");
    history.push("/booking-form");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = () => {
    if (formData.source && formData.destination && formData.date) {
      alert("Searching for rPool rides...");
    } else {
      alert("Please fill all fields");
    }
  };

  const rPoolFeatures = [
    {
      title: "Share & Save",
      description: "Save up to 40% on your commute",
      icon: "💰",
    },
    {
      title: "Safe & Verified",
      description: "All riders and drivers verified",
      icon: "✓",
    },
    {
      title: "Flexible Timing",
      description: "Choose your preferred time",
      icon: "🕐",
    },
    {
      title: "Real-time Tracking",
      description: "Track your ride in real-time",
      icon: "📍",
    },
  ];

  return (
    <div className={Styles.rPoolContainer}>
      {/* Hero Banner */}
      <div className={Styles.heroBanner}>
        <div className={Styles.heroOverlay}></div>
        <div className={Styles.heroContent}>
          <h1>Share Your Ride, Share Your Cost</h1>
          <p>Join thousands of commuters saving money every day</p>
        </div>
        <img
          src={placeholderImage}
          alt="Hero Banner"
          className={Styles.heroImage}
        />
      </div>

      {/* Search Section */}
      <div className={Styles.searchSection}>
        <div className={Styles.searchCard}>
          <div className={Styles.tripTypeSelector}>
            <button
              className={`${Styles.tripButton} ${
                tripType === "outstation" ? Styles.active : ""
              }`}
              onClick={() => setTripType("outstation")}
            >
              Outstation
            </button>
            <button
              className={`${Styles.tripButton} ${
                tripType === "local" ? Styles.active : ""
              }`}
              onClick={() => setTripType("local")}
            >
              Local
            </button>
          </div>

          <div className={Styles.searchInputs}>
            <input
              type="text"
              placeholder="From"
              name="source"
              value={formData.source}
              onChange={handleInputChange}
              className={Styles.searchInput}
            />
            <input
              type="text"
              placeholder="To"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className={Styles.searchInput}
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={Styles.searchInput}
            />
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              className={Styles.searchInput}
            >
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
            </select>
          </div>

          <button className={Styles.searchBtn} onClick={handleSearch}>
            SEARCH RIDES
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className={Styles.featuresSection}>
        <h2>Why Choose rPool?</h2>
        <div className={Styles.featuresGrid}>
          {rPoolFeatures.map((feature, index) => (
            <div key={index} className={Styles.featureCard}>
              <div className={Styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Rides */}
      <div className={Styles.upcomingRidesSection}>
        <h2>Popular Rides</h2>
        {loading ? (
          <p className={Styles.loadingMessage}>Loading rides...</p>
        ) : error ? (
          <p className={Styles.errorMessage}>{error}</p>
        ) : rides.length === 0 ? (
          <p className={Styles.emptyMessage}>
            No rides available right now. Please add a ride in MongoDB and refresh.
          </p>
        ) : (
          <div className={Styles.ridesGrid}>
            {rides.map((ride) => (
              <div key={ride._id || ride.id || `${ride.from}-${ride.to}-${ride.date}`} className={Styles.rideCard}>
                <img
                  src={getImage(ride)}
                  alt={`${ride.from || "Source"} to ${ride.to || "Destination"}`}
                  className={Styles.rideImage}
                />
                <div className={Styles.rideInfo}>
                  <div className={Styles.rideRoute}>
                    <span className={Styles.routeCity}>{getFromCity(ride)}</span>
                    <span className={Styles.routeArrow}>→</span>
                    <span className={Styles.routeCity}>{getToCity(ride)}</span>
                  </div>
                  <p className={Styles.rideDate}>{formatDate(ride.date)}</p>
                  <div className={Styles.rideDetails}>
                    <span>👥 {getSeatCount(ride)} seats</span>
                    <span className={Styles.price}>{getPrice(ride)}</span>
                  </div>
                  <button
                    className={Styles.bookBtn}
                    onClick={() => handleBookRide(ride)}
                    type="button"
                  >
                    Book Ride
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className={Styles.ctaSection}>
        <h2>Ready to start sharing?</h2>
        <p>Post a ride or find one that matches your journey</p>
        <div className={Styles.ctaButtons}>
          <button className={Styles.primaryBtn}>Publish My Ride</button>
          <button className={Styles.secondaryBtn}>Find Rides</button>
        </div>
      </div>
    </div>
  );
};

export default RPool;
