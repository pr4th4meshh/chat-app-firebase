import './App.css'
import Navbar from './components/Navbar';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center  `,
  sectionContainer: `flex flex-col min-h-[auto] max-h-auto bg-gray-100 mt-0 shadow-xl relative`,
};

function App() {
  const user = useAuthState(auth)
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat/> : null }
      </section>
    </div>
  );
}

export default App
