import React from 'react'
import { Experience } from './Experience'
import { OurBlog } from './OurBlog'
import { SliderImage } from './SliderImage'
import { Subscribe } from './Subscribe'
import { Trainers } from './Trainers'



export const Home = () => {

    return (
        <div >

            <div className='padding' id='home'>
                <SliderImage />
            </div>
        
            <div id='subscribe'>
            <Subscribe />
            </div>

            <div className='margin-top padding' id='experience'>
                <Experience />
            </div>

            <div className='padding' id='trainers'>
                <Trainers />
            </div>

            <div className='padding' id='blog'>
                <OurBlog />
            </div>


        </div>
    )

}