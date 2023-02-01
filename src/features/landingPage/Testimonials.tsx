// CORE
import React from 'react';
// UI
import styles from '../../styles/customStyles';
import FeedbackCard from './FeedbackCard';
import { feedback } from '../../constants';

const Testimonials = () => {
  return (
    <section id="testimonials" className={`flex flex-col gap-[30px] ${styles.paddingY} relative`}>
      <div className={`flex-1 flex gap-[30px] md:gap-0 flex-col md:flex-row md:items-center `}>
        <div className={`flex-1`}>
          <h2 className={`heading`}>What people are saying about us</h2>
        </div>
        <div className={`flex-1`}>
          <p className={`${styles.paragraph}`}>
            Everything you need to accept card payments and grow your business anywhere on the
            planet.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between sm:flex-row gap-[20px]">
        {feedback.map((feedback, idx) => (
          <FeedbackCard
            content={feedback.content}
            name={feedback.name}
            title={feedback.title}
            img={feedback.img}
            key={idx}
          />
        ))}
      </div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-[-50%]  rounded-full pink__gradient opacity-75" />
      <div className="absolute z-[1] w-[60%] h-[60%]  right-[-50%] rounded-full white__gradient opacity-75" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-[-50%] rounded-full blue__gradient opacity-75" />
    </section>
  );
};

export default Testimonials;
