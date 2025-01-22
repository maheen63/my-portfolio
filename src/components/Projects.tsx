import React from 'react';
import Heading from './Heading';
import Card from './Card';

interface Project {
    id: number;
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const data: Project[] = [
    {
        id: 0,
        title: "Static Resume Builder",
        desc: "A React & TypeScript based app for managing and organizing tasks efficiently.",
        img: "/project 0.png.png", 
        tags: ["HTML", "CSS", "Typescript"],
    }
];

const Projects = () => {
    return (
        <div id='projects' className='container pt-32' data-aos="zoom-out-right">
            <Heading title='My Projects'  />
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (
                    <Card 
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;