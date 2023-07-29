import { NavLink } from 'react-router-dom';

import ProjectComp from './../components/project/ProjectComp';
import { projectsList } from './../helpers/projectsCompList';

const Projects = () => {
    return (
        <>
            <main className="main">
                <section className="projects projects-page" id="projects">
                    <div className="container">
                        <div className="projects__inner">
                            <h2 className="title projects__title">My Projects</h2>
                            <div className="projects__items">
                                {projectsList.map((project) => {
                                    return (
                                        <NavLink key={project.id} to={'/project/' + project.id} className="projects__item-link">
                                            <ProjectComp  
                                                title={project.title}
                                                description={project.description}
                                                imgAvif={project.imgAvif}
                                                imgWebp={project.imgWebp}
                                                mg={project.img}
                                            />
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>);
}

export default Projects;