import React from 'react';
import './button.css';

export interface ButtonProps {
  rounded?: "default" | "top"| "bottom"| "rounded10"| "rounded50"| "pill";
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  shadow?: "none" | "small"| "medium"| "large";
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'md',
  backgroundColor,
  label,
  rounded = 'default',
  shadow = 'none',
  ...props
}: ButtonProps) => {
  // const mode = rounded ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button-size--${size}`, `storybook-button-border--${rounded}`, `storybook-button-shadow--${shadow}`].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
