// CORE
import React from 'react';

// UI
import styles from '../../styles/customStyles';
import { stats } from '../../constants';
import StatsDetail from './StatsDetail';

const Stats = () => {
  return (
    <section id="stats" className={`flex gap-2 flex-col sm:flex-row ${styles.paddingY}`}>
      {stats.map((stat) => (
        <StatsDetail key={stat.id} title={stat.title} value={stat.value} />
      ))}
    </section>
  );
};

export default Stats;
