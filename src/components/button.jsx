import clsx from 'classnames';
import * as React from 'react';
import styles from './button.module.css';

export const Button = React.forwardRef(function Button(
  { variant = 'primary', size = 'default', ...props },
  forwardedRef
) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        styles.btn,
        classBySize[size],
        classByVariant[variant],
        props.className
      )}
      ref={forwardedRef}
    />
  );
});

const classByVariant = {
  primary: styles.primary,
  white: styles.white,
};

const classBySize = {
  default: styles.defaultSize,
  small: styles.smallSize,
};
