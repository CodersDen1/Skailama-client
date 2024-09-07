import React from 'react'
import styles from './styles/Authentication.module.scss';
import Image from 'next/image';
import PlaceHolderImage from '@/assets/background.svg';
import LogoImage from '@/assets/logoText.png';


function index() {
  return (
    <div className={styles.MainContainerDiv}>
        <div className={styles.ImageContainerDiv}>
        <div className={styles.BackgroundImage}>
            <Image src={PlaceHolderImage} alt="background" layout='fill'  />
          </div>
          
         <div className={styles.LogoContainer}>
          <div className={styles.Logo}>
          <Image src={LogoImage} alt="logo"  layout='fill'  />
          </div> 
         </div> 

            {/** Heading Text */}
            <div className={styles.HeadingText}>
              <h1>Your podcast will no longer be just a hobby.</h1>
            </div>
       
        </div>
        <div className={styles.FormContianerDiv}>
          form here
        </div>
    </div>
  )
}

export default index