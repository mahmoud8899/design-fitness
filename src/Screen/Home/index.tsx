import React from 'react'
import { Experience } from './Experience'
import { OurBlog } from './OurBlog'
import { SliderImage } from './SliderImage'
import { Subscribe } from './Subscribe'
import { Trainers } from './Trainers'



export const Home = () => {

    return (
        <div className=''>


          



            <div className='padding'>
                <SliderImage />
            </div>

            <div className=''>
                <Subscribe />
            </div>

            <div className='margin-top padding'>
                <Experience />
            </div>

            <div className='padding'>
                <Trainers />
            </div>

            <div className='padding'>
                <OurBlog />
            </div>


        </div>
    )

}