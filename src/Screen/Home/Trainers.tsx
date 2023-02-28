import React from "react"
import { UrlImage } from "../../Utils/UrlImag"
import { thetrainers } from '../../components/data/index'
import { LazyImage } from "../../components/TheImage"




export const Trainers = () => {





    return (
        <div >
            <div >
                <h2 className="titlename font-family-title white text-transform ext-align ">Our Trainers</h2>
                <h2 className="title font-family-title screencolor text-transform ext-align "> Meet Our Expert Trainers</h2>
            </div>
            <div className="flexwrap flex justify-content">

                {thetrainers?.map((item, index) => (
                    <div className="__Card whitebackground border-radiusscreen overflow margin-" key={index}>
                       
                        <LazyImage
                            image={item.image}
                            width='100%'
                            height='300px'
                            alt={item.name}
                        />
                        <div className="flex flex-column align-items padding">
                            <h2 className='name font-family-title screencolor text-transform'>{item.name}</h2>

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