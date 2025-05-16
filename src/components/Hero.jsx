import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex items-center py-[6px] px-2 rounded-lg bg-discount-gradient">
          <img src={discount} alt="Discount" />
          <p className={`${styles.paragraph} text-sm ss:text-[18px]`}>
            <span className="text-white">20% </span>
            DISCOUNT FOR<span className="text-white"> 1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <h1 className="flex-1 text-white font-bold font-poppins ss:text-7xl text-[52px] ss:leading-[100px] leading-[75px]">
            The Next
          </h1>
          <div className="mr-0 sm:flex hidden md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="text-white font-bold font-poppins ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
          Payment Method
        </h1>
        <p className="text-dimWhite sm:leading-8 font-normal text-[18px] py-6">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. <br /> We examine annual percentage
          rates, annual fees.
        </p>
      </div>
      <div
        className={`relative flex-1 flex flex-col md:${styles.flexCenter} md:my-0 my-10`}
      >
        <img
          src={robot}
          alt="Hero"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute w-[40%] h-[35%]  z-[0] top-0 left-0 pink__gradient" />
        <div className="absolute w-[80%] h-[80%]  z-[1] top-0 left-[30%] white__gradient rounded-full" />
        <div className="w-[50%] h-[50%] absolute right-20 z-[0] bottom-10 blue__gradient" />
        <div className={`sm:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;
