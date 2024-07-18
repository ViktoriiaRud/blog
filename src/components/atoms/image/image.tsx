import React from 'react';

export type ImageType = {
    srcImage: string;
    altText: string;
};


import { StyledImageWrapper } from './image.styles';
const Image = ({
                      srcImage,
                      altText,
                      className,
                  }: ImageType & { className?: string }) => {
    if (!srcImage) return null;

    return (
        <StyledImageWrapper src={srcImage} alt={altText} className={className} />
    );
};

export default Image;
