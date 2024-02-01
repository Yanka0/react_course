import  { FunctionComponent } from 'react';
import styles from './footer.module.scss'
interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = () => {

   return (
      <div className={styles.wrapper}>
        <footer className={styles.footer}>No info</footer>
      </div>
  );
};

export default Footer;
