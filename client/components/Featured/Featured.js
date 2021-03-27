import { Component , useEffect , useRef } from 'react'
import { gsap, Power4, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Style
import FeaturedStyle from '../../styles/Modules/Featured.module.scss'

const FeaturedWrapper = (props) => {

    let featured = useRef(null)
    let featured2 = useRef(null)

    let project = props.language.type == "en" ? props.project.en : props.project.es;

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        const features = [
            featured,
            featured2
        ]

        gsap.from(features,{
            scrollTrigger: {
                trigger: '#featured',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })

    },[])

    return (
        <section id={FeaturedStyle.featured}>
            <div className={FeaturedStyle.left} ref={el => featured = el}>
                <p className={FeaturedStyle.subtitle}>
                    {props.language.featured.SUBTITLE}
                </p>
                <a href={props.href} className={FeaturedStyle.featuredTitle}>
                    {props.language.type == "en" ? props.project.en.title : props.project.es.title}
                </a>
                <p className={FeaturedStyle.featuredDesc}>
                    {props.language.type == "en" ? props.project.en.description : props.project.es.description}
                </p>
            </div>
            <a href={project.href}>
                <img src={project.image} ref={el => featured2 = el} alt="Project Image" className={FeaturedStyle.right} />
            </a>
        </section>
    )
}

export default FeaturedWrapper