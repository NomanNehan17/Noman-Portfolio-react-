import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id='about'>
            <h5>
                Get To Know</h5>
            <h2>About Me</h2>


            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About " />

                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ years working</small>

                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>

                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>projects</h5>
                            <small>80+ Completed </small>

                        </article>
                    </div>
                    <p>
                    I'm a motivated and diligent university student currently in my third year of honors at the International Islamic University. Throughout my academic career, I've been a dedicated student, consistently achieving excellent grades and making the Dean's List multiple times. I'm particularly interested in competitive programming and web development and have participated in several research projects related to this field. I'm also an active member of the university community, having served as a volunteer in various student organizations and events. In my free time, I enjoy playing cricket. After completing my degree, I plan to pursue a career in software engineering, where I hope to apply my knowledge and skills to make a positive impact on society.
                    </p>
                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About
