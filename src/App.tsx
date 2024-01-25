import  { FunctionComponent } from 'react';
import Layout from "./components/layout/Layout.tsx";
import RestaurantList from "./components/restaurant/restaurantList/RestaurantList.tsx";
import './App.scss'

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => {

  return (<Layout>
    <RestaurantList/>
  </Layout>);
};

export default App;
