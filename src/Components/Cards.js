import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from './pexels-cátia-matos-1072179.jpg';
import img1 from './pexels-irina-iriser-1408221.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these BACKGROUND IMAGES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img}
              text='Try not to be a man of success,try to be a man of value '
              label='Background 1'
              path='/services'
            />
            <CardItem
              src={img1}
              text='Smile that is a confidence on its own'
              label='Background 2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Life is full of beutiful moments,try to grab some'
              label='Background 3'
              path='/services'
            />
            <CardItem
              src={img}
              text='Enjoy every Bit'
              label='Background 4'
              path='/products'
            />
            <CardItem
              src={img1}
              text='Make your environment a Happy Place'
              label='Background 5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;