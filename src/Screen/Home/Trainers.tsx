import React from "react"
import { UrlImage } from "../../Utils/UrlImag"
import {thetrainers} from '../../components/data/index'




export const Trainers = () => {


   


    return (
        <div >
            <div >
                <h1 className="titlename font-family-title white text-transform ext-align ">Our Trainers</h1>
                <h1 className="title font-family-title screencolor text-transform ext-align "> Meet Our Expert Trainers</h1>
            </div>
            <div className="flexwrap flex justify-content">

                {thetrainers?.map((item, index) => (
                    <div className="__Card whitebackground border-radiusscreen overflow margin-" key={index}>
                        <img src={item.image}
                            width='100%'
                            height='300px'
                      
                        />
                        <div className="flex flex-column align-items padding">
                            <h1 className='name font-family-title screencolor text-transform'>{item.name}</h1>

                            <div className=''>
                                <p className='des font-family-des  text-transform'>
                                    {item.des}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}