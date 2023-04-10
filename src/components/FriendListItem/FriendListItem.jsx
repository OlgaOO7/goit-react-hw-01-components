import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.friendItem} key={id}>
      <span className={isOnline ? css.isOnline : css.friendStatus}></span>
      <img className={css.friendAvatar} src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};