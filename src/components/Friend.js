import PropTypes from 'prop-types';

export default function Friend({ avatar, name, status }) {
  return (
    <li class="item">
      <span class={status ? 'online' : 'offline'}></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
