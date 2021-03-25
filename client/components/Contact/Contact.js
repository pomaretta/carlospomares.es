import React, { Component, createRef, forwardRef, useEffect , useRef } from 'react'
import { gsap, Power4, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import ContactStyle from '../../styles/Modules/Contact.module.scss'

var handleChange = (event) => {
    this.setState({value: event.target.value});
}

var handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
}

const ContactWrapper = (props,ref) => {
    
    const state = React.useState({
        value: ''
    })

    handleChange = handleChange.bind(this);
    handleSubmit = handleSubmit.bind(this);
    
    return (
        <section id={ContactStyle.contact} ref={ref}>
            <div className={ContactStyle.contactContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={ContactStyle.group}>
                        <label htmlFor="name">
                            {props.language.contact[0].TITLE}
                            <span className={ContactStyle.required}>
                                *
                            </span>
                        </label>
                        <input type="text" name="name" id="name" placeholder={props.language.contact[0].PLACEHOLDER} required />
                    </div>

                    <div className={ContactStyle.group}>
                        <label htmlFor="email">
                            {props.language.contact[1].TITLE}
                            <span className={ContactStyle.required}>
                                *
                            </span>
                        </label>
                        <input type="text" name="email" id="email" placeholder={props.language.contact[1].PLACEHOLDER} required />
                    </div>

                    <div className={ContactStyle.group}>
                        <label htmlFor="message">
                            {props.language.contact[2].TITLE}
                            <span className={ContactStyle.required}>
                                *
                            </span>
                        </label>
                        <textarea name="message" id="message" cols="30" rows="10" required defaultValue={props.language.contact[2].PLACEHOLDER} />
                    </div>

                    <input type="submit" value={props.language.contact[3].TITLE} />
                    
                </form>
            </div>
        </section>
    );

}

export default forwardRef(ContactWrapper)