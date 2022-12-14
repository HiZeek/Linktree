import React from 'react';
import './Profile.css';
import Button from '../layout/Button';
import Socials from '../layout/Socials';
import ProfilePic from '../layout/ProfilePic';

const Profile = () => {
  return (
    <main className='main'>
      <ProfilePic />
      <Button />
      <Socials />
    </main>
  )
}

export default Profile;