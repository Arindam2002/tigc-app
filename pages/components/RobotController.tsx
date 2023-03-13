import React from 'react'
import styles from '@/styles/RobotController.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const RobotController = () => {
    return (
      <div className={styles.container}>
        <button className={`${styles.button} ${styles.left}`}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '1.4rem' }} />
        </button>
        <button className={`${styles.button} ${styles.up}`}>
          <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '1.4rem' }} />
        </button>
        <button className={`${styles.button} ${styles.right}`}>
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1.4rem' }} />
        </button>
        <button className={`${styles.button} ${styles.down}`}>
          <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: '1.4rem' }} />
        </button>
      </div>
    )
  }

export default RobotController