import * as React from 'react';
import cx from 'classnames';

export const Button = React.forwardRef(function Button(
  { variant = 'primary', ...props },
  forwardedRef
) {
  return (
    <button
      type="button"
      {...props}
      className={cx(
        'mr-flex mr-items-center mr-justify-center mr-px-8 mr-py-3 mr-border mr-border-transparent mr-text-base mr-font-medium mr-rounded-md',
        'md:mr-py-4 md:mr-text-lg md:mr-px-10',
        classByVariant[variant],
        props.className
      )}
      ref={forwardedRef}
    />
  );
});

const classByVariant = {
  primary: 'mr-text-white mr-bg-pink-600 hover:mr-bg-pink-700',
  white: 'mr-text-pink-600 mr-bg-white hover:mr-bg-gray-50',
};
