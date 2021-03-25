import { forwardRef } from 'react'

import ProjectStyle from '../../styles/Modules/Projects.module.scss'

const Project = (props,ref) => {
    return (
        <div ref={ref} className={ProjectStyle.portfolioContainer}>
            <div className={ProjectStyle.left}>
                <div className={ProjectStyle.inner}>
                    <p className={ProjectStyle.subtitle}>
                        {props.subtitle}
                    </p>
                    <p className={ProjectStyle.featuredTitle}>
                        {props.title}
                    </p>
                    <p className={ProjectStyle.featuredDesc}>
                        {props.description}
                    </p>
                </div>
            </div>
            <a href={props.href} >
                <img src={props.image} alt="Project Image" />
            </a>
        </div>
    )
}

export default forwardRef(Project)