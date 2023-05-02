import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50',
      name: 'Francielli Rodrigues',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋🏻', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: '<a href="#">jane.design/doctorcare</a>', },
    ],
    publishedAt: new Date('2023-05-02 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g/diego3g',
      name: 'Diego Fernandes',
      role: 'CTO @rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋🏻', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: '<a href="#">jane.design/doctorcare</a>', },
    ],
    publishedAt: new Date('2023-05-03 15:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>


    </div>

  )
}


