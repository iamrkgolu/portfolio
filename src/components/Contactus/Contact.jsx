import React from 'react'
import styles from "./Contact.module.scss"
import Image from 'next/image'
function Contact() {
  return (
    <div className={styles['container']}>
        <div className={styles['heading']}>
            <h1>Contact</h1>
        </div>
        <div className={styles['body']}>
            <div style={{display:"flex", gap:'.5rem' ,justifyContent:'flex-start', padding:'1rem'}}>
            <Image src={"/atsign.png"} height={20} width={20} alt='email'/> 
            <span>{'iamrkgolu@gmail.com'}</span>
            </div>
            <div style={{display:"flex", gap:'.5rem', justifyContent:'flex-start', padding:'1rem'}}>
            <Image src={"/mobile.jpg"} height={20} width={20} alt='email'/> 
            <span>{'8210526146'}</span>
            </div>
            <div style={{display:"flex", gap:'.5rem' ,justifyContent:'flex-start', padding:'1rem', flexDirection:'row'}}>
            <div>
            <Image src={"/address.png"} height={20} width={20} alt='email'/> 
            
            </div>
            <div>
            <div>At-Bishwambhar Patti</div>
            <div>Muzaffarpur</div>
            <div>Bihar</div>
            <div>843129</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact