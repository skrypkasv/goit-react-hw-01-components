import PropTypes from 'prop-types';
import styles from './Friend.module.css';

export default function Friend({ avatar, name, status }) {
  return (
    <li className={styles.item}>
      <span className={status ? styles.online : styles.offline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
