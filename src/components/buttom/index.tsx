
import React from "react"
interface buttomtype {
    Title?: string,
    Classname?: string
}

export const TheButtom = (props: buttomtype) => {
    const { Title, Classname } = props


    return (
        <button className={Classname} >{Title}</button>
    )
}