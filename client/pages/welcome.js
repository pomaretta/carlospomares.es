import Head from 'next/head'
import { Component, createRef } from 'react'

// Components
import HeaderWrapper from '../components/Header/Header'
import HeroWrapper from '../components/Hero/Hero'
import FeaturedWrapper from '../components/Featured/Featured'
import SkillWrapper from '../components/Skills/Skills'
import ProjectsWrapper from '../components/Projects/Projects'
import ContactWrapper from '../components/Contact/Contact'
import Skill from '../components/Skills/Skill'

const language = {
    en: {
      type: "en",
      header: {
          LOGO: "Carlos Pomares",
          nav: [
              "My projects"
              ,"Contact"
          ]
      },
      hero: {
          TITLE: "Hello, I'm Carlos Pomares",
          SUBTITLE: "I make Java & Web Applications"
      },
      featured: {
          SUBTITLE: "Featured Project"
      },
      skills: [
          {
              TITLE: "Web Development",
              DESCRIPTION: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?",
              IMAGE: "#"
          },
          {
              TITLE: "Web Development",
              DESCRIPTION: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?",
              IMAGE: "#"
          },
          {
              TITLE: "Web Development",
              DESCRIPTION: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?",
              IMAGE: "#"
          }
      ],
      contact: [
          {
              TITLE: "Name",
              PLACEHOLDER: "Enter Your Name"
          },
          {
              TITLE: "Email",
              PLACEHOLDER: "Enter Your Email"
          },
          {
              TITLE: "Message",
              PLACEHOLDER: "Enter Your Message"
          },
          {
              TITLE: "Send"
          },
      ]
    },
    es: {
      type: "es",
      header: {
          LOGO: "Carlos Pomares",
          nav: [
              "Proyectos"
              ,"Contacto"
          ]
      },
      hero: {
          TITLE: "Hola, me llamo Carlos Pomares",
          SUBTITLE: "Soy desarrollador de aplicaciones web y multiplataforma."
      },
      featured: {
        SUBTITLE: "Proyecto destacado"
      },
      skills: [
          {
              TITLE: "Desarrollo Web",
              DESCRIPTION: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?",
              IMAGE: "#"
          },
          {
              TITLE: "Desarrollo Web",
              DESCRIPTION: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?",
              IMAGE: "#"
          },
          {
              TITLE: "Desarrollo Web",
              DESCRIPTION: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?",
              IMAGE: "#"
          },
      ],
      contact: [
          {
              TITLE: "Nombre",
              PLACEHOLDER: "Introduce tu nombre"
          },
          {
              TITLE: "Email",
              PLACEHOLDER: "Introduce tu email"
          },
          {
              TITLE: "Mensaje",
              PLACEHOLDER: "Introduce tu mensaje"
          },
          {
              TITLE: "Enviar"
          },
      ]
    },
}

const featuredProject = {
        en: {
            title: "Hello World!",
            subtitle: "Sell app",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        },
        es: {
            title: "Hola Mundo!",
            subtitle: "App de ventas",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        }
}

const projects = [
    {
        en: {
            title: "Hello World!",
            subtitle: "Sell app",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        },
        es: {
            title: "Hola Mundo!",
            subtitle: "App de ventas",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        }
    },
    {
        en: {
            title: "Hello World!",
            subtitle: "Sell app",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        },
        es: {
            title: "Hola Mundo!",
            subtitle: "App de ventas",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        }
    },
    {
        en: {
            title: "Hello World!",
            subtitle: "Sell app",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        },
        es: {
            title: "Hola Mundo!",
            subtitle: "App de ventas",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        }
    },
    {
        en: {
            title: "Hello World!",
            subtitle: "Sell app",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        },
        es: {
            title: "Hola Mundo!",
            subtitle: "App de ventas",
            description: "Lorem ipsum daemon",
            image: "#",
            href: "."
        }
    },
]

class Welcome extends Component {
  
    constructor(props){
      super(props)
  
      // STATE
      this.state = {
          language: true
      }

      // BIND
      this.changeLang = this.changeLang.bind(this)
  
      // REF
      this.contactRef = createRef()
      this.projectsRef = createRef()

    }
  
    // LANGUAGE
    changeLang(){
      this.setState({
          language: !this.state.language
      })
    }
    
    render(){
        return (
        <div>

            <Head>
                <meta name="author" content="Carlos Pomares"/>
                <meta name="description" content="A portfolio site to show my skills and projects."/> 
                <title>{this.state.language ? "Welcome" : "Bienvenido"} | Carlos Pomares</title>
            </Head>

            <HeaderWrapper language={this.state.language ? language.en : language.es} lang={this.state.language} changeLang={this.changeLang} />
        
            <HeroWrapper language={this.state.language ? language.en : language.es} />

            <FeaturedWrapper language={this.state.language ? language.en : language.es} project={featuredProject} />

            <SkillWrapper language={this.state.language ? language.en : language.es} />

            <ProjectsWrapper language={this.state.language ? language.en : language.es} projects={projects} />

            <ContactWrapper language={this.state.language ? language.en : language.es} />

        </div>
        )
    }
}

export default Welcome

{/* <div>
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

      <ContactWrapper ref={el => contactRef = el} /> */}
