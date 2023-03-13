import React from 'react'
import styles from '@/styles/VideoPanel.module.css'
import Image from 'next/image'

const VideoPanel = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} src="example.mp4" controls />
      {/* <Image
        className={styles.video}
        src="/images/maps.jpg"
        alt="My Image"
        width={400}
        height={300}
      /> */}
    </div>
  )
}

export default VideoPanel