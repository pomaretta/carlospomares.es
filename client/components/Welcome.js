import Head from 'next/head'
import { Component, createRef } from 'react'
import axios from 'axios'
import translate from 'translate'
translate.engine = "libre"

// Components
import HeaderWrapper from './Header/Header'
import HeroWrapper from './Hero/Hero'
import FeaturedWrapper from './Featured/Featured'
import SkillWrapper from './Skills/Skills'
import ProjectsWrapper from './Projects/Projects'
import ContactWrapper from './Contact/Contact'
import Skill from './Skills/Skill'

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
      greetings: {
        TITLE: "Thank you",
        ERROR: "An error has ocurred"
      },
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
      greetings: {
        TITLE: "Gracias",
        ERROR: "Ha ocurrido un problema"
      },
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

var projects = [
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

const toTranslateFeatured = {
    id: 1,
    title: "Portfolio Redesign",
    subtitle: "Portfolio Web",
    description: 'The project "Portfolio" is based in web development using NextJS and a local server in my home that allow me to deploy a website.',
    image: "https://raw.githubusercontent.com/pomaretta/ecommerce-web/master/readme/home.PNG",
    href: "https://github.com/pomaretta/ecommerce-web"
}

const toTranslate = [
    {
        id: 1,
        title: "Ecommerce web",
        subtitle: "Ecommerce Application",
        description: "Lorem ipsum daemon",
        image: "https://raw.githubusercontent.com/pomaretta/ecommerce-web/master/readme/home.PNG",
        href: "https://github.com/pomaretta/ecommerce-web"
    },
]

var p = []

class Welcome extends Component {
  
    constructor(props){
        super(props)
  
        // STATE
        this.state = {
            language: true,
            projects: projects,
            featured: null,
            isFetching: true
        }

        // BIND
        this.getProjects = this.getProjects.bind(this)
        this.parseProjects = this.parseProjects.bind(this)
        this.translateProject = this.translateProject.bind(this)
        this.changeLang = this.changeLang.bind(this)
    
        // REF
        this.contactRef = createRef()
        this.projectsRef = createRef()

    }

    componentDidMount(){
        this.setState({
            isFetching: false
        })
    }

    // PROJECTS
    async getProjects(){

        let data = [];

        data = await axios.get('http://localhost:8000/projects')
        .catch(err => {
            console.log(err)
        })

        let projects = await this.parseProjects(data.data)

        return projects
    }

    parseProjects(p){
        p.forEach(async (item,index) => {
            p[index] = await this.translateProject(item)
        })
        return p
    }

    async translateProject(r){

        let toTranslate = `${r.title};${r.subtitle};${r.description}`
        let translated = await translate(toTranslate,{to: "es"})
        translated = translated.split(";")

        const title = translated[0]
        const subtitle = translated[1]
        const description = translated[2]

        return {
            en: {
                id: r.id,
                title: r.title,
                subtitle: r.subtitle,
                description: r.description,
                image: r.image,
                href: r.href
            },
            es: {
                id: r.id,
                title: title,
                subtitle: subtitle,
                description: description,
                image: r.image,
                href: r.href
            }
        }
    }

    // LANGUAGE
    changeLang(){
      this.setState({
          language: !this.state.language
      })
    }
    
    render(){
        const { isFetching } = this.state;
        return (
        <div>
            {isFetching ?
                <h1>Loading...</h1>
                :
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
            }
        </div>
        )
    }
}

export default Welcome
