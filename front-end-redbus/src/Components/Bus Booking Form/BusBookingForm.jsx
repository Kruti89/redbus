import React from "react";
import Styles from "./BusBookingForm.module.css";
import busBg from "../../assets/bus-bg.jpg";
import { MdAccountCircle } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBookingDetails } from "../../Redux/BookBus/action";

const BusBookingForm = () => {
  const seatsArray = useSelector((state) => state.busDetailsReducer.seats);

  var passengerArray = [];
  for (var ele = 0; ele < seatsArray.length; ele++) {
    passengerArray.push({
      name: "",
      age: "",
      gender: "",
    });
  }

  const [passDetails, setPassDetails] = React.useState(passengerArray);
  const [passEmail, setPassEmail] = React.useState("");
  const [passPhNo, setPassPhNo] = React.useState("");
  const [passIsBusiness, setPassIsBusiness] = React.useState(false);
  const [passIsCovidDonate, setPassIsCovidDonate] = React.useState(false);
  const [passInsurance, setPassInsurance] = React.useState(false);

  let history = useHistory();
  let dispatch = useDispatch();
  const handleProceedToPay = () => {
    const payload1 = {
      key: "passengerDetails",
      value: passDetails,
    };

    const payload2 = {
      key: "email",
      value: passEmail,
    };

    const payload3 = {
      key: "phoneNumber",
      value: passPhNo,
    };

    const payload4 = {
      key: "isBusinessTravel",
      value: passIsBusiness,
    };

    const payload5 = {
      key: "isInsurance",
      value: passInsurance,
    };

    const payload6 = {
      key: "isCovidDonated",
      value: passIsCovidDonate,
    };

    dispatch(updateBookingDetails(payload1));
    dispatch(updateBookingDetails(payload2));
    dispatch(updateBookingDetails(payload3));
    dispatch(updateBookingDetails(payload4));
    dispatch(updateBookingDetails(payload5));
    dispatch(updateBookingDetails(payload6));

    history.push("/payment-page");
  };

  const handlePassName = (e, indexNo) => {
    const newArr = [...passDetails];
    newArr[indexNo]["name"] = e.target.value;
    setPassDetails(newArr);
  };

  const handlePassAge = (e, indexNo) => {
    const newArr = [...passDetails];
    newArr[indexNo]["age"] = e.target.value;
    setPassDetails(newArr);
  };

  const handlePassGender = (e, indexNo) => {
    const newArr = [...passDetails];
    newArr[indexNo]["gender"] = e.target.value;
    setPassDetails(newArr);
  };

  console.log(
    passDetails,
    passPhNo,
    passEmail,
    passIsBusiness,
    passIsCovidDonate,
    passInsurance
  );

  return (
    <div
      className={Styles.pageBackground}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${busBg})`,
      }}
    >
      <div className={Styles.bookingFormWrapper}>
        <h4 className={Styles.passenger_mainTitle}>Enter Passenger Details</h4>
        <div className={Styles.passengerListWrapper}>
        {seatsArray.map((seatNo, index) => {
          return (
            <div className={Styles.passengerCard} key={`${seatNo}-${index}`}>
              <div className={Styles.cardHeader}>
                <div className={Styles.cardHeaderIcon}>
                  <MdAccountCircle />
                </div>
                <div>
                  <div className={Styles.cardHeaderTitle}>Passenger Information</div>
                  <div className={Styles.cardHeaderSubtitle}>
                    Passenger {index + 1} • Seat {seatNo}
                  </div>
                </div>
              </div>

              <div className={Styles.formGroup}>
                <label className={Styles.form_label}>Name</label>
                <input
                  className={Styles.form_input}
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={passDetails[index]["name"]}
                  onChange={(e) => handlePassName(e, index)}
                />
              </div>

              <div className={Styles.row}>
                <div className={Styles.formGroup}>
                  <label className={Styles.form_label}>Gender</label>
                  <div className={Styles.radioGroup}>
                    <label className={Styles.radioOption}>
                      <input
                        className={Styles.radioButton}
                        type="radio"
                        name={"gender" + index}
                        value="Male"
                        checked={passDetails[index]["gender"] === "Male"}
                        onChange={(e) => handlePassGender(e, index)}
                      />
                      Male
                    </label>
                    <label className={Styles.radioOption}>
                      <input
                        className={Styles.radioButton}
                        type="radio"
                        name={"gender" + index}
                        value="Female"
                        checked={passDetails[index]["gender"] === "Female"}
                        onChange={(e) => handlePassGender(e, index)}
                      />
                      Female
                    </label>
                  </div>
                </div>
                <div className={Styles.formGroup}>
                  <label className={Styles.form_label}>Age</label>
                  <input
                    className={Styles.form_input}
                    placeholder="Age"
                    type="number"
                    name="age"
                    value={passDetails[index]["age"]}
                    onChange={(e) => handlePassAge(e, index)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={Styles.ContentBlock}>
        <div className={Styles.contactCardHeader}>
          <MdEmail />
          <span>Contact Details</span>
        </div>
        <div className={Styles.passengerContactMsg}>
          Your ticket will be sent to these details.
        </div>
        <div className={Styles.formGroup}>
          <label className={Styles.form_label}>Email</label>
          <input
            className={Styles.form_input}
            placeholder="Email"
            type="email"
            name="email"
            value={passEmail}
            onChange={(e) => setPassEmail(e.target.value)}
          />
        </div>
        <div className={Styles.formGroup}>
          <label className={Styles.form_label}>Phone</label>
          <div className={Styles.phoneRow}>
            <input
              className={`${Styles.form_input} ${Styles.phonePrefix}`}
              placeholder="+91"
              type="text"
              value="+91"
              readOnly
            />
            <input
              className={`${Styles.form_input} ${Styles.phoneInput}`}
              placeholder="Phone"
              type="tel"
              name="phone"
              value={passPhNo}
              onChange={(e) => setPassPhNo(e.target.value)}
            />
          </div>
        </div>
        <div className={Styles.checkboxRow}>
          <label className={Styles.checkboxOption}>
            <input
              type="checkbox"
              checked={passIsBusiness}
              onChange={(e) => setPassIsBusiness(e.target.checked)}
            />
            I am booking tickets for business travel.
          </label>
        </div>
        <div className={Styles.checkboxRow}>
          <label className={Styles.checkboxOption}>
            <input type="checkbox" />
            <FaWhatsapp className={Styles.whatsappIcon} />
            Send updates and booking details on my Whatsapp number.
          </label>
        </div>
        <div className={Styles.insure_title}>
          Insure your travel by adding Rs 15 per passenger. Powered by ICICI
          Lombard GIC Ltd
        </div>
        <div className={Styles.coverageGrid}>
          <div className={Styles.coverageItem}>
            <img
              src="https://s1.rdbuz.com/apps/images/india-acko-insurance/luggage.png"
              alt="insurance"
              className={Styles.coverageIcon}
              width="25"
              height="25"
            />
            <div className={Styles.coverageTitle}>Loss of baggage</div>
            <div className={Styles.coverageSubtitle}>Upto Rs. 3000 insurance</div>
          </div>
          <div className={Styles.coverageItem}>
            <img
              src="https://s1.rdbuz.com/apps/images/india-acko-insurance/accident.png"
              alt="insurance"
              className={Styles.coverageIcon}
              width="25"
              height="25"
            />
            <div className={Styles.coverageTitle}>Personal Accident</div>
            <div className={Styles.coverageSubtitle}>Rs. 6,00,000 cover</div>
          </div>
        </div>
        <div className={Styles.checkboxRow}>
          <label className={Styles.checkboxOption}>
            <input
              type="checkbox"
              checked={passInsurance}
              onChange={(e) => setPassInsurance(e.target.checked)}
            />
            Yes, secure my trip with insurance. I have read and understood the
            Terms and Conditions.
          </label>
        </div>
        <div className={Styles.checkboxRow}>
          <label className={Styles.checkboxOption}>
            <input
              type="checkbox"
              checked={passIsCovidDonate}
              onChange={(e) => setPassIsCovidDonate(e.target.checked)}
            />
            COVID Donation
          </label>
        </div>
      </div>
      <div className={Styles.ContentBlock}>
        <div className={Styles.termsText}>
          By clicking on proceed, I agree that I have read and understood the
          TnCs and the Privacy Policy.
        </div>
        <div className={Styles.proceedAction}>
          <button
            className={Styles.proceed_to_button}
            type="button"
            onClick={handleProceedToPay}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BusBookingForm;
