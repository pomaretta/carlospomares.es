import { Component } from 'react'

import LoaderStyle from '../../styles/Modules/Loader.module.scss'

class Loader extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={[LoaderStyle.loader,this.props.isFetching ? LoaderStyle.active : ""].join(" ")} id="loader">
                <p>
                    Loading
                </p>
                <div className={LoaderStyle.dots}>
                    <span className={[LoaderStyle.dot,LoaderStyle.dot1].join(" ")}>·</span>
                    <span className={[LoaderStyle.dot,LoaderStyle.dot2].join(" ")}>·</span>
                    <span className={[LoaderStyle.dot,LoaderStyle.dot3].join(" ")}>·</span>
                </div>
            </div>
        )
    }

}

export default Loader