import {FunctionComponent} from 'react';
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import AuthProvider from "../../contexts/Auth.tsx";
import {Outlet} from "react-router-dom";

type Props = {};

const Layout: FunctionComponent<Props> = () => {
  return (<div>
    <AuthProvider>
      <Header/>
      <div><Outlet/></div>
      <Footer/>
    </AuthProvider>
  </div>);
};

export default Layout;
