import Head from 'next/head'
import styles from '../styles/Modules/Home.module.scss'

// Components
import HeaderWrapper from '../components/Header/Header'
import HeroWrapper from '../components/Hero/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="author" content="Carlos Pomares"/>
        <meta name="description" content="A portfolio site to show my skills and projects."/> 
        <title>Welcome | Carlos Pomares</title>
      </Head>

      <HeaderWrapper />

      <HeroWrapper />

    </div>
  )
}
