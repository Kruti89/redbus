import React from "react";
import Styles from "./Awards.module.css";

const awardsData = [
  {
    img: "https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png",
    title: "Most Innovative Company",
  },
  {
    img: "https://s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png",
    title: "Most Trusted Brand",
  },
  {
    img: "https://s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png",
    title: "Mobile Innovation Award",
  },
];

const Awards = () => {
  return (
    <section className={Styles.awardsSection}>
      <div className={Styles.awardsContainer}>
        <h2 className={Styles.awardHeading}>AWARDS AND RECOGNITION</h2>

        <div className={Styles.awardsGrid}>
          {awardsData.map((item, index) => (
            <div className={Styles.awardCard} key={index}>
              <div className={Styles.imageBox}>
                <img src={item.img} alt={item.title} />
              </div>
              <p className={Styles.awardsPara}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;