import {FunctionComponent} from 'react';
import Layout from "./components/layout/Layout.tsx";
import './App.scss'
import RestaurantPage from "./components/restaurant/page/RestaurantPage.tsx";
import AuthProvider from "./contexts/Auth.tsx";
import {Provider} from "react-redux";
import {store} from "./store";

interface OwnProps {
}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => {

  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <RestaurantPage/>
        </Layout>
      </AuthProvider>
    </Provider>
  );
};

export default App;
