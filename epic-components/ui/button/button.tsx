import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = {
  /**
   * Provides the component with children.
   */
  children: React.ReactNode;
  /**
   * Allows to apply custom class names to the component.
   */
  className?: string;
  /**
   * Click handler.
   */
  onClick?: () => void;
};

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={classNames(styles.button, className)}>
      {children}
    </button>
  );
}
