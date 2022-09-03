import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from '@components/Input/interfaces';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { name, label, errorLabel, ...props },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    /*  const variant: { [key in InputVariant]: string } = {
            default: '',
            outlined: '',
            oneLine: '',
        };*/

    const isInputError = !!errorLabel && `text-red-700`;

    return (
      <div className='flex pb-[2px] flex-col bg-gradient-to-r from-[#7928ca] to-[#ff0080]'>
        {(label || errorLabel) && (
          <label htmlFor={name} className={`text-xs ${isInputError} bg-white`}>
            {errorLabel || errorLabel}
          </label>
        )}
        <input className='p-2 outline-0' {...props} name={name} ref={ref} />
      </div>
    );
  }
);
