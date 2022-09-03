import { ForwardedRef, forwardRef } from 'react';

import { InputProps, FormInputVariantKey } from './interfaces';
import { defaultVariant, labelClass, outlinedVariant } from './styles';
import classNames from 'classnames';

export const Input = forwardRef(
  (
    {
      variant,
      name,
      className: outerClassName,
      label,
      errorMessage,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const isError = !!errorMessage;
    const classVariant: { [key in FormInputVariantKey]: string } = {
      default: defaultVariant(isError),
      outlined: outlinedVariant(isError),
    };

    return (
      <div>
        <label className={labelClass(isError)}>
          {label} {isError && <span>{errorMessage}</span>}
        </label>
        <input
          name={name}
          ref={ref}
          className={classNames(
            variant && classVariant[variant],
            outerClassName
          )}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
