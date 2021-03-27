import React, { createRef, forwardRef, useEffect , useRef } from 'react'
import { gsap, Power4, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import ProjectStyle from '../../styles/Modules/Projects.module.scss'

import Project from './Project'

const ProjectsWrapper = (props,ref) => {

    const [elRefs, setElRefs] = React.useState([]);

    useEffect(() => {

        
        // CREATE REF
        setElRefs(elRefs => (
            Array(props.projects.length).fill().map((_,i) => elRefs[i] || createRef(null))
        ))

        gsap.registerPlugin(ScrollTrigger)

        gsap.from(elRefs,{
            scrollTrigger: {
                trigger: "#projects",
                start: "top center"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .6
        })

    },[])

    return (
        <section id="projects" className={ProjectStyle.projects} ref={ref}>
            {
                props.projects.map((project,i) => (
                    <Project
                        key={i}
                        title={props.language.type == "en" ? project.en.title : project.es.title}
                        subtitle={props.language.type == "en" ? project.en.subtitle : project.es.subtitle}
                        description={props.language.type == "en" ? project.en.description : project.es.description}
                        href={project.en.href}
                        image={project.en.image}
                        ref={el => elRefs[i] = el}
                    />
                ))
            }
        </section>
    )
}

export default forwardRef(ProjectsWrapper)