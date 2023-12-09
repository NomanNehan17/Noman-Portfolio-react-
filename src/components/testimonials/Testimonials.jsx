import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data = [

    {
        avatar: Avt1,
        name: 'Dennis Ritchie',
        review: 'I would like to thank all of the team for the hard work over the years, they have always responded quickly by solving any issue that our company have had. Such as implementing new projects, software, updates, quickly and effectively, and many other issues even general enquiries that we may have had.'

    },

    {
        avatar: Avt2,
        name: 'Linus Torvalds',
        review: 'I wanted to thank the team at The Web Surgery for all their help to design and build my website and to look after all the marketing. I have daily compliments about how nice it looks and how easy it is to use. I would recommend them to anyone wanting to have an online presence.'

    },
    {
        avatar: Avt3,
        name: 'Tim Berners-Lee',
        review: 'Very responsive support during website build and after sales service has been excellent. Everything that they said they would do they have done so and delivered on time every time and we can now relax knowing the web surgery is supporting our business. I am looking forwards to more support from the web surgery as our business continues to grow.'

    },
    {
        avatar: Avt4,
        name: 'Brian Kernighan',
        review: 'I would like to thank you once again for all your help and support as Chair of Marketing for the Hampstead Business Association and in particular the BID (Business Improvement District) project and Christmas Festival. The results of your efforts were fantastic - what a crowd we had and what power there is in marketing and social media which you handled exceedingly well.'

    },

]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>review from clients</h5>
            <h2>Testimonials</h2>



            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}

                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'> {review}


                                </small>

                            </SwiperSlide>
                        )
                    })

                }
            </Swiper>
        </section>
    )
}

export default Testimonials
