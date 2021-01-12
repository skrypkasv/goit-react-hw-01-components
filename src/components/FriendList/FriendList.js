import PropTypes from 'prop-types';
import Friend from './Friend/Friend';
import styles from './FriendList.module.css';

export default function FriendList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <Friend key={item.id} avatar={item.avatar} name={item.name} status={item.isOnline} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
