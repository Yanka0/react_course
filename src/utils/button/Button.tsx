import {FunctionComponent, ReactNode} from 'react';
import styles from './button.module.scss'

type Props = {
  children: ReactNode,
  className?: string,
  onClick?: () => void,
  isDisabled?: boolean
};

const Button: FunctionComponent<Props> = ({children, className, onClick, isDisabled}) => {

  return (<button className={`${styles.btn} ${className}`} onClick={onClick} disabled={isDisabled}>{children}</button>);
};

export default Button;
