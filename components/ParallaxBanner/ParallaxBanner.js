import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

import styles from './ParallaxContainer'

const ParallaxBackground = ({ image }) => {
  return (
    <ParallaxProvider>
      <div className='vertical'>
        <div className={styles.bannerContainer}>
          <ParallaxBanner
            style={{
              height: '40vh',
            }}
            className={styles.bannerBg}
            layers={[
              {
                image: image,
                amount: 0.3,
              },
            ]}
          />
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default ParallaxBackground
