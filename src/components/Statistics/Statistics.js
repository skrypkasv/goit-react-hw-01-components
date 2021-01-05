import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomColor from './getRandomColor';

export default function Statistics({ title = '', stats }) {
  return (
    <div class={s.statistics}>
      {title && <h2 class={s.title}>{title}</h2>}

      <ul class={s.statList}>
        {stats.map(item => (
          <li class={s.item} key={item.id} style={{ backgroundColor: getRandomColor(200) }}>
            <span class={s.label}>{item.label} </span>
            <span class={s.percentage}>{item.percentage}%</span>
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
