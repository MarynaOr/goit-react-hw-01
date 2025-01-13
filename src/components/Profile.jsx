// import userData from '../userData.json'
import styles from './Profile.module.css'
export default function Profile ({ username,
    tag,
    location,
    avatar,
    stats,
     }){
    return (
<div>
  <div className=''>
    <img
      src={avatar}
      alt="User avatar"
 
    
className={styles.avatar}
    width='180'



    />
    <p className=''> {username} </p>
    <p className=''>{tag} </p>
    <p className=''> {location} </p>
  </div>

  <ul className=''>
  <li className=''>
    <span>Followers:</span>
    <span> {stats?.followers || 0}</span>
      
    </li>
    <li className=''>
      Views: {stats?.views || 0}
    </li>
    <li className=''>
      Likes: {stats?.likes || 0}
    </li>
  </ul>
</div>


    )
}


















