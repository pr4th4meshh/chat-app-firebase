import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { auth, db } from '../firebase';

const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0 sticky `,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded-l-[10px] `,
    button: `w-[20%] bg-green-500 rounded-r-[10px] `,
  };

const SendMessage = ({scroll}) => {
    const [input, setInput] =  useState('')
    const sendMessage = async    (e) => {
        e.preventDefault()
        if( input === '' ) {
            alert('Enter a valid message..')
            return
        } 
        const  { uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            timestamp :serverTimestamp(),
            uid,
        })
        setInput('')
        scroll.current.scrollIntoView({behaviour: 'smooth', block: 'end'})
    }
 

  return (
        <form onSubmit={sendMessage} className={`${style.form}`}  >
        <input value={input} onChange={(e)=> setInput(e.target.value)} className={style.input} type="text" placeholder='Message' />
        <button className={style.button} type='submit' >Send</button> 
       </form>
  )
}

export default SendMessage