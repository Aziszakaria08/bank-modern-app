import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      id="stats"
      className={`flex flex-row flex-wrap justify-start sm:justify-center items-center gap-y-6 gap-x-8 ${styles.paddingY}`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="flex flex-col sm:flex-row sm:items-center sm:gap-8 items-start min-w-[120px]"
        >
          <h1 className="font-poppins font-semibold text-[32px] md:text-[40px] text-white leading-tight">
            {stat.value}
          </h1>
          <h2 className="text-gradient font-normal text-[14px] sm:text-[16px] md:text-[20px] uppercase font-poppins leading-6">
            {stat.title}
          </h2>
          {index !== stats.length - 1 && (
            <div className="hidden sm:block w-[1px] h-[32px] bg-dimWhite mx-6" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Stats;
