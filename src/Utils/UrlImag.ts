import PersonImage from '../../design/person.png'
import about from '../../design/about.jpg'
import Certified from '../../icons/Certified.png'
import Award from '../../icons/Award.png'
import big from '../../design/bg.jpg'
import Iconfitness from '../../icons/fitness.svg'
import Team_1 from '../../design/team-1.jpg'
import Team_2 from '../../design/team-2.jpg'
import Team_3 from '../../design/team-3.jpg'
import Team_4 from '../../design/team-4.jpg'

import blog_1 from '../../design/blog-1.jpg'
import blog_2 from '../../design/blog-2.jpg'
interface TypeImage {
    person: string,
    about: string,
    Certified: string,
    Award: string,
    big: string,
    Iconfitness : string,
    Team_1: string,
    Team_2: string,
    Team_3: string,
    Team_4: string,
    blog_1: string,
    blog_2: string,
}

export const UrlImage:TypeImage = {

    person: PersonImage,
    about: about,
    Certified: Certified,
    Award: Award,
    big: big,
    Iconfitness : Iconfitness,
    Team_1: Team_1,
    Team_2: Team_2,
    Team_3: Team_3,
    Team_4: Team_4,
    blog_1: blog_1,
    blog_2: blog_2
}