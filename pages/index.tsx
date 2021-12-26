import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const router = useRouter()

  const watch = () => {
    router.push('/nothing')
  }

  return (
    <div style={{display: 'flex', minHeight: '100vh' ,justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Топ мужчин ради которых я готов стать геем</h1>
      <button onClick={() => watch()}>Посмотреть</button>
    </div>
  )
}

export default Home
