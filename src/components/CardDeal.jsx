import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section id="cardDeal" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
          Find a better card deal <br className="md:block hidden" />
          in few easy steps.
        </h1>
        <p className={`${styles.paragraph} mt-5  max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={`mt-5`} />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="Card" />
      </div>
    </section>
  );
};

export default CardDeal;
