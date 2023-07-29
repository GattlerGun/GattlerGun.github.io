/* eslint-disable no-unused-expressions */
import { NavLink } from 'react-router-dom';
import { Component, useState } from 'react';

import Header from './../components/header/Header';
import { SkillsList } from './../helpers/SkillsList';
import Skills from './../components/skills/Skills';
import { projectsList } from './../helpers/projectsCompList';
import ProjectComp from './../components/project/ProjectComp';
import { Carousel } from './../components/carousel/Carousel';



const Home = (prop) => {
    const [slides, setSlides] = useState([]);

    class RegistrationForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                text: ''
            };
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleTextChange = this.handleTextChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit(event) {
            event.preventDefault();
            setSlides(
                [...slides, {
                    name: this.state.name,
                    text: this.state.text
                }]
            );
        }

        handleNameChange(event) {
            this.setState({ name: event.target.value });
        }
        handleTextChange(event) {
            this.setState({ text: event.target.value });
        }

        render() {
            return (
                < form className="entry__form" onSubmit={this.handleSubmit} >
                    <input
                        className="entry__input"
                        type="text" placeholder="Your name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        required
                    />
                    <textarea
                        className="entry__textarea"
                        placeholder="Your feedback"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        required>
                    </textarea>
                    <button className="btn entry__btn">Submit</button>
                </form >
            );
        }
    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="about" ref={prop.elementRef}>
                    <div className="container">
                        <div className="about__inner">
                            <h2 className="title about__title">My Skills</h2>
                            <ul className="about__list">
                                {SkillsList.map((skill) => {
                                    return (
                                        <Skills
                                            key={skill.id}
                                            title={skill.title}
                                            img={skill.img}
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="projects" id="projects">
                    <div className="container">
                        <div className="projects__inner">
                            <h2 className="title projects__title">My Projects</h2>
                            <div className="projects__items">
                                {projectsList.slice(0, 3).map((project) => {
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
                            {projectsList.length > 3 && <NavLink to={'/projects'} className="projects__more-link">All propjects...</NavLink>}

                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="container">
                        <div className="testimonials__inner">
                            <h2 className="title testimonials__title">Testimonials</h2>
                            <div className="testimonials__box">
                                <Carousel >
                                    {slides.map((slide, index) => {
                                        return (
                                            <div className="testimonials__slide" key={index}>
                                                <div className="testimonials__slide-content">
                                                    <p className="testimonials__name">{slide.name}</p>
                                                    <p className="testimonials__text">
                                                        {slide.text}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="entry">
                    <div className="container">
                        <div className="entry__inner">
                            <h2 className="title entry__title">Leave your feedback</h2>
                            <RegistrationForm />
                        </div>
                    </div>
                </section>
            </main>
        </>);
}

export default Home