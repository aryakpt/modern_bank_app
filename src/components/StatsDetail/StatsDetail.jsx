import styles from '../../styles/customStyles';
const StatsDetail = ({ title, value }) => {
  return (
    <div className="basis-[20px] text-white flex-1 ">
      <h2 className="flex justify-center items-center gap-[10px] xs:gap[25px]">
        <span
          className={`font-poppins text-[30px] xs:text-[26px] md:text-[40px] leading-[43px] xs:leading-[53px] font-[600]`}
        >
          {value}
        </span>{' '}
        {''}
        <span
          className={`${styles.paragraph} text-gradient uppercase leading-[26px] text-[20.45px]`}
        >
          {title}
        </span>
      </h2>
    </div>
  );
};

export default StatsDetail;
