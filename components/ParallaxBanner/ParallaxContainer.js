import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const ParallaxContiner = (children) => {
  return (
    <div className='scroll-container'>
      <ParallaxProvider>{children}</ParallaxProvider>
    </div>
  );
};

export default ParallaxContiner;
