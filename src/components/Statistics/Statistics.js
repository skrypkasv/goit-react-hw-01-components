import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title = '', stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class={s.statList}>
        {stats.map(item => (
          <li class={s.item} key={item.id}>
            <span class={s.label}>{item.label} </span>
            <span class={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
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
