import React from "react"
import { TheButtom } from "../../components/buttom"
import { FirstScrren } from "../../components/data"
import { LazyImage } from "../../components/TheImage"



export const SliderImage = () => {


    return (

        <div className="width flexwrap flex justify-content ">

            <div className="box padding ">
                <div className='SizeImage '>
                    <LazyImage
                        image={FirstScrren.image}
                        width='100%'
                        className='border-radius backgroundscreen heightImage '
                        alt='Our Trainers'
                    />

                </div>
            </div>

            <div className="box padding flex flex-column content align-items">
                <h2 className='title font-family-title screencolor text-transform' >{FirstScrren.title}</h2>
                <h2 className='titlename font-family-title white text-transform'>{FirstScrren.title2}</h2>
                <h2 className='title font-family-title screencolor text-transform' >{FirstScrren.title3}</h2>
                <h2 className='titlename font-family-title white text-transform' >{FirstScrren.title4}</h2>

                <div className='margin-top'>
                    <p className='white des font-family-des ext-align text-transform'>
                        {FirstScrren.des}
                    </p>
                </div>


                <div className='flex flex-row align-items content flexwrap  padding'>
                    <TheButtom
                        Title={FirstScrren.firstbuttom}
                        Classname='buttom  border-radiusscreen bordersloid  margin- cursor opacity white des font-family-des'
                    />
                    <TheButtom
                        Title={FirstScrren.lastbuttom}
                        Classname='outline buttom  border-radiusscreen backgroundscreen  margin- cursor opacity whitecolor des font-family-des  text-transform'

                    />

                </div>

            </div>

        </div>

    )
}