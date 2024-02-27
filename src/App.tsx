import {FunctionComponent} from 'react';
import './App.scss'
import RestaurantPage from "./components/pages/RestaurantPage.tsx";
import {store} from "./store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import {Provider} from "react-redux";
import Layout from "./components/layout/Layout.tsx";
import DishPage from "./components/pages/DishPage.tsx";
import RestaurantItem from "./components/restaurant/restaurantItem/RestaurantItem.tsx";
import DishMenuList from "./components/restaurant/menuItem/DishMenuList.tsx";
import Reviews from "./components/restaurant/reviews/Reviews.tsx";

interface OwnProps {
}

type Props = OwnProps;
const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'restaurants',
        element: <RestaurantPage/>,
        children: [{
          index: true,
          element: 'Select restaurant'
        },
          {
            path: ':restaurantId',
            element: <RestaurantItem/>,
            children: [{
              path: 'menu',
              element: <DishMenuList/>
            },
              {
                path: 'reviews',
                element: <Reviews/>
              }
            ]
          }]
      },
          {
            path: 'dish/:dishId',
            element: <DishPage/>,
  },
  ]
  }
])
const App: FunctionComponent<Props> = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
};

export default App;
