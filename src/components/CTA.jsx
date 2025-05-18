import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${layout.section} md:justify-around items-start md:items-center rounded-[20px] md:h-[293px] bg-black-gradient-2 mb-20 p-4 md:p-0`}
    >
      <div className={`${layout.sectionInfo} max-w-[670px] mb-6`}>
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[445px] mt-6`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button />
    </section>
  );
};

export default CTA;
