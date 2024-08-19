import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
};

const Button = (props: ButtonPropsType) => {
  const {
    type = 'button',
    children,
    disabled,
    className = '',
    ...rest
  } = props;
  return (
    <button
      type={type}
      className={twMerge(
        'px-4 py-1.5 bg-customRed rounded-md text-white flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-90',
        className,
      )}
      disabled={disabled}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
