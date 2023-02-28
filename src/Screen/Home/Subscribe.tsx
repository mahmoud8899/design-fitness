import React from "react"
import { TheButtom } from "../../components/buttom"
import { TheInput } from "../../components/input"
import { LazyImage } from "../../components/TheImage"
import { UrlImage } from "../../Utils/UrlImag"


export let TheSubscribe = {
    title: 'Subscribe Our Newsletter',
    des: 'Subscribe and get Our latest article in your inbox',
    image: UrlImage.big,
    input: 'your email',
    buttom: 'Subscribe'
}

export const Subscribe = () => {







    return (
        <div className="position flex flexwrap">
            <LazyImage
                image={TheSubscribe.image}
                width='100%'
                 height='500px'
                 alt='Subscribe'
            />


            <div className="_postion_center flex flexwrap ">
                <h2 className='title font-family-title screencolor text-transform'>{TheSubscribe.title}</h2>
                <div className='__margin__top_bootom'>
                    <p className='whitecolor des font-family-des  text-transform'>
                        {TheSubscribe.des}
                    </p>
                </div>


                <div className="__Card flex flex-row align-items flexwrap content flex-row">
                    <TheInput
                        placeholder={TheSubscribe.input}
                        ClassName='box input font-family-des  text-transform border-radiusscreen padding__left'

                    />

                    <div className="margin-" />
                    <TheButtom
                        Title={TheSubscribe.buttom}
                        Classname="box input backgroundscreen whitecolor des font-family-des  text-transform border-radiusscreen cursor opacity"
                    />

                </div>


            </div>
        </div>
    )
}