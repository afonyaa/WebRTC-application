import { FC } from 'react';
import { ButtonProps } from '@components/Button/interfaces';

export const Button: FC<ButtonProps> = ({ title, variant, ...rest }) => {
  let bgColor = 'bg-white';
  switch (variant) {
    case 'primary':
      bgColor = 'bg-pink-800 hover:bg-pink-900';
      break;
    case 'secondary':
      bgColor = 'bg-indigo-500 hover:bg-indigo-600';
      break;
  }
  return (
    <button
      className={`transition-all ${bgColor} text-slate-200 mt-2 p-2 text-sm`}
      {...rest}
    >
      {title}
    </button>
  );
};
