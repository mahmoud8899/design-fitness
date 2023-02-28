import React from "react"

interface TypeProps {
    placeholder?: string,
    ClassName?: string
}

export const TheInput = (props: TypeProps) => {
    const { placeholder, ClassName } = props



    return (

        <input
            placeholder={placeholder}
            className={ClassName} />

    )
}