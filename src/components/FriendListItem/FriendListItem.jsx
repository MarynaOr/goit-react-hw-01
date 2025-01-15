import s from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <div className={s.friendCon}>
      <ul className={s.friendItem}>
        <li className={s.friendList} key={id}>
          <img
            src={avatar}
            alt="avatar"
            className={s.friendAvatar}
            width="48"
          />
          <p className={s.friendName}> {name} </p>
          <p className={isOnline ? s.online : s.offline}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      </ul>
    </div>
  );
}
