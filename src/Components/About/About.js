import React from 'react';
import A from './About.module.css';

const About = (props) => {
    return (
        <div className={A.about}>
            <img src='https://images.wallpaperscraft.ru/image/vulkan_gory_trava_163696_1280x720.jpg'/>
            <p>В этом уроке я изучаю React JS библиотеку JS написанную разработчиками компании Facebook</p>
        </div>
    );
}

export default About;