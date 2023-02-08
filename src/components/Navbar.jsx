import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import LogOut from './LogOut';

const style = {
    nav: `bg-gray-800 lg:h-20 xxs:h-[140px] lg:flex-row xxs:flex-col flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>{user ? 'P4 Chat App.' : 'Sign in to continue'}</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;