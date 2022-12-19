import styles from '../../styles/customStyles';
import { stats } from '../../constants';
import StatsDetail from '../StatsDetail/StatsDetail';
const Stats = () => {
  return (
    <section
      id="stats"
      className={`flex gap-2 flex-grow flex-wrap ${styles.flexCenter} ${styles.paddingY}`}
    >
      {stats.map((stat, idx) => (
        <StatsDetail key={stat.id} title={stat.title} value={stat.value} />
      ))}
    </section>
  );
};

export default Stats;
