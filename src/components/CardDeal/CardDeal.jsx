import styles from '../../styles/customStyles';
import { card } from '../../assets';
import { Button } from '../ui';
const CardDeal = () => {
  return (
    <section
      id="bussiness"
      className={`flex gap-[30px] md:gap-0 flex-col sm:py-16 py-6 md:flex-row md:items-center`}
    >
      <div className={`flex-1`}>
        <h2 className="font-poppins text-white text-[48px] font-semibold leading-[76px]">
          Find a better card deal
          <br className="hidden sm:block" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-[48px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
          tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button className="mt-[48px]">Get Started</Button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={card} alt="card" className="w-[70%] h-[70%] md:w-[100%] md:h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
