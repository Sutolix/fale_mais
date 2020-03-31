// UncontrolledLottie.jsx
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/10178-c-bot.json';

export default function LottieAnimation(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={80}
              width={80}
        />
      </div>
    )
  }
