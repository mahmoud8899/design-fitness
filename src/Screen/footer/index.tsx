import { Log } from "../NavBar/Log";
import { TheListNavBar } from '../NavBar/ListNavBar'
import { TheInput } from "../../components/input";
import { TheButtom } from "../../components/buttom";
import {TheSubscribe} from '../../components/data/index'

// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// <div className="flex flex-column ">
// <FaFacebookF className="white bordersloid padding border-radius opacity font-icon" />
// <FaTwitter className="white bordersloid padding border-radius opacity font-icon" />
// <FaInstagram className="white bordersloid padding border-radius opacity font-icon" />
// <FaLinkedinIn className="white bordersloid padding border-radius opacity font-icon" />
// </div>



export const Footer = () => {


    return (
        <footer className="blackBackgroun">

            <div className="flex justify-content flex-row  flexwrap align-items padding">


                <div className="__Card">
                    <div className="padding">
                        <Log />
                    </div>

                </div>

                <div className="__Card">
                    <TheListNavBar
                        AddStyle='flex flex-column'
                    />
                </div>



                <div className="__Card padding">
                <h2 className='title font-family-title screencolor text-transform'>{TheSubscribe.title}</h2>
                <div className='__margin__top_bootom'>
                    <p className='white des font-family-des  text-transform'>
                        {TheSubscribe.des}
                    </p>
                </div>

                    <div className="flex flex-row align-items flexwrap content flex-row">
                        <TheInput
                            placeholder={TheSubscribe?.input}
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
        </footer>
    )
}