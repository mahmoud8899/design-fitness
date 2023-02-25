
import React from "react"
import {createdata} from '../../components/data/index'

export const Experience = () => {


  


    return (
        <div className="width flexwrap flex justify-content">
            <div className="box padding ">
                <div className='SizeImage'>
                    <img
                        src={createdata.image}
                        width='100%'
                        className='border-radius whitebackground heightImage'

                    />
                </div>
            </div>

            <div className="box padding flex flex-column content align-items">
                <h1 className='title font-family-title screencolor text-transform' >{createdata.title}</h1>


                <div className='margin-top'>
                    <p className='white des font-family-des ext-align text-transform'>
                        {createdata.des}
                    </p>
                </div>

                <div className="width flexwrap flex justify-content margin-top " >
                    {createdata.text.map((item, index) => (

                        <div className="flex flex-column align-items box" key={index}>
                            <img
                                src={item.image}
                                width='100px'
                                height='100px'
                            />
                            <h1 className="name font-family-title screencolor text-transform">{item.title}</h1>
                            <div className="">
                                <p className='white des font-family-des ext-align text-transform'>
                                    {item.des}
                                </p>
                            </div>
                        </div>


                    ))}
                </div>

                <div className="backgroundscreen padding border-radiusscreen margin-top  cursor opacity">
                        <span className='white des font-family-des ext-align text-transform ' >
                            {createdata.buttom}
                        </span>
                    </div>

            </div>
        </div>
    )
}