import React from 'react';
import afficheImg from '../../assets/img/archives/affiche.png'
import bubbleImg from '../../assets/img/archives/bubble.svg'
import mandalaImg from '../../assets/img/archives/mandala.png'
import desktopImg from '../../assets/img/archives/desktop.svg'
import setupImg from '../../assets/img/archives/setup.jpeg'
import twitchFolioImg from '../../assets/img/archives/twitchFolio.png'
import njsImg from '../../assets/img/archives/njs.png'
import bankImg from '../../assets/img/archives/bank.png'
import twitchImg from '../../assets/img/archives/twitch.svg'

function archivesSrc() {
  return (
    <>
      <a href='https://loginbank.netlify.app/' target="_blank" rel='noreferrer'><img src={afficheImg} alt="affiche"/></a>
      <a href="https://maximedruart.github.io/Ninjavascript/game.html" target="_blank" rel='noreferrer'><img src={njsImg} alt="njs"/></a>
      <a href='https://www.twitch.tv/katy_v4' target="_blank" rel='noreferrer'><img src={twitchImg} alt="twitchImg"/></a>
      <a href="https://loginbank.netlify.app/" target="_blank" rel='noreferrer'><img src={bankImg} alt="bank"/></a>
      <a href="https://loginbank.netlify.app/" target="_blank" rel='noreferrer'><img src={setupImg} alt="setup"/></a>
      <a href="https://cathydolle.github.io/katy_v4/" target="_blank" rel='noreferrer'><img src={twitchFolioImg} alt="twitchFolioImg"/></a>
      <a href="https://cathydolle.github.io/bubbleTea/" target="_blank" rel='noreferrer'><img src={bubbleImg} alt="Bubble"/></a>
      <a href="https://cathydolle.github.io/#/" target="_blank" rel='noreferrer'><img src={desktopImg} alt="desktopImg"/></a>
      <a href="https://loginbank.netlify.app/" target="_blank" rel='noreferrer'><img src={mandalaImg} alt="mandala"/></a>
    </>
  );
}

export default archivesSrc;