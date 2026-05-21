import React from "react";
import BusHireForm from "./Bus hire Form/BusHireForm";
import Styles from "./BusHire.module.css";
import TripTypeContainer from "./Trip Type Container/TripTypeContainer";
import { FaCheckCircle } from "react-icons/fa";
import FAQ from "./FAQ Section/FAQ";
import BusHirePricing from "./Bus Hire Pricing/BusHirePricing";
import { BsCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const heroBanner =
  "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1800&q=80";

const tripSteps = [
  {
    icon:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=400&q=80",
    title: ["Choose the", "Journey", "Type"],
    illustration:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
    title: ["Tell us", "about your", "Travel Plans."],
    illustration:
      "https://images.unsplash.com/photo-1491466424936-e304919aada2?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    title: ["Pick the vehicle", "you like and", "go places."],
    illustration:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
  },
];

const vehicleTypes = [
  {
    src: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=900&q=80",
    alt: "Buses and Mini Buses",
    title: "Buses and Mini Buses",
    subtitle: "Ideal for more than 18 people",
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    alt: "Tempo and Travellers",
    title: "Tempo and Travellers",
    subtitle: "Ideal for 10-16 people",
  },
  {
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
    alt: "Sedans and SUVs",
    title: "Sedans and SUVs",
    subtitle: "Ideal for 4-7 people",
  },
];

const busHireFeatures = [
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    alt: "Great value bus",
    title: "Great price and",
    subtitle: "Great value",
  },
  {
    src: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=900&q=80",
    alt: "Clean bus interior",
    title: "Safe and Hygienic",
    subtitle: "Vehicles",
  },
  {
    src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
    alt: "Live tracking",
    title: "Live Track your",
    subtitle: "Journey",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    alt: "Customer support",
    title: "Best Customer",
    subtitle: "Support",
  },
];

const BusHire = () => {
  const [active, setActive] = React.useState("Type of trip");

  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  const history = useHistory();

  const handleClick = () => {
    setActive(active === "Type of trip" ? "Bus Hire Form" : "Type of trip");
  };

  return (
    <div className={Styles.baneer}>
      {/* HERO SECTION */}

      <div>
        <img
          className={Styles.imageBanner}
          src={heroBanner}
          alt="bus hire banner"
        />

        <div className={Styles.bannerElementDiv}>
          <div className={Styles.bannerBusHireText}>
            Bus Hire
          </div>

          <div className={Styles.bannerBusHireSubText}>
            Rent vehicles with professional drivers from trusted operators
          </div>

          <div>
            <img
              src="https://img.icons8.com/color/120/000000/route.png"
              alt="route"
            />
          </div>
        </div>
      </div>

      {/* MAIN STRUCTURE */}

      <div className={Styles.busHireMainLayout}>
        {/* LEFT SIDEBAR */}

        <div className={Styles.leftSidebar}>
          {active === "Type of trip" && (
            <TripTypeContainer
              handleClick={handleClick}
              active={active}
            />
          )}

          {active === "Bus Hire Form" && (
            <BusHireForm handleClick={handleClick} />
          )}
        </div>

        {/* RIGHT CONTENT */}

        <div className={Styles.rightContent}>
          {/* BOOK STEPS */}

          <div className={Styles.bookInEasyStepsdiv}>
            <div className={Styles.bookInEasySteps_heading}>
              Book in 3 easy steps
            </div>

            {tripSteps.map((step, index) => (
              <div
                className={Styles.bookInEaschStep}
                key={index}
              >
                <div>
                  <img src={step.icon} alt="" />
                </div>

                <div>
                  {step.title.map((line, i) => (
                    <div
                      key={i}
                      className={Styles.bookInEaschStepText}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div>
                  <img
                    src={step.illustration}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>

          {/* FEATURES */}

          <div>
            <div className={Styles.bookInEasySteps_heading}>
              With Bus Hire you get
            </div>

            <div className={Styles.withBusHireYouCanGet}>
              {busHireFeatures.map((feature, index) => (
                <div
                  className={Styles.BusHireFeatures}
                  key={index}
                >
                  <img
                    src={feature.src}
                    alt={feature.alt}
                    className={Styles.BusHireFeatureImage}
                  />

                  <div className={Styles.BusHireEachFeature}>
                    <div className={Styles.BusHireEachFeatureText}>
                      {feature.title}
                    </div>

                    <div className={Styles.BusHireEachFeatureText}>
                      {feature.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MANAGE BOOKING */}

          <div className={Styles.manageBookingSection}>
            <div className={Styles.manageBookingCard}>
              <div>
                <div className={Styles.manageBookingTitle}>
                  Manage your booking
                </div>

                <div className={Styles.manageBookingText}>
                  {currentCustomer
                    ? `Hi ${currentCustomer.name}, manage all your tickets and bookings from one place.`
                    : "Quickly manage tickets, cancel bookings, and track journeys from one dashboard."}
                </div>

                <button
                  className={Styles.manageBookingButton}
                  onClick={() =>
                    history.push("/manage-booking")
                  }
                >
                  Open Manage Booking
                </button>
              </div>

              <div className={Styles.manageBookingImage}>
                <img
                  src="https://images.unsplash.com/photo-1521099680794-7d5ad052bf18?auto=format&fit=crop&w=700&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* VEHICLES */}

          <div className={Styles.VehicleYouCanGet}>
            <div className={Styles.bookInEasySteps_heading}>
              Vehicle Types
            </div>

            {vehicleTypes.map((type, index) => (
              <div
                className={Styles.vehicleTypeImage}
                key={index}
              >
                <img src={type.src} alt={type.alt} />

                <div className={Styles.vehicleText}>
                  <h3>{type.title}</h3>
                  <p>{type.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WHY BOOK */}

          <div className={Styles.whyBookWithBushire}>
            <div className={Styles.bookInEasySteps_heading}>
              Why book with Bus Hire
            </div>

            <div className={Styles.whyBookWithBushire_firstFeature}>
              <div
                className={
                  Styles.whyBookWithBushire_insideFeature
                }
              >
                <div>
                  <h3>Plan the perfect group trip</h3>

                  <p>
                    Outstation • Local • Airport
                  </p>
                </div>

                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/group-89.svg"
                  alt=""
                />
              </div>
            </div>

            <div className={Styles.whyBookWithBushire_secondFeature}>
              <div
                className={
                  Styles.whyBookWithBushire_insideFeature
                }
              >
                <div>
                  <h3>Safety+</h3>

                  <p>
                    Hygienic and verified vehicles
                  </p>
                </div>

                <img
                  src="https://www.redbus.in/bushire/static/mwebv2/home/thermal.svg"
                  alt=""
                />
              </div>
            </div>

            <div className={Styles.whyBookWithBushire_thirdFeature}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FaCheckCircle
                  style={{
                    color: "green",
                    fontSize: "20px",
                  }}
                />

                <h3>Bus Hire Stats</h3>
              </div>

              <div>
                <div>
                  <div>60,000+</div>
                  <div>Trips Done</div>
                </div>

                <div>
                  <div>4,000+</div>
                  <div>Vehicles</div>
                </div>

                <div>
                  <div>500+</div>
                  <div>Operators</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}

          <FAQ />

          {/* PRICING */}

          <BusHirePricing />

          {/* EXTRA INFO */}

          <div className={Styles.VehicleYouCanGet}>
            <div className={Styles.bookInEasySteps_heading}>
              Hire us whenever
            </div>

            <div className={Styles.hireuswhenever_paraSection}>
              The buses can be hired for tourism,
              weddings, meetings, picnics,
              corporate events, airport travel and
              much more.
            </div>

            <div className={Styles.hireuswhenever_paraSection}>
              We ensure comfortable, luxurious,
              punctual and hassle-free journeys.
            </div>
          </div>

          {/* TIPS */}

          <div className={Styles.VehicleYouCanGet}>
            <div className={Styles.bookInEasySteps_heading}>
              Safety Tips
            </div>

            <ul className={Styles.list}>
              <li>
                <BsCircleFill
                  style={{
                    marginRight: "10px",
                    fontSize: "7px",
                  }}
                />
                Wear masks while travelling
              </li>

              <li>
                <BsCircleFill
                  style={{
                    marginRight: "10px",
                    fontSize: "7px",
                  }}
                />
                Use sanitiser regularly
              </li>

              <li>
                <BsCircleFill
                  style={{
                    marginRight: "10px",
                    fontSize: "7px",
                  }}
                />
                Travel only with verified operators
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusHire;