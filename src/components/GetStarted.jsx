import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} flex-col w-[140px] h-[140px] p-[2px] bg-blue-gradient rounded-full`}
  >
    <div
      className={`bg-primary w-full h-full rounded-full ${styles.flexCenter} flex-col`}
    >
      <div className={`${styles.flexCenter} flex-row`}>
        <p className="text-gradient font-poppins font-semibold text-[18px] leading-8 mr-1">
          Get
        </p>
        <img
          src={arrowUp}
          alt=""
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="text-gradient font-poppins font-semibold text-[18px] leading-8 mr-1">
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
