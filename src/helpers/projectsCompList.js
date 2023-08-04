import projectAvif01 from './../images/project1.avif';
import projectWebp01 from './../images/project1.webp';
import projectJpg01 from './../images/project1.jpg';
import projectAvif02 from './../images/project2.avif';
import projectWebp02 from './../images/project2.webp';
import projectJpg02 from './../images/project2.jpg';

const projectsList = [
    {
        id: '0',
        title: 'HandScissors',
        description: 'Website for a beauty salon',
        imgAvif: projectAvif01,
        imgWebp: projectWebp01,
        img: projectJpg01,
        url: 'https://gattlergun.github.io/HandScissors/',
        skills: ['HTML', 'SCSS', 'GULP', 'BEM', 'JS']
    },
    {
        id: '1',
        title: 'MisuTeru',
        description: 'Website for a restaurant',
        imgAvif: projectAvif02,
        imgWebp: projectWebp02,
        img: projectJpg02,
        url: 'https://gattlergun.github.io/MisuTeru/',
        skills: ['HTML', 'SCSS', 'GULP', 'BEM', 'JS']
    },
]

export {projectsList}