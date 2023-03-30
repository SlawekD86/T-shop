import React from 'react';
import styles from './OptionColors.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColors = (props) => {
    const prepareColorClassName = (color) => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map((color) => (
                    <li key={color}>
                        <button
                            type="button"
                            className={clsx(
                                prepareColorClassName(color),
                                color === props.currentColor && styles.active
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                props.setCurrentColor(color);
                            }}
                        >
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

OptionColors.propTypes = {
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColors;
