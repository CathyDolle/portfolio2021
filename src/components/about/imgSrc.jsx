import React from 'react';
import narutoImg from '../../assets/img/about/naruto.jpg'
import setupImg from '../../assets/img/about/setup.png'
import ayakaImg from '../../assets/img/about/ayaka.jpg'
import akaliImg from '../../assets/img/about/akali.jpg'
import ramensImg from '../../assets/img/about/ramens.jpeg'

function imgSrc() {
  return (
    <>
      <img src={narutoImg} alt="Naruto"/>
      <img src={akaliImg} alt="League"/>
      <img src={ramensImg} alt="Ramens"/>
      <img src={setupImg} alt="Setup"/>
      <img src={ayakaImg} alt="Ayaka"/>
    </>
  );
}

export default imgSrc;