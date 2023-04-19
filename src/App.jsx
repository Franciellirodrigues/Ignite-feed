import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Francielli Rodrigues"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolorem cupiditate dicta inventore vel commodi ab rem expedita ullam labore. Reprehenderit magni debitis porro nulla alias, odio suscipit repudiandae eligendi!"
          />
          <Post
            author="Diego Mauricio"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolorem cupiditate dicta inventore vel commodi ab rem expedita ullam labore. Reprehenderit magni debitis porro nulla alias, odio suscipit repudiandae eligendi!"
          />
        </main>
      </div>


    </div>

  )
}


