import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({friends}) => {
  return (
  <ul className={css.friendList}>
    {friends.map(({id, name, avatar, isOnline}) => {
      return <FriendListItem key={id} name={name} isOnline={isOnline} avatar={avatar} />
    })}
  </ul>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  ).isRequired,
};

