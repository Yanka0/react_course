import {FunctionComponent} from 'react';
import Layout from "./components/layout/Layout.tsx";
import './App.scss'
import RestaurantPage from "./components/restaurant/page/RestaurantPage.tsx";
import AuthProvider from "./contexts/Auth.tsx";

interface OwnProps {
}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => {

  return (
    <AuthProvider>
    <Layout>
      <RestaurantPage/>
    </Layout>
    </AuthProvider>
  );
};

export default App;
