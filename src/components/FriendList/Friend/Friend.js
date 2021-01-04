import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend({ avatar, name, status }) {
  return (
    <li className={s.item}>
      <span className={status ? s.online : s.offline}></span>
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
