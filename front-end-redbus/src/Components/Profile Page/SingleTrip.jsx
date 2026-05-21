import React from "react";
import styles from "./SingleTrip.module.css";
import { BsCircleFill } from "react-icons/bs";

const SingleTrip = ({ booking }) => {
  console.log("Booking is : ", booking);
  console.log(booking.passengerDetails);
  let imageArr = [
    {
      _id: {
        $oid: "6049b8a97501a24470b9a526",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
    },
    {
      _id: {
        $oid: "6049b8a97501a24470b9a527",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
    },
    {
      _id: {
        $oid: "6049b8a97501a24470b9a528",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/9365/1087/GW/DL/hDsqel.jpeg",
    },
    {
      _id: {
        $oid: "6049b8a97501a24470b9a529",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/10/411/ST/L/penRe7.jpeg",
    },
    {
      _id: {
        $oid: "6049b8a97501a24470b9a52a",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/19449/814/FR/DL/PuizKJ.jpeg",
    },
    {
      _id: {
        $oid: "6049b8a97501a24470b9a52b",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/450/OT/L/lejRej.jpeg",
    },
    {
      _id: {
        $oid: "6049b8a97501a24470b9a52c",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/54/ST/DL/11XMg2.jpeg",
    },
    {
      _id: {
        $oid: "6049b8a97501a24470b9a52d",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/16/OT/L/lejRej.jpeg",
    },
    {
      _id: {
        $oid: "6049b8a97501a24470b9a52e",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
    },
    {
      _id: {
        $oid: "6049d3567501a24470b9a533",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/4957/54/FR/L/lejRej.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bef",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/9365/1087/GW/DL/hDsqel.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf0",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf1",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf2",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/5483/35/FR/DL/AHGCEp.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf3",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/10/54/FR/L/lejRej.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf4",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/420/SI/DL/RdzzBG.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf5",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/17633/54/ST/DL/7UCTZE.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf6",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/5483/35/FR/DL/AHGCEp.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf7",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/10256/4/FR/L/lejRej.jpeg",
    },
    {
      _id: {
        $oid: "604b8aedb3f0410d74d91bf8",
      },
      images:
        "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
    },
  ];
  return (
    <div className={styles.SingleTrip}>
      <div className={styles.SingleTrip__image}>
        <img
          src={imageArr[Math.floor(Math.random() * imageArr.length)].images}
          alt="bus"
        />
      </div>
      <div className={styles.SingleTrip__busdetails}>
        <div className={styles.SingleTrip__sectionTitle}>Bus Details</div>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Departure Location: {booking.departureDetails.city}
        </p>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Departure Time: {booking.departureDetails.time}:00 hrs
        </p>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Departure Date: {booking.departureDetails.date}
        </p>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Arrival Location: {booking.arrivalDetails.city}
        </p>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Arrival Time: {booking.arrivalDetails.time}:00 hrs
        </p>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Arrival Date: {booking.arrivalDetails.date}
        </p>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Total Fare: ₹{booking.fare}
        </p>
      </div>
      <div className={styles.SingleTrip__persondetails}>
        <div className={styles.SingleTrip__sectionTitle}>Passenger Details</div>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Contact Email: {booking.email}
        </p>
        <p>
          <BsCircleFill className={styles.dotIcon} />
          Contact Phone Number: {booking.phoneNumber}
        </p>
        <div className={styles.SingleTrip__customerDetails__passenger}>
          {booking.passengerDetails?.map((e, idx) => (
            <div key={idx}>
              <p>
                <BsCircleFill className={styles.dotIcon} />
                Name: {e.name || "-"}
              </p>
              <p>
                <BsCircleFill className={styles.dotIcon} />
                Gender: {e.gender || "-"}
              </p>
              <p>
                <BsCircleFill className={styles.dotIcon} />
                Age: {e.age || "-"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleTrip;
