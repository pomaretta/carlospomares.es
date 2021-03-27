import { useEffect , useRef } from 'react'
import { gsap, Power4, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import SkillStyle from '../../styles/Modules/Skill.module.scss'

import Skill from './Skill'

const SkillWrapper = (props) => {

    let skill1 = useRef(null)
    let skill2 = useRef(null)
    let skill3 = useRef(null)

    let skills = [
        skill1,
        skill2,
        skill3
    ]

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.from(skills,{
            scrollTrigger: {
                trigger: "#skills",
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })

    }, [])

    return (
        <section id="skills" className={SkillStyle.skills}>
            <div className={SkillStyle.skillsContainer}>
                <ul id="scrollTrigger">
                    {
                        props.language.skills.map(
                            (skill,i) => 
                            <Skill
                                key={skill.TITLE+i}
                                image={skill.IMAGE}
                                title={skill.TITLE}
                                description={skill.DESCRIPTION}
                                ref={el => skills[i] = el}
                            />
                            )
                    }
                    {/* <Skill 
                        image="http://localhost:5500/model/assets/icon-ux.svg"
                        title="HTML Design"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?" 
                        ref={el => skill1 = el}
                    />
                    <Skill 
                        image="http://localhost:5500/model/assets/icon-ux.svg"
                        title="HTML Design"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?"
                        ref={el => skill2 = el} 
                    />
                    <Skill 
                        image="http://localhost:5500/model/assets/icon-ux.svg"
                        title="HTML Design"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?"
                        ref={el => skill3 = el}
                    /> */}
                </ul>
            </div>
        </section>
    )
}

export default SkillWrapper