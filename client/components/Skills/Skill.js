import { forwardRef } from 'react'

import SkillStyle from '../../styles/Modules/Skill.module.scss'

const Skill = (props,ref) => {
    return (
        <li ref={ref}>
            <div className={SkillStyle.iconContainer}>
                <img src={props.image} alt="Project Image" />
            </div>
            <p className={SkillStyle.skillTitle}>
                {props.title}
            </p>
            <p className={SkillStyle.featuredDesc}>
                {props.description}
            </p>
        </li>
    );
}

export default forwardRef(Skill)