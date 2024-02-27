import  { FunctionComponent } from 'react';
import DishMenuItem from "../restaurant/menuItem/DishMenuItem.tsx";
import {useParams} from "react-router-dom";
import {
  useGetDishByIdQuery,
} from "../../store/services/api.ts";
import {isIdExist} from "../../utils/functions.ts";



type Props = {};


const DishPage: FunctionComponent<Props> = () => {
  const {dishId} = useParams()
  isIdExist(dishId)
  const { data: dish, isLoading } = useGetDishByIdQuery(dishId);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!dish) {
    return <div>Dish not found</div>;
  }
  return (
    <div>
    <DishMenuItem id={dishId} name={dish.name}/>
    <p>{dish.name}</p>
    <p>{dish.ingredients}</p>
    <p>{dish.price}</p>
  </div>
  );
};

export default DishPage;
