import React, { createRef, forwardRef, useEffect , useRef } from 'react'
import { gsap, Power4, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import ProjectStyle from '../../styles/Modules/Projects.module.scss'

import Project from './Project'

const projects = [
    {
        title: "Fretastic.com",
        subtitle: "Guitar App",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing el",
        href: "#",
        image: "http://localhost:5500/model/assets/fretty.jpg"
    },
    {
        title: "Fretastic.com",
        subtitle: "Guitar App",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing el",
        href: "#",
        image: "http://localhost:5500/model/assets/fretty.jpg"
    },
    {
        title: "Fretastic.com",
        subtitle: "Guitar App",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing el",
        href: "#",
        image: "http://localhost:5500/model/assets/fretty.jpg"
    },
    {
        title: "Fretastic.com",
        subtitle: "Guitar App",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing el",
        href: "#",
        image: "http://localhost:5500/model/assets/fretty.jpg"
    }
]

const ProjectsWrapper = (props,ref) => {

    const [elRefs, setElRefs] = React.useState([]);

    useEffect(() => {

        
        // CREATE REF
        setElRefs(elRefs => (
            Array(projects.length).fill().map((_,i) => elRefs[i] || createRef(null))
        ))

        gsap.registerPlugin(ScrollTrigger)

        gsap.from(elRefs,{
            scrollTrigger: {
                start: "top center"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .6
        })

    },[])

    return (
        <section id={ProjectStyle.projects} ref={ref}>
            {
                projects.map((project,i) => (
                    <Project
                        key={i}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        href={project.href}
                        image={project.image}
                        ref={el => elRefs[i] = el}
                    />
                ))
            }
        </section>
    )
}

export default forwardRef(ProjectsWrapper)