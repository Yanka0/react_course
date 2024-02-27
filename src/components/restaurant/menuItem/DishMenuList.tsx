import {FunctionComponent} from "react";
import {
  useGetDishesByRestaurantIdQuery,
} from "../../../store/services/api.ts";
import DishMenuItem from "./DishMenuItem.tsx";
import {useParams} from "react-router-dom";
import {isIdExist} from "../../../utils/functions.ts";

type Props = {

}
const DishMenuList: FunctionComponent<Props> = () => {
  const {restaurantId} = useParams()
  isIdExist(restaurantId)
  const {data: dishes, isLoading} = useGetDishesByRestaurantIdQuery(restaurantId)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!dishes || !restaurantId) {
    return null;
  }

  return (
    <div>
      {dishes.map(({id, name}) => (
        <DishMenuItem key={id} id={id} name={name}/>
        ))}
    </div>
  );

};
export default DishMenuList