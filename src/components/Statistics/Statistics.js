import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomColor from './getRandomColor';

export default function Statistics({ title = '', stats }) {
  return (
    <div className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(item => (
          <li className={styles.item} key={item.id} style={{ backgroundColor: getRandomColor(200) }}>
            <span className={styles.label}>{item.label} </span>
            <span className={styles.percentage}>{item.percentage}%</span>
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
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
