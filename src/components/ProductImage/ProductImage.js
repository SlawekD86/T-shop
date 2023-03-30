import React from 'react';
import styles from '../ProductImage/ProductImage.module.scss';

export const ProductImage = ({
    title,
    currentColor,
    currentSize,
    name,
}) => {


    const imageAlt = `${title} - ${currentColor} - ${currentSize}`
    const imageSrc = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`


    return (<div className={styles.imageContainer}>
        <img className={styles.image} alt={imageAlt}
            src={imageSrc} />
    </div>)
}