import React from "react"
import { UrlImage } from "../../Utils/UrlImag"


export const Subscribe = () => {



    let TheSubscribe = {
        title: 'Subscribe Our Newsletter',
        des: 'Subscribe and get Our latest article in your inbox',
        image: UrlImage.big,
        input: 'your email',
        buttom: 'Subscribe'
    }



    return (
        <div className="position flex flexwrap">
            <img src={TheSubscribe.image} width='100%' height='400px' />

            <div className="_postion_center flex flexwrap ">
                <h1 className='title font-family-title screencolor text-transform'>{TheSubscribe.title}</h1>
                <div className='__margin__top_bootom'>
                    <p className='white des font-family-des  text-transform'>
                        {TheSubscribe.des}
                    </p>
                </div>

                <div className="flex flex-row align-items flexwrap content flex-row">
                <input placeholder={TheSubscribe.input} className='input font-family-des  text-transform border-radiusscreen padding__left' />
                <button className="input backgroundscreen white des font-family-des  text-transform border-radiusscreen cursor opacity margin-l"  >{TheSubscribe.buttom}</button>
                </div>
            </div>
        </div>
    )
}