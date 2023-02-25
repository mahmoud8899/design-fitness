
import React from "react"
interface buttomtype {
    title?: string,
    classname?: string
}

export const TheButtom = (props: buttomtype) => {
    const { title, classname } = props


    return (
        <div >
            <button className={classname} >
                {title}
            </button>
        </div>
    )
}