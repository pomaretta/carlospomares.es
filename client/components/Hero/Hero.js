import { Component , createRef, useEffect , useRef } from 'react'
import { gsap, Power4, Back } from 'gsap'
import Typewriter from 't-writer.js'

// Style
import HeroStyle from '../../styles/Modules/Hero.module.scss'

const HeroWrapper = (props) => {

    // HERO
    let hero = useRef(null)
    
    // HEADINGS
    let heading1 = useRef(null)
    let heading2 = useRef(null)
    let heading3 = useRef(null)

    // SQUARES
    let square1 = useRef(null)
    let square2 = useRef(null)
    let square3 = useRef(null)
    let square4 = useRef(null)
    let square5 = useRef(null)
    let square6 = useRef(null)
    let square7 = useRef(null)
    let square8 = useRef(null)

    useEffect(() => {
        
        const headings = [
            heading1
            ,heading2
            ,heading3
        ]

        const squares = [
            square1,
            square2,
            square3,
            square4,
            square5,
            square6,
            square7,
            square8
        ]

        gsap.from(headings
            ,{
                opacity: 0,
                y: -50,
                stagger: .3,
                ease: Power4.easeOut,
                duration: 2
            },
            "-=1.5"
        )

        gsap.from(hero,
            {
                opacity: 0
                , y: 50
                , ease: Power4.easeOut
                , duration: 1
            },
            "-=2"
        )

        gsap.from(squares,
            {
                opacity: 0,
                stagger: .2,
                scale: 0.1,
                duration: 1,
                ease: Back.easeOut.config(1.7)
            }
        )
        
        const options = {
            loop: false,
            animateCursor: true,
            typeColor: 'fff',
            cursorColor: '#011627'
        }

        const writer = new Typewriter(heading1,options)

        writer
            .clear()
            .type(props.language.hero.TITLE)
            .removeCursor()
            .start()

    },[])

    return (
        <section id={HeroStyle.hero} >
            <div className={HeroStyle.content}>
                <h1 ref={el => heading1 = el}></h1>
                <div className={HeroStyle.meet} ref={el => heading2 = el}>
                    <span>⚡</span>
                    <p>
                        {props.language.hero.SUBTITLE}
                    </p>
                </div>
                <svg className={HeroStyle.scroll} ref={el => heading3 = el} width="40" height="77" viewBox="0 0 40 77">
                    <g id="scroll" transform="translate(-253 -787)">
                    <g id="Rectangle_12" transform="translate(253 787)" fill="none" stroke="#fff" strokeWidth="4">
                        <rect width="40" height="77" rx="20" stroke="none"></rect>
                        <rect x="2" y="2" width="36" height="73" rx="18" fill="none"></rect>
                    </g>
                    <circle className={HeroStyle.circle} id={HeroStyle.Ellipse_1} data-name="Ellipse 1" cx="11" cy="11" r="11" transform="translate(262 798)" fill="#fff"></circle>
                    </g>
                </svg>
            </div>
            <svg id={HeroStyle.heroDesign} ref={el => hero = el} width="686" height="688" viewBox="0 0 686 688">
                <g id="blockdesign" transform="translate(-935 -289)">
                    <rect ref={el => square1 = el} width="172" height="172" rx="19" transform="matrix(1,0,0,1,1277,289)" fill="#e71d36" ></rect>
                    <rect ref={el => square2 = el} width="172" height="172" rx="86" transform="matrix(1,0,0,1,1277,461)" fill="#2ec4b6" ></rect>
                    <rect ref={el => square3 = el} width="172" height="172" rx="19" transform="matrix(1,0,0,1,1449,461)" fill="#E5D5FA" ></rect>
                    <rect ref={el => square4 = el} width="172" height="172" rx="19" transform="matrix(1,0,0,1,1277,633)" fill="#e71d36" ></rect>
                    <rect ref={el => square5 = el} width="172" height="172" rx="19" transform="matrix(1,0,0,1,1107,461)" fill="#FFFFFF" ></rect>
                    <rect ref={el => square6 = el} width="172" height="172" rx="86" transform="matrix(1,0,0,1,1107,633)" fill="#011627" ></rect>
                    <rect ref={el => square7 = el} width="172" height="172" rx="19" transform="matrix(1,0,0,1,935,633)" fill="#FFFFFF" opacity="0.17"></rect>
                    <rect ref={el => square8 = el} width="172" height="172" rx="19" transform="matrix(1,0,0,1,1107,805)" fill="#FFFFFF" ></rect>
                </g>
            </svg>
        </section>
    )

}

export default HeroWrapper