import { NavBardata } from '../../components/data/index'
import { BiSearch, BiShareAlt } from "react-icons/bi";

interface ClassType {
    AddStyle?: string
}



export const TheListNavBar = (props: ClassType) => {
    const { AddStyle } = props




    return (
        <ul className={AddStyle ? AddStyle : 'flex align-items justify-content Ex'}>
            {NavBardata.Listnavbar.map((item, index) => (
                <a href={item.link} key={index} className=''>
                    <li className='name font-family font-family-title cursor white extra'>
                        {item.name}
                    </li>
                </a>
            ))}
            <div className='flex align-items justify-content Ex'>
                <div className='_width margin-l'>
                    <BiSearch className='font-icon white' />
                </div>
              
            </div>

        </ul>
    )
}