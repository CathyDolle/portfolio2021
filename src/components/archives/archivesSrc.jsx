import React from 'react';
import arkestarImg from '../../assets/img/archives/arkestar.png'
import setupImg from '../../assets/img/about/setup.png'
import ayakaImg from '../../assets/img/about/ayaka.jpg'
import akaliImg from '../../assets/img/about/akali.jpg'
import ramensImg from '../../assets/img/about/ramens.jpeg'

function archivesSrc() {
  return (
    <>
      <a href='https://loginbank.netlify.app/' target="_blank" rel='noreferrer'><img src={arkestarImg} alt="Naruto"/></a>
      <a href="/" target="_blank"><img src={akaliImg} alt="League"/></a>
      <a href="/" target="_blank"><img src={ramensImg} alt="Ramens"/></a>
      <a href="/" target="_blank"><img src={setupImg} alt="Setup"/></a>
      <a href="/" target="_blank"><img src={ayakaImg} alt="Ayaka"/></a>
    </>
  );
}

export default archivesSrc;