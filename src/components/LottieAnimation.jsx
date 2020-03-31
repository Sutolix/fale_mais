import React from 'react';
import { Lottie } from '@crello/react-lottie';
import animationData from '../lotties/10178-c-bot.json'

export const LottieAnimation = () => (
        <Lottie
            width="150px"
            height="150px"
            speed="1.2"
            className="lottie-container basic"
            config={{ animationData: animationData, loop: true, autoplay: true }}
        />
)
