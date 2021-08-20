  
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';
import video from './video1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} typeof='video/MP4' autoPlay loop>
        </video>
      <h1>MEET YOUR DREAMS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LETS GO!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH THIS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;