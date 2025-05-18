import styles from "../style";
import { quotes } from "../assets";

const FeedBackCard = ({ feedback }) => {
  return (
    <div
      className={`rounded-[20px] flex flex-col max-w-[343px] h-[320px] md:h-[395px] ${styles.paddingY} sm:px-10 px-6  mb-4 md:mb-0 feedback-card `}
    >
      <img src={quotes} alt="" className="w-[42px] h-[27px] object-contain" />
      <p
        className={`font-poppins font-normal text-[18px] leading-[30.8px] text-white min-w-[290px] min-h-[129px] mt-10`}
      >
        {feedback.content}
      </p>
      <div className="flex mt-0 md:mt-6">
        <img
          src={feedback.img}
          alt="People"
          className="w-[48px] h-[48px] object-contain"
        />
        <div className="flex justify-center items-start flex-col ml-4">
          <h4 className="font-poppins font-normal text-[20px] text-white">
            {feedback.name}
          </h4>
          <p className="text-dimWhite font-poppins text-base font-normal">
            {feedback.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
