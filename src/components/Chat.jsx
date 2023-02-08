import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { auth, db } from '../firebase'
import React, {useState, useRef, useEffect} from 'react'
import ChatMsg from './ChatMsg'
import SendMessage from './SendMessage'
import { useAuthState } from 'react-firebase-hooks/auth'

const style= {
    main: `flex flex-col p-[10px]  `
}

const Chat = () => {
  const [user] = useAuthState(auth)
    const [messages, setMessages] = useState([])
    const scroll = useRef()
    useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp') )
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = []
        querySnapshot.forEach((doc) => {
            messages.push({...doc.data(), id: doc.id})
        })
        setMessages(messages)
      })
      return () => unsubscribe()
    }, [])
    
  return (
    <>
         <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <>
              <ChatMsg key={message.id} message={message} />    
            </>            
          ))}
      </main>
      {user ?  <SendMessage scroll={scroll} /> : null }
     
      <span ref={scroll}></span>
    </>

  )
}

export default Chat