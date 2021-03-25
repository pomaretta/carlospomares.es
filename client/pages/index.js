import Head from 'next/head'
import styles from '../styles/Modules/Home.module.scss'

// Components
import HeaderWrapper from '../components/Header/Header'
import HeroWrapper from '../components/Hero/Hero'
import FeaturedWrapper from '../components/Featured/Featured'
import SkillWrapper from '../components/Skills/Skills'
import ProjectsWrapper from '../components/Projects/Projects'
import ContactWrapper from '../components/Contact/Contact'
import { createRef } from 'react'

export default function Home() {

  let contactRef = createRef()
  let projectsRef = createRef()

  return (
    <div>
      <Head>
        <meta name="author" content="Carlos Pomares"/>
        <meta name="description" content="A portfolio site to show my skills and projects."/> 
        <title>Welcome | Carlos Pomares</title>
      </Head>

      <HeaderWrapper />

      <HeroWrapper />

      <FeaturedWrapper title="Hello" description="Simple description" href="#" image="http://localhost:5500/model/assets/project-1.png" />

      <SkillWrapper />

      <ProjectsWrapper ref={el => projectsRef = el} />

      <ContactWrapper ref={el => contactRef = el} />

    </div>
  )
}
