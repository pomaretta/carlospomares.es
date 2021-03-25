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
                            Name
                            <span className={ContactStyle.required}>
                                *
                            </span>
                        </label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" required />
                    </div>

                    <div className={ContactStyle.group}>
                        <label htmlFor="email">
                            Email
                            <span className={ContactStyle.required}>
                                *
                            </span>
                        </label>
                        <input type="text" name="email" id="email" placeholder="Enter Your Email" required />
                    </div>

                    <div className={ContactStyle.group}>
                        <label htmlFor="message">
                            message
                            <span className={ContactStyle.required}>
                                *
                            </span>
                        </label>
                        <textarea name="message" id="message" cols="30" rows="10" required defaultValue="Enter Your Message" />
                    </div>

                    <input type="submit" value="Send" />
                    
                </form>
            </div>
        </section>
    );

}

export default forwardRef(ContactWrapper)