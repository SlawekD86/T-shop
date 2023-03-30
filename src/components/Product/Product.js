import React from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ProductImage } from '../ProductImage/ProductImage';
import OptionsForm from '../OptionForm/OptionForm';
import { useMemo } from 'react';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;
  };

  const finalPrice = useMemo(getPrice, [currentPrice, props.basePrice]);



  const summary = (e) => {
    e.preventDefault();
    console.log("=== Summary ===");
    console.log("Name:", props.title);
    console.log("Size:", currentSize);
    console.log("Color:", currentColor);
    console.log("Price:", finalPrice);
  };

  return (
    <article className={styles.product}>

      <ProductImage
        title={props.title}
        currentColor={currentColor}
        currentSize={currentSize}
        name={props.name}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}> {getPrice()}$</span>
        </header>
        <form>
          <OptionsForm
            sizes={props.sizes}
            currentSize={currentSize}
            currentColor={currentColor}
            setCurrentSize={setCurrentSize}
            setCurrentPrice={setCurrentPrice}
            colors={props.colors}
            setCurrentColor={setCurrentColor}
            summary={summary}
          />
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
