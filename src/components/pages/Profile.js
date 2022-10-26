import React from 'react';
import './Profile.css';
import Footer from '../layout/Footer'
import Button from '../layout/Button';
import Socials from '../layout/Socials';
import ProfilePic from '../layout/ProfilePic';

const Profile = () => {
  return (
    <main className='main'>
      <ProfilePic />
      <Button />
      <Socials />
      <Footer />
    </main>
  )
}

export default Profile;