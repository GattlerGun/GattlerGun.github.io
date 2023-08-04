import { useParams } from "react-router-dom";

import { projectsList } from "./../helpers/projectsCompList";

import { SkillsList } from './../helpers/SkillsList';
import Skills from './../components/skills/Skills';

const Projects = () => {
    const { id } = useParams();
    const project = projectsList[id];
    return (
        <>
            <main className="main">
                <section className="project projects-page">
                    <div className="container">
                        <div className="project__inner">
                            <h1 className="title project__title">{project.title}</h1>
                            <div className="project__img">
                                <picture>
                                    <source srcSet={project.imgAvif} type="image/avif" media="All" />
                                    <source srcSet={project.imgWebp} type="image/webp" media="All" />
                                    <img src={project.img} alt={project.title} />
                                </picture>
                            </div>
                            <ul className="project__list about__list">
                                {project.skills.map((pSkill) => {
                                    return <div key={pSkill}>{
                                        SkillsList.map((skill) => {
                                            if (skill.title === pSkill) {
                                                return <Skills
                                                    key={skill.id}
                                                    title={skill.title}
                                                    img={skill.img}
                                                />
                                            } return null
                                        })}
                                    </div>
                                })}
                            </ul>
                            <p className="project__description">{project.description}</p>
                            <a className="project__link" target="_blank" href={project.url} rel="noreferrer">Go to project</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Projects;