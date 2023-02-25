import React from "react"
import { FirstScrren } from "../../components/data"



export const SliderImage = () =>{


    return (
                
        <div className="width flexwrap flex justify-content XSSSS">

        <div className="box padding ">
            <div className='SizeImage'>
                <img
                    src={FirstScrren.image}
                    width='100%'
                    className='border-radius whitebackground heightImage'

                />
            </div>
        </div>

        <div className="box padding flex flex-column content align-items">
            <h1 className='title font-family-title screencolor text-transform' >{FirstScrren.title}</h1>
            <h1 className='titlename font-family-title white text-transform'>{FirstScrren.title2}</h1>
            <h1 className='title font-family-title screencolor text-transform' >{FirstScrren.title3}</h1>
            <h1 className='titlename font-family-title white text-transform' >{FirstScrren.title4}</h1>

            <div className='margin-top'>
                <p className='white des font-family-des ext-align text-transform'>
                    {FirstScrren.des}
                </p>
            </div>


            <div className='flex flex-row align-items content flexwrap  padding'>

                <div className='buttom  border-radiusscreen bordersloid flex align-items content margin- cursor opacity' >
                    <span className='white des font-family-title '>{FirstScrren.firstbuttom}</span>
                </div>
                <div className='buttom  border-radiusscreen backgroundscreen flex align-items content margin- cursor opacity' >
                    <span className='white des font-family-title '>{FirstScrren.lastbuttom}</span>
                </div>


            </div>

        </div>

    </div>

    )
}