// import userData from '../userData.json'
import styles from './Profile.module.css'
export default function Profile ({ name, tag, location, image, stats, }){
    return (
<div>
  <div className={styles.profileCon}>
    <img
      src={image}
      alt="User avatar"
 
    
className={styles.avatar}
  



    />
    <p className={styles.profleName}> {name} </p>
    <p className={styles.profleTag}>{tag} </p>
    <p className={styles.profleTag}> {location} </p>
  </div>













  <ul className={styles.profleItem}>
  <li className={styles.profleList}>
    <span className={styles.profleA}>Followers:</span>
    <span className={styles.profleB}> {stats?.followers || 0}</span>
      
    </li>
    <li className={styles.profleList}>
      <span className={styles.profleA}>Views:</span>
      <span className={styles.profleB}>       {stats?.views || 0}
</span>
    </li>
    <li className={styles.profleList}>
      <span className={styles.profleA}>Likes:</span>
      <span className={styles.profleB}>       {stats?.likes || 0}
</span>
    </li>
  </ul>
</div>


    )
}


















