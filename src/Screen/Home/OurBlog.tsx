import { TheBlog } from '../../components/data/index'
import { LazyImage } from '../../components/TheImage'



export const OurBlog = () => {




    return (
        <div>

            <div className="__margin__top_bootom">
                <h2 className="titlename font-family-title white text-transform ext-align ">{TheBlog.title}</h2>
                <h2 className="title font-family-title screencolor text-transform ext-align ">{TheBlog.des}</h2>
            </div>
            <div className="flexwrap flex justify-content align-items">

                {TheBlog.data.map((item, index) => (
                    <div className="box margin- " key={index}>
                
                        <LazyImage
                            image={item.image}
                            width='100%'
                            height='300px'
                            className="border-radiusscreen"
                            alt='our blog'
                        />

                        <div className="">
                            <h2 className='name font-family-title screencolor text-transform'>{item.title}</h2>

                            <div className=''>
                                <p className='white des font-family-des  text-transform'>
                                    {item.des}
                                </p>
                            </div>

                        </div>
                        <div className="widthhund backgroundscreen padding border-radiusscreen margin-top  cursor opacity">
                            <span className="whitecolor des font-family-des ext-align text-transform ">
                                {item.buttom}
                            </span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}