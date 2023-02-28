import { UrlImage } from "../../Utils/UrlImag";

interface FirstData {
    title: string,
    title2: string,
    title3: string,
    title4: string,
    des: string,
    image: string,
    firstbuttom: string,
    lastbuttom: string,
}

// first screen 
export const FirstScrren: FirstData = {

    title: 'Raise your fitness',
    title2: 'routine to the',
    title3: 'professional',
    title4: 'standards',
    des: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Quis ipsum suspendisse ultrices.`,
    image: UrlImage.person,
    firstbuttom: 'Join Us',
    lastbuttom: 'Know More'
}

type ExperTypes = {
    _id?: number,
    image?: string,
    name?: string,
    title?: string,
    des?: string,
    buttom?: string,
    input?: string
}
interface Experience {
    image: string,
    title: string,
    des: string,
    text: ExperTypes[],
    buttom: string
}
// Experience
export let createdata: Experience = {

    image: UrlImage.about,
    title: '10 Years Experience',
    des: 'Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum',
    text: [
        {
            _id: 1,
            title: 'Certified GYM Center',
            des: 'Ipsum sanctu dolor ipsum dolore sit et kasd duo',
            image: UrlImage.Certified
        },
        {
            _id: 2,
            title: 'Award Winning',
            des: 'Ipsum sanctu dolor ipsum dolore sit et kasd duo',
            image: UrlImage.Award
        }
    ],
    buttom: 'Learn More'
}


// Trainer
export let thetrainers: ExperTypes[] = [
    {
        _id: 1,
        name: 'Trainer Name',
        des: 'Trainer',
        image: UrlImage.Team_1
    },
    {
        _id: 2,
        name: 'Trainer Name',
        des: 'Trainer',
        image: UrlImage.Team_2
    },
    {
        _id: 3,
        name: 'Trainer Name',
        des: 'Trainer',
        image: UrlImage.Team_3
    },
    {
        _id: 4,
        name: 'Trainer Name',
        des: 'Trainer',
        image: UrlImage.Team_4
    },
]


interface BlogTypes {

    title: string,
    des: string,
    data: ExperTypes[]
}
// Blog
export let TheBlog: BlogTypes = {
    title: 'Our Blog',
    des: 'Latest Article From Blog',

    data: [
        {
            _id: 1,
            title: 'Lorem ipsum dolor sit amet',
            image: UrlImage.blog_1,
            buttom: 'read more',
            des: ` Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam`

        },
        {
            _id: 2,
            title: 'Lorem ipsum dolor sit amet',
            image: UrlImage.blog_2,
            buttom: 'read more',
            des: ` Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam`

        }
    ]

}
type Ultype = {
    _id: number,
    name: string,
    link: string
}
interface datatype {
    title: string,
    icon: string,
    Listnavbar: Ultype[]
}

// nav bar 
export let NavBardata: datatype = {
    title: 'fitness',
    icon: UrlImage.Iconfitness,
    Listnavbar: [
        {
            _id: 5,
            name: 'home',
            link: '#home',
        },
        {
            _id: 1,
            name: 'blog',
            link: '#blog',
        },
        {
            _id: 2,
            name: 'trainers',
            link: '#trainers',
        },
        {
            _id: 3,
            name: 'experience',
            link: '#experience',
        },
        {
            _id: 4,
            name: 'subscribe',
            link: '#subscribe',
        },
       
    ]
}



// TheSubscribe
export let TheSubscribe: ExperTypes = {
    title: 'Subscribe Our Newsletter',
    des: 'Subscribe and get Our latest article in your inbox',
    image: UrlImage.big,
    input: 'your email',
    buttom: 'Subscribe'
}
