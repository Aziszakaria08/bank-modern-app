import styles from "../style";
import FeedBackCard from "./FeedBackCard";
import { feedback } from "../constants";

const Testimonials = () => {
  return (
    <section className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>
      <div className="flex justify-center items-start flex-1 flex-col md:items-center md:flex-row mb-20">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="hidden md:block" /> saying about us
        </h1>
        <p
          className={`${styles.paragraph} mt-5 md:mt-0 max-w-[470px] md:max-w-full`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div
        className={`flex justify-start items-center flex-wrap gap-8 md:gap-[54px] md:mb-0 relative`}
      >
        {feedback.map((feedback, _) => (
          <FeedBackCard feedback={feedback} key={feedback.id} />
        ))}
        <div className="absolute w-[70%] h-[100%] blue__gradient z-[1] rounded-full -top-20 -right-1/2"></div>
        <div className="absolute w-[70%] h-[50%] white__gradient z-[0] rounded-full bottom-0 -right-1/2"></div>
      </div>
    </section>
  );
};

export default Testimonials;
