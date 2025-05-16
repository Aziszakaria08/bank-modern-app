import React from "react";
import styles, { layout } from "../style";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <section id="billing" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute w-[70%] h-[50%] white__gradient z-[3] rounded-full top-0 -left-1/2"></div>
        <div className="absolute w-[70%] h-[50%] pink__gradient z-[0] rounded-full bottom-0 -left-1/2"></div>
      </div>
      <div className={`${layout.sectionInfo} p-6`}>
        <h1 className={styles.heading2}>
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex justify-center items-center mt-5">
          <img
            src={apple}
            alt="apple"
            className="mr-5 cursor-pointer w-[128px] h-[42px] object-contain"
          />
          <img
            src={google}
            alt="google"
            className="mr-5 cursor-pointer w-[128px] h-[42px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
