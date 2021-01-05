import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ children }) {
  return <section class={s.container}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node,
};
