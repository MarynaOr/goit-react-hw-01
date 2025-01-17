import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={s.frItem}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={s.frName}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
