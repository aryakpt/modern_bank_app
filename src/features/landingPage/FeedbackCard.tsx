// CORE
import React from 'react';
// UI
import { quotes } from '../../assets';

interface Props {
  content: string;
  name: string;
  title: string;
  img: string;
}

const FeedbackCard = ({ content, name, title, img }: Props) => {
  return (
    <div className="feedback-card flex-1 w-full min-h-[395px] px-[40px] py-[60px] flex flex-col justify-between rounded-[20px]">
      <img src={quotes} alt="quotes" className="w-[15%]" />
      <p className={`text-white md:14px md:text-[18px] font-poppins`}>{content}</p>
      <div className="flex items-center gap-[16px]">
        <img src={img} alt="avatar" className="w-[48px] h-[48px]" />
        <div className="text-white">
          <h5 className="font-poppins text-[14px] md:text-[20px]">{name}</h5>
          <p className="font-poppins text-[12px] md:text-[16px] opacity-50">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
