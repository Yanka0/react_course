import  {FunctionComponent, ReactNode} from 'react';
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";


type Props = {
  children: ReactNode
};

const Layout: FunctionComponent<Props> = ({children}) => {

  return (<div>
    <Header/>
    <div>{children}</div>
    <Footer/>
  </div>);
};

export default Layout;
