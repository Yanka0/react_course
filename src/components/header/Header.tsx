import { FunctionComponent } from 'react';
import styles from './header.module.scss'

type Props = {};

const Header: FunctionComponent<Props> = () => {

  return (<header className={styles.header}>All restaurants</header>);
};

export default Header;
