import { FC } from 'react';
import { backLinkVariant, defaultVariant, outlinedVariant } from './styles';
import { ButtonProps } from '@components/Button/interfaces';
import { ButtonVariantKey } from './interfaces';
import classNames from 'classnames';

export const Button: FC<ButtonProps> = ({
  title,
  variant,
  className: outerClassName,
  ...restProps
}) => {
  const classVariant: { [key in ButtonVariantKey]: string } = {
    default: defaultVariant,
    outlined: outlinedVariant,
    backLink: backLinkVariant,
  };
  return (
    <button
      className={classNames(
        variant ? classVariant[variant] : classVariant['default'],
        outerClassName
      )}
      {...restProps}
    >
      {title}
    </button>
  );
};
