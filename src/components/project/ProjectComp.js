
import './projectComp.scss';

const ProjectComp = ({title, imgAvif, imgWebp, img, description}) => {
    return (
        <div className="projects__item">
            <div className="projects__img">
                <picture>
                    <source srcSet={imgAvif} type="image/avif" media="All" />
                    <source srcSet={imgWebp} type="image/webp" media="All" />
                    <img src={img} alt={title} />
                </picture>
            </div>
            <h4 className="projects__item-title">{title}</h4>
            <p className="projects__item-description">{description}</p>
            <div className="projects__item-btn">more...</div>
        </div>
    );
}

export default ProjectComp;