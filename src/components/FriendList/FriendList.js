import PropTypes from 'prop-types';
import Friend from './Friend/Friend';

export default function FriendList({ items }) {
  return (
    <ul>
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
  ),
};
