import styles from '@/styles/NotificationCard.module.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

interface MyComponentProps {
  title: string,
  location: string,
  severe: boolean
}

const NotificationCard = ({ data } : {data: MyComponentProps}) => {
  return (
    <div className={styles.notificationCard}>
      <div>
        <h3 style={{fontSize: '1rem', opacity: 0.6}}>{data.title}</h3>
        <p style={{fontSize: '0.8rem', paddingTop: '0.5rem'}}>{data.location}</p>
      </div>
      {data.severe ? <FontAwesomeIcon icon={faTriangleExclamation} style={{color: '#FF0F0F', fontSize: '1.2rem'}} /> : <div></div>}
    </div>
  )
}

export default function NotificationSection() {

  const [NotificationCardCount, setNotificationCardCount] = useState(0)

  const crackDataHigh: MyComponentProps = {
    title: "Crack Detected!",
    location: "2 km from the origin.",
    severe: true
  }

  const crackDataLow: MyComponentProps = {
    title: "Crack Detected!",
    location: "500 m from the origin.",
    severe: false
  }

  const loadsOfTrash: MyComponentProps = {
    title: "Garbage Detected",
    location: "700 m from the origin.",
    severe: true
  }

  const dataList = [crackDataLow, loadsOfTrash, crackDataHigh]

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (NotificationCardCount < 3) {
        setNotificationCardCount(NotificationCardCount + 1);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [NotificationCardCount]);

  const notificationCardsList = [];
  for (let i = 0; i < NotificationCardCount; i++) {
    notificationCardsList.push(<NotificationCard data={dataList[i]} />);
  }

  return (
    <div>
      <h2 style={{fontSize: '1.2rem', paddingBottom: '1rem', paddingLeft: "1rem", fontWeight: "100"}}>Notifications</h2>
      <div className={styles.notificationContainer}>
        {notificationCardsList}
      </div>
    </div>
  )
}
