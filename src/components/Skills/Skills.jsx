import React from 'react'
import styles from "./Skills.module.scss"
import Image from 'next/image'
function Skills() {
  return (
    <div className={styles['container']}>
        <div className={styles['heading']}>
            <h1>Skills</h1>
        </div>
        <div className={styles['body']}>
            <Image src={'/Group 12.svg'} height={100} width={100} alt='html'></Image>
            <Image src={'/Group 13.svg'} height={100} width={100} alt='html'></Image>
            <Image src={'/Group 14.svg'} height={100} width={100} alt='html'></Image>
            <Image src={'/Group.svg'} height={100} width={100} alt='html'></Image>
            <Image src={'/Vector (1).svg'} height={100} width={100} alt='html'></Image>
            <Image src={'/git.svg'} height={100} width={100} alt='html'></Image>
            <Image src={'/bootstrap.svg'} height={100} width={100} alt='html'></Image>
            <Image src={'/Vector.svg'} height={100} width={100} alt='html'></Image>
            <Image src={'/java.png'} height={100} width={100} alt='html'></Image>
            <Image src={'/spring-boot.png'} height={100} width={100} alt='html'></Image>
        </div>
    </div>
  )
}

export default Skills