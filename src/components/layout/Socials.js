import React from 'react';
import './Socials.css'
import Slack from '../assets/slack.png'
import Github from '../assets/github.png'

const Socials = () => {
  return (
    <div className='socials'>
      <a href="#slack"><img src={Slack} alt="slack" /></a>
      <a href="https://github.com/HiZeek" target="_blank" rel="noreferrer"><img src={Github} alt="github" /></a>
    </div>
  )
}

export default Socials;