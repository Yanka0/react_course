import {FunctionComponent, useEffect, useState} from 'react';
import RestaurantTabs from "../restaurantsTabs/RestaurantTabs.tsx";
import SelectedRestaurant from "../selectedRestaurant/SelectedRestaurant.tsx";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants, RestaurantData} from "../../../store/entities/restaurant/thunks/get-restaurants.ts";
import Layout from "../../layout/Layout.tsx";
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {selectIsLoading} from "../../../store/ui/request";
import {RootState} from "../../../store";

type Props = {}

const RestaurantPage: FunctionComponent<Props> = () => {
  const [restaurantIdToRender, setRestaurantIdToRender] = useState<string | null>(null)
  const [requestId, setRequestId] = useState<string | null>(null);
  const isLoading = useSelector(
    (state:RootState) => requestId && selectIsLoading(state, requestId)
  )
  const dispatch: ThunkDispatch<RestaurantData, void, UnknownAction> = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getRestaurants()).requestId)
  }, [dispatch])

  const handleRestaurantClick = (restaurantIdToRender: string) => {
    setRestaurantIdToRender(restaurantIdToRender);
  };


  return (
    <Layout>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <RestaurantTabs onClick={handleRestaurantClick}/>
            <SelectedRestaurant restaurantIdToRender={restaurantIdToRender}/>
          </>
        )}
    </Layout>
  );
};

export default RestaurantPage;
