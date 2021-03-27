import { Component, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import HeaderStyle from '../../styles/Modules/Header.module.scss'
import LanguageStyle from '../../styles/Modules/Language.module.scss'

class Heading extends Component {

    constructor(props){
        super(props)
    }

    shouldComponentUpdate(nextProps,nextState){
        if (this.state == null)
            return true;
  
        if (this.state.test == nextState.test)
            return false;
        
        return true;
    }

    render(){
        return (
            <div id={HeaderStyle.header}>
                <header>
                    <a href="." className={HeaderStyle.logo}>
                        {this.props.language.header.LOGO}
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href="#projects">
                                    {this.props.language.header.nav[0]}
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    {this.props.language.header.nav[1]}
                                </a>
                            </li>
                            <li>
                                <a id={HeaderStyle.languageToggler} onClick={this.props.handleClick} >
                                    <span id={HeaderStyle.languageIndicator}>
                                        {this.props.lang}
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faChevronDown} className={HeaderStyle.icon} />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className={HeaderStyle.socialHeader}>
                    <ul>
                        <li>
                            <a href="https://www.github.com/pomaretta" target="_blank">
                                <FontAwesomeIcon icon={faGithub} className={HeaderStyle.icon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/pomaretta" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} className={HeaderStyle.icon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/carlos-pomares-949292180/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className={HeaderStyle.icon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

class Language extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id={LanguageStyle.language} className={this.props.active ? LanguageStyle.active : ""}>
                <a href="#" className={LanguageStyle.exit} onClick={this.props.exit}>
                    <FontAwesomeIcon icon={faTimes} />
                </a>
                <ul>
                    <li id="spanish" className={!this.props.lang ? LanguageStyle.active : ""} onClick={this.props.langHandler}>
                        <a>Spanish</a>
                    </li>
                    <li id="english" className={this.props.lang ? LanguageStyle.active : ""} onClick={this.props.langHandler}>
                        <a>English</a>
                    </li>
                </ul>
            </div>
        );
    }
}

class HeaderWrapper extends Component {

    constructor(props){
        super(props)

        this.state = {
            // lang: true,
            langHandler: false
        };

        // this.changeLang = this.changeLang.bind(this)
        this.clickLang = this.clickLang.bind(this)

    }

    // changeLang(){
    //     this.setState({
    //         lang: !this.state.lang
    //     })
    // }

    clickLang(){
        this.setState({
            langHandler: !this.state.langHandler
        });
        if(!this.state.langHandler){
            document.body.classList.add("active");
        } else {
            document.body.classList.remove("active");
        }
    }

    render(){
        return (
            <div>
                <Language language={this.props.language} lang={this.props.lang} active={this.state.langHandler} langHandler={this.props.changeLang} exit={this.clickLang} />
                <Heading language={this.props.language} lang={this.props.lang ? "EN" : "ES"} handleClick={this.clickLang} />
            </div>
        );
    }

}

export default HeaderWrapper;