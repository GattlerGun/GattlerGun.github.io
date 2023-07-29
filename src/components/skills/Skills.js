import './skills.scss';

const Skills = ({title, img}) => {
    return (
        <li className="about__item">
            <div className="about__img svg-icon">
                <img src={img} alt={title} />
            </div>
            <p className="about__text">{title}</p>
        </li>
    );
}

export default Skills;