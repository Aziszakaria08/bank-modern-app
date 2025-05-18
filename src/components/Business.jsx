import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ index, icon, title, content }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] bg-dimBlue ${styles.flexCenter} rounded-full`}
    >
      <img src={icon} alt="Icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="text-[18px] font-poppins font-semibold mb-2 leading-[23px] text-white ">
        {title}
      </h4>
      <p className="font-poppins font-normal leading-8 text-dimWhite">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
