import PropTypes from "prop-types";
import css from './Profile.module.css';

export const Profile = ({avatar, username, tag, location, followers, views, likes}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
          width="400"
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className="label">Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className="label">Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className="label">Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}
