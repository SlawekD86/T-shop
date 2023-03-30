import React from 'react';
import OptionColors from '../OptionColors/OptionColors';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import styles from './OptionForm.module.scss';

const OptionForm = (props) => {
  
  return (
    <div>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} setCurrentPrice={props.setCurrentPrice} />
      <OptionColors colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button} onClick={props.summary}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </div>
  );
};

OptionForm.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentPrice: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    summary: PropTypes.func.isRequired,
};
export default OptionForm;