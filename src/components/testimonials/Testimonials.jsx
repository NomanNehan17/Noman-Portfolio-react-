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
        name: 'Tina Snow',
        review: 'Modi alies animi dolorem aliquam ea eum belate maiores, consector praesentium quibusdam, comodi velit porro blandities consequatur qui molestic. Dolorem, perspiciatis aspernatur distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'

    },

    {
        avatar: Avt2,
        name: 'Shatta wale',
        review: 'Modi alies animi dolorem aliquam ea eum belate maiores, consector praesentium quibusdam, comodi velit porro blandities consequatur qui molestic. Dolorem, perspiciatis aspernatur distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'

    },
    {
        avatar: Avt3,
        name: 'Kwame Despite',
        review: 'Modi alies animi dolorem aliquam ea eum belate maiores, consector praesentium quibusdam, comodi velit porro blandities consequatur qui molestic. Dolorem, perspiciatis aspernatur distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'

    },
    {
        avatar: Avt4,
        name: 'Nana ama McBrown',
        review: 'Modi alies animi dolorem aliquam ea eum belate maiores, consector praesentium quibusdam, comodi velit porro blandities consequatur qui molestic. Dolorem, perspiciatis aspernatur distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'

    },

]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>review from clients</h5>
            <h2>Testimonials</h2>



            <Swiper className="container testimonials__container" 
             // install Swiper modules
      modules={[ Pagination]}
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
