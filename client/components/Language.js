import { Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import Style from '../styles/Modules/Language.module.scss'

class Language extends Component {

    constructor(props){
        super(props)
        this.state = ({
            lang: "en"
        })
        this.changeLang.bind(this)
    }

    changeLang(props){
        this.setState({lang: props.lang});
    }

    render(){
        return (
            <div id={Style.language} className={Style.active}>
                <a href="#" id="languageExit" className={Style.exit}>
                    <FontAwesomeIcon icon={faTimes} />
                </a>
                <ul>
                    <li id="spanish" className={Style.active}>
                        <a>Spanish</a>
                    </li>
                    <li id="english">
                        <a>English</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Language;