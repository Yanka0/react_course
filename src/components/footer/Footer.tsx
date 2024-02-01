import {FunctionComponent} from 'react';
import styles from './footer.module.scss'

interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = () => {

   return (
        <footer className={styles.footer}>No info</footer>
  );
};

export default Footer;
