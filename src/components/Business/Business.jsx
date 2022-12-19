import styles, { layout } from '../../styles/customStyles';
import FeatureCard from '../FeatureCard/FeatureCard';
import { features } from '../../constants';
import { Button } from '../ui';

const Business = () => {
  return (
    <section
      id="bussiness"
      className="flex gap-[30px] md:gap-0 flex-col sm:py-16 py-6 md:flex-row md:items-center"
    >
      <div className={`flex-1`}>
        <h2 className="font-poppins text-white text-[48px] font-semibold leading-[76px]">
          You do the business,
          <br className="hidden sm:block" /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving. But with hundreds of credit cards on the market.
        </p>
        <Button className={'mt-10'}>Get Started</Button>
      </div>
      <div className="flex-1">
        {features.map((feature, idx) => {
          return (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
              index={idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Business;
