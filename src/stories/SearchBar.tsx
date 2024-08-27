import React from 'react';
import './SearchBar.css';

export interface SearchBarProps {
  rounded?: "default" | "rounded10"| "rounded50"| "pill";
  backgroundColor?: string;
  color?: string;
  padding?: 0 | 1 | 2 | 3;
  label: string;
  placeholder:string;
}

/**
 * Primary UI component for user interaction
 */
export const SearchBar = ({
  backgroundColor,
  label,
  rounded = 'default',
  padding = 1,
  color,
  placeholder,
  ...props
}: SearchBarProps) => {
  // const mode = rounded ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      <label htmlFor="inp">{label}</label>
      <input
        type="text"
        id='inp'
        className={['storybook-searchBar', `storybook-searchBar-padding--${padding}`, `storybook-searchBar-border--${rounded}`].join(' ')}
        {...props}
        placeholder={placeholder}
      /> 
        <style jsx>{`
          input {
            background-color: ${backgroundColor};
            color: ${color}
          }
        `}</style>
    </div>
  );
};
