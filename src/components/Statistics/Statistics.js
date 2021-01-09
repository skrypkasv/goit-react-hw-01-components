import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomColor from './getRandomColor';

export default function Statistics({ title = '', stats }) {
  return (
    <div class={styles.statistics}>
      {title && <h2 class={styles.title}>{title}</h2>}

      <ul class={styles.statList}>
        {stats.map(item => (
          <li class={styles.item} key={item.id} style={{ backgroundColor: getRandomColor(200) }}>
            <span class={styles.label}>{item.label} </span>
            <span class={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
