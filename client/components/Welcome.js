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
import Loader from './Loader/Loader'

const language = {
    en: {
      type: "en",
      loader: "Loading",
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
              DESCRIPTION: "I'm focused on web development, doing some practice projects and learning new technologies",
              IMAGE: "/images/web-development.png"
          },
          {
              TITLE: "Java",
              DESCRIPTION: "As my main language on the currently course I'm doing, I like it. I make some applications and my UI Library for it, Termux",
              IMAGE: "/images/java.png"
          },
          {
              TITLE: "Server Manager",
              DESCRIPTION: "For experimental and practice purpouses, I have a Raspberry Pi running some websites and database services.",
              IMAGE: "/images/server.png"
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
      loader: "Cargando",
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
              DESCRIPTION: "Estoy enfocado en el desarrollo web, haciendo algunos proyectos de práctica y aprendiendo nuevas tecnologías.",
              IMAGE: "/images/web-development.png"
          },
          {
              TITLE: "Java",
              DESCRIPTION: "Como lenguaje principal en el curso que estoy haciendo actualmente, me gusta mucho. Hago algunas aplicaciones y he realizado mi libreria para hacer interfaces de usuario, Termux",
              IMAGE: "/images/java.png"
          },
          {
              TITLE: "Gestión de servidor",
              DESCRIPTION: "Para fines experimentales y prácticos, tengo una Raspberry Pi que ejecuta algunos sitios web y servicios de base de datos.",
              IMAGE: "/images/server.png"
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

const projects = [
    {
        "en": {
            "id": 1,
            "title": "Ecommerce web",
            "subtitle": "Ecommerce Application",
            "description": "As a quick project barely made in two days, I tried to make a local ecommerce site to practice UI Design and JS.",
            "image": "https://raw.githubusercontent.com/pomaretta/ecommerce-web/master/readme/home.PNG",
            "href": "https://github.com/pomaretta/ecommerce-web"
        },
        "es": {
            "id": 1,
            "title": "Ecommerce web",
            "subtitle": " Ecommerce Application",
            "description": " Como un proyecto rápido apenas realizado en dos días, intenté hacer un sitio de comercio electrónico local para practicar UI Design y JS.",
            "image": "https://raw.githubusercontent.com/pomaretta/ecommerce-web/master/readme/home.PNG",
            "href": "https://github.com/pomaretta/ecommerce-web"
        }
    },
    {
        "en": {
            "id": 2,
            "title": "Taskvisor",
            "subtitle": "Exercice Viewer Application",
            "description": "With this app the user can go throught modules and see the tasks that it contains, with a preview tool, where the user can see the result of the .HTML with an embed element, and a raw .HTML view, that is the source code.",
            "image": "https://raw.githubusercontent.com/pomaretta/taskvisor/master/preview.png",
            "href": "https://github.com/pomaretta/taskvisor"
        },
        "es": {
            "id": 2,
            "title": "Taskvisor",
            "subtitle": "Aplicación del Visor de Ejercicio",
            "description": "Con esta aplicación el usuario puede pasar por módulos y ver las tareas que contiene, con una herramienta de vista previa, donde el usuario puede ver el resultado de la . HTML con un elemento embed, y un crudo. Vista HTML, ese es el código fuente.",
            "image": "https://raw.githubusercontent.com/pomaretta/taskvisor/master/preview.png",
            "href": "https://github.com/pomaretta/taskvisor"
        }
    },
    {
        "en": {
            "id": 3,
            "title": "Toapp",
            "subtitle": "To Do Application",
            "description": "A web application that allows the user to create, delete and modify tasks. They are stored on browser using LocalStorage API.",
            "image": "/images/toapp.png",
            "href": "http://toapp.carlospomares.es"
        },
        "es": {
            "id": 3,
            "title": "Toapp",
            "subtitle": " To Do Application",
            "description": " Una aplicación web que permite al usuario crear, eliminar y modificar tareas. Se almacenan en el navegador utilizando la API LocalStorage.",
            "image": "/images/toapp.png",
            "href": "http://toapp.carlospomares.es"
        }
    },
    {
        "en": {
            "id": 4,
            "title": "First Portfolio",
            "subtitle": "Portofolio Website",
            "description": "This was my first complete website for showing myself.",
            "image": "/images/portfolio-vn.png",
            "href": "https://github.com/pomaretta/portfolio-vn"
        },
        "es": {
            "id": 4,
            "title": "Primer Portfolio",
            "subtitle": "Portofolio Sitio web",
            "description": "Este fue mi primer sitio web completo para mostrar mis proyectos y aficiones.",
            "image": "/images/portfolio-vn.png",
            "href": "https://github.com/pomaretta/portfolio-vn"
        }
    }
]

const featured = {
    "en": {
        "id": 5,
        "title": "Portfolio Redesign",
        "subtitle": "Portfolio Web",
        "description": "The project \"Portfolio\" is based in web development using NextJS and a local server in my home that allow me to deploy a website.",
        "image": "/images/portfolio-rd.png",
        "href": "https://github.com/pomaretta/carlospomares.es"
    },
    "es": {
        "id": 5,
        "title": "Rediseño de portfolio",
        "subtitle": "Portfolio Web",
        "description": "El proyecto Portfolio se basa en el desarrollo web utilizando NextJS y un servidor local en mi casa que me permite desplegar un sitio web.",
        "image": "/images/portfolio-rd.png",
        "href": "https://github.com/pomaretta/carlospomares.es"
    }
}

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
    async getProjects(p){

        let data = [];

        // data = await axios.get('http://localhost:8000/projects')
        // .catch(err => {
        //     console.log(err)
        // })

        let projects = await this.parseProjects(p)

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
                <Loader language={this.state.language ? language.en : language.es} isFetching={isFetching} />
                :
                <div>
                    <Head>
                        <meta name="author" content="Carlos Pomares"/>
                        <meta name="description" content="A portfolio site to show my skills and projects."/> 
                        <title>{this.state.language ? "Welcome" : "Bienvenido"} | Carlos Pomares</title>
                    </Head>

                    <HeaderWrapper language={this.state.language ? language.en : language.es} lang={this.state.language} changeLang={this.changeLang} />
                            
                    <HeroWrapper language={this.state.language ? language.en : language.es} />

                    <FeaturedWrapper language={this.state.language ? language.en : language.es} project={featured} />

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
