import {FunctionComponent} from 'react';
import Layout from "./components/layout/Layout.tsx";
import './App.scss'
import RestaurantPage from "./components/restaurant/page/RestaurantPage.tsx";

interface OwnProps {
}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => {

  return (
    <Layout>
      <RestaurantPage/>
    </Layout>
  );
};

export default App;
