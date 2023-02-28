import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface TypeTXS {
    image?: string,
    alt?: string,
    height?: string,
    width?: string,
    className? : string,
}



export const LazyImage = (props: TypeTXS) => {
    const { alt, image, width, height } = props


    return (
        <LazyLoadImage
            alt={alt}
            height={height}
            src={image} 
            width={width}
         
        />
    )
}