import React from 'react'
import { auth } from '../firebase'

const style = {
    button: `bg-red-600 text-white rounded-[10px] px-4 py-2`
}


const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }
  
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut