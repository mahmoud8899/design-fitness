import Iconfitness from '../../../icons/fitness.svg'
import TheSearch from '../../../icons/search.png'
import sharing from '../../../icons/sharing.png'
import { BiSearch, BiShareAlt } from "react-icons/bi";
import { useState } from 'react';


interface TypeProps {
    tilte?: string
}

type Ultype = {
    _id: number,
    name: string
}
interface datatype {
    title: string,
    icon: string,
    Listnavbar: Ultype[]
}
export const NavBar = (props: TypeProps) => {
    const { tilte } = props


    let data: datatype = {
        title: 'fitness',
        icon: Iconfitness,
        Listnavbar: [
            {
                _id: 1,
                name: 'home'
            },
            {
                _id: 2,
                name: 'training'
            },
            {
                _id: 3,
                name: 'about'
            },
            {
                _id: 4,
                name: 'blog'
            },
            {
                _id: 5,
                name: 'contact'
            },
        ]
    }



    const [css, setCss] = useState<{
        menubar: string,
        hidden: string

    }>({
        menubar: 'menu-btn',
        hidden: 'hidden'
    })

    const Change = () => {
        if (css.menubar === 'menu-btn') {
            setCss({
                ...css,
                menubar: 'menu-btn open',
                hidden: 'hidden open'
            })
        } else {
            setCss({
                ...css,
                menubar: 'menu-btn',
                hidden: 'hidden'
            })
        }
    }

    return (

        <nav className='flex align-items padding flexwrap'>


            <div className='flex align-items box' >
                <div className='iconwidth' >
                    <div className='heart margin-l' />
                    <img src={Iconfitness} className='Svg' />

                </div>
                <h1 className='title font-family font-family-title white'>{data.title}</h1>

                <div onClick={Change} className='icons___' >
                    <div className={css.menubar}  >
                        <div className='menu-btn__burger' />
                    </div>
                </div>

            </div>



            <div className={css.hidden}>
                <ul className='flex align-items justify-content box'>
                    {data.Listnavbar.map((item, index) => (
                        <li key={index} className='name font-family font-family-title cursor white extra'>
                            {item.name}
                        </li>
                    ))}




                    <div className='flex align-items justify-content '>
                        <div className='_width margin-l'>
                            <BiSearch className='font-icon white' />
                        </div>
                        <div className='flex align-items content border-radius sharing backgroundscreen '>

                            <BiShareAlt className='font-icon white' />

                        </div>

                    </div>

                </ul>
            </div>






        </nav>

    )

}