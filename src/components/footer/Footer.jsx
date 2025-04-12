import React from 'react'
import styles from "./Footer.module.scss"
function Footer() {
  return (
    <div className={styles['footer']}>
       <span className={styles['heading']}>@ {new Date().getFullYear()} iamrkgolu All Rights Reserved.</span>
    </div>
  )
}

export default Footer