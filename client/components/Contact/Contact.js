import React, { Component, createRef, forwardRef, useEffect , useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYinYang } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import ContactStyle from '../../styles/Modules/Contact.module.scss'

class ContactForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            mail: '',
            message: this.props.language.contact[3].PLACEHOLDER
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMailChange = this.handleMailChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)

    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    handleMailChange(event) {
        this.setState({mail: event.target.value})
    }
    
    handleMessageChange(event) {
        this.setState({message: event.target.value})
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        axios.post('http://localhost:8000/mail',{
            name: this.state.name,
            mail: this.state.mail,
            message: this.state.message
        })
        .then(res => {
            this.props.changeActive(false)

            this.setState({
                name: '',
                mail: '',
                message: ''
            })

        })
        .catch(err => {
            this.props.changeActive(true)
        })
        .finally(() => {
            setTimeout(() => {
                this.props.changeActive(false)
            },2000)
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={ContactStyle.group}>
                    <label htmlFor="name">
                        {this.props.language.contact[0].TITLE}
                        <span className={ContactStyle.required}>
                            *
                        </span>
                    </label>
                    <input type="text" name="name" id="name" placeholder={this.props.language.contact[0].PLACEHOLDER} required onChange={this.handleNameChange} value={this.state.name} />
                </div>
                <div className={ContactStyle.group}>
                    <label htmlFor="email">
                        {this.props.language.contact[1].TITLE}
                        <span className={ContactStyle.required}>
                            *
                        </span>
                    </label>
                    <input type="text" name="email" id="email" placeholder={this.props.language.contact[1].PLACEHOLDER} onChange={this.handleMailChange} value={this.state.mail} required />
                </div>
                <div className={ContactStyle.group}>
                    <label htmlFor="message">
                        {this.props.language.contact[2].TITLE}
                        <span className={ContactStyle.required}>
                            *
                        </span>
                    </label>
                    <textarea name="message" id="message" cols="30" rows="10" required defaultValue={this.state.message} onChange={this.handleMessageChange} />
                </div>
                <input type="submit" value={this.props.language.contact[3].TITLE} />
            </form>
        )
    }

}

class Validation extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={[ContactStyle.validation,this.props.active ? ContactStyle.active : ""].join(" ")}>
                <h3>{this.props.error ? this.props.language.greetings.ERROR : this.props.language.greetings.TITLE}!</h3>
                <FontAwesomeIcon icon={faYinYang} className={[ContactStyle.icon,this.props.error ? ContactStyle.error : ""].join(" ")} />
            </div>
        )
    }

}

const ContactWrapper = (props,ref) => {

    const [state,setState] = React.useState({
        validation: false,
        error: false
    })
    
    let setActive = (flag) => {
        setState({
            validation: !state.validation,
            error: flag
        })
    }

    setActive = setActive.bind(this)

    return (
        <section id={ContactStyle.contact} ref={ref}>
            <div className={ContactStyle.contactContainer}>
                <Validation language={props.language} active={state.validation} error={state.error} />
                <ContactForm language={props.language} changeActive={setActive} />
            </div>
        </section>
    );

}

export default forwardRef(ContactWrapper)