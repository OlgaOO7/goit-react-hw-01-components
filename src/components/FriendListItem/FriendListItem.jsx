import PropTypes from 'prop-types';
// import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.friendItem} key={id}>
      <span className={css.friendStatus}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};
