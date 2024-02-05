import React, {FunctionComponent} from 'react';
import styles from './input.module.scss'

type Props = {
  htmlFor: string
  id: string
  type: string
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label: string
  className: string
};

const Input: FunctionComponent<Props> = ({htmlFor, id, type, value, onChange, label, className}) => {

  return (
    <div className={styles.container}>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={id}
             type={type}
             value={value}
             onChange={onChange}
             className={className}/>
    </div>
  );
};

export default Input;
