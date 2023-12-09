import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>We are good at preparing various responsive designs.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>We are skilled in developing a style guide to use throughout the particular application.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>It is our job to test our designs repeatedly.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>We are talented in the field of refining some special transitions</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>We are talented in the field of refining some special animations.</p>

                        </li>
                    </ul>
                </article>
                {/*END OF UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>WEB DEVELOPMENT</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I'm a web developer with in-depth experience in UI/UX design.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I create websites that help organizations address business challenges and meet their needs.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I manage everything from website navigation.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I manage everything fromlayout to a company's web hosting and security architecture.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>

                        </li>
                    </ul>
                </article>
                {/*WEB DEVELOPMENT */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I'm Noman Nehan, a freelance writer and content creator. When I'm not typing away at my keyboard, you can usually find me exploring new hiking trails or experimenting with new recipes in the kitchen.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I'm filming a stunning landscape or a heartwarming human story, my goal is always to inspire and uplift my viewers.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I strive to uncover the stories and perspectives that often go overlooked in mainstream media.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I'm not creating digital content, you can find me painting or practicing yoga.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>From smartphones to smart homes, I love exploring how technology can improve our lives.</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I'm capturing a family's precious moments or showcasing a brand's unique personality, my goal is always to create images that tell a story.</p>

                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Services
